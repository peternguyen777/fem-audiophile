const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

export default async (req, res) => {
  const { items, data } = req.body;

  const transformedItems = items.map((item) => ({
    quantity: item.quantity,
    price_data: {
      currency: "aud",
      product_data: {
        name: item.name,
        images: ["https://fem-audiophile.vercel.app" + item.image],
      },
      unit_amount: item.price * 100,
    },
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [
      {
        shipping_rate: "shr_1LWaztFpnqJcmIGp55YShpYJ",
      },
    ],

    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/checkout?success=true`,
    cancel_url: `${process.env.HOST}/checkout?cancel=true`,
    metadata: {
      data: JSON.stringify(data),
      items: JSON.stringify(items),
    },
  });

  res.status(200).json({ id: session.id });
};
