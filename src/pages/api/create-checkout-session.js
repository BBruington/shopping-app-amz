
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

export default async function createCheckoutSession(req, res)  {
  //the req is retieving items and email from the checkout 
  //page 
  const { items, email } = req.body;

  const transformedItems = items.map((item) => ({
    quantity: 1,
    price_data: {
      currency: 'usd',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image]
      },
    }
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_options: [{
      shipping_rate_data: {
        type: 'fixed_amount',
        fixed_amount: {amount: 699, currency: 'usd'},
        display_name: 'Next-Day Shipping',
        delivery_estimate: {
          minimum: {unit: 'business_day', value: 1},
          maximum: {unit: 'business_day', value: 3},
        },
      },
    }],
    //shipping_rates: ['shr_1MfWn7ID2roIB7hy1CLO74VI'],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA'],
    },
    line_items: transformedItems,
    mode: "payment",
    success_url: `${process.env.HOST}/success`,
    cancel_url: `${process.env.HOST}/checkout`,
    metadata: {
      email: email,
      images: JSON.stringify(items.map(item => item.image)),
    },
  });

  //I create a session in the format that stripe likes for 
  //my purchasing methog and in return, it'll send me an id
  //i can use to redirect the user to stripe checkout
  res.status(200).json({id: session.id})
};