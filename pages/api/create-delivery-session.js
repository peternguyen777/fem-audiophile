import * as admin from "firebase-admin";

const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT_KEY);

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

export default async (req, res) => {
  const { items, data, totalPrice, shippingPrice } = req.body;

  return app
    .firestore()
    .collection("users")
    .doc(data.email)
    .collection("orders")

    .add({
      amount: totalPrice,
      amount_shipping: shippingPrice,
      customerData: data,
      items: items,
      paid: false,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => res.status(200).send(`SUCCESS: Order has been added to DB`))
    .catch((err) => res.status(400).send(`Webhook Error: ${err.message}`));
};
