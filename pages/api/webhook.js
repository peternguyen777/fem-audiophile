import { buffer } from "micro";
import * as admin from "firebase-admin";

//secure a connection to firebase from the backend
const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

//establish connection to stripe
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session) => {
  // console.log("fulfilling order", session);

  return app
    .firestore()
    .collection("users")
    .doc(JSON.parse(session.metadata.data).email)
    .collection("orders")
    .doc(session.id)
    .set({
      amount_total: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      customerData: JSON.parse(session.metadata.data),
      items: JSON.parse(session.metadata.items),
      paid: true,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS: Order ${session.id} had been added to the DB`);
    })
    .catch((err) => console.log(err.message));
};

export default async (req, res) => {
  if (req.method === "POST") {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers["stripe-signature"];

    let event;

    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log("ERR", err.message);
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }

    //handle checkout.session completed event

    if (event.type === "checkout.session.completed") {
      const session = event.data.object;

      //fulfill order
      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
    }
  }
};

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
