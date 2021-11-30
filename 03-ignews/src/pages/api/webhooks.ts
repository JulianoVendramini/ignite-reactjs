import { NextApiRequest, NextApiResponse } from "next";
import { Readable } from 'stream'
import Stripe from "stripe";
import { stripe } from "../../services/stripe";

async function buffer(readble: Readable){
    const chunks = []

    for await (const chunk of readble) {
        chunks.push(
            typeof chunk === 'string' ? Buffer.from(chunk) : chunk
        )
    }

    return Buffer.concat(chunks)
}

export const config = {
    api: {
        bodyParser: false
    }
}

const relevantsEvents = new Set([
    'checkout.session.completed',
])

const webHooks = async ( req: NextApiRequest, res: NextApiResponse ) => {
    if(req.method === 'POST'){
        const buf = await buffer(req)
        const secret = req.headers['stripe-signature']

        let event: Stripe.Event

        try{
            event = stripe.webhooks.constructEvent(buf, secret, process.env.STRIPE_WEBOOK_SECRET)
        }catch(err){
            return res.status(405).end(`Webhook error ${err.message}`)
        }

        const { type } = event
  
        if(relevantsEvents.has(type)){
            console.log('evento recebido', event);
        }

        res.json({
            receivied: true
        })
    }else{
        res.setHeader('Allow', 'POST')
        res.status(405).end('Method Not Allowed')
    }
}

export default webHooks