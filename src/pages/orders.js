import Header from "@/components/Header";
import { getSession, useSession } from "next-auth/react";
import { db } from "@/utils/firebase";
import { collection, getDocs } from "firebase/firestore"; 
import moment from "moment/moment";

export async function getServerSideProps(context) {
  const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

  //get users logged in credentials
  const session = await getSession(context)

  if (!session) {
    return {
      props: {},
    };
  }
  //firebase db
  const stripeOrders = await getDocs(collection(db, `users`, `${session.user.email}`, 'orders'))
  console.log('stripe orders: ', stripeOrders)
  //stripe orders
  const orders = await Promise.all(
    stripeOrders.docs.map(async (order) => ({
      id: order.id,
      amount: order.data().amount,
      amountShipping: order.data().amount_shipping,
      images: order.data().images,
      timestamp: moment(order.data().timestamp.toDate()).unix(),
      items: (
        await stripe.checkout.sessions.listLineItems(order.id, {
          limit: 100
        })
      ).data,
    }))
  )

  console.log("orders: ", orders)

  return {
    props: {orders}
  }
}

export default function Orders({ orders }) {

  const {data: session} = useSession();
 

  return (
    <div className="h-screen bg-gray-100">
      <Header />
      <main className="flex flex-col max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">Your Orders</h1>
        {session ? (
          <h2>Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}

        <div className="mt-5 space-y-4"></div>

      </main>
    </div>
  )
}