import { env } from "~/env.mjs";

import {
  createTRPCRouter,
  publicProcedure,
  protectedProcedure,
} from "~/server/api/trpc";

import Stripe from "stripe";
const stripe = new Stripe(env.PRIVATE_STRIPE_KEY, {
  apiVersion: "2023-08-16",
});

export const checkoutRouter = createTRPCRouter({
  createCheckout: protectedProcedure.mutation(async ({ ctx }) => {
    return stripe.checkout.sessions.create({
      metadata: {
        userId: ctx.session.user.id,
      },
      success_url: `${env.HOST_NAME}/generate`,
      cancel_url: `${env.HOST_NAME}/generate`,
      line_items: [{ price: env.PRICE_ID, quantity: 1 }],
      mode: "payment",
    });
  }),
});
