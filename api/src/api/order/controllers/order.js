

'use strict';

/**
 * order controller
*/

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const { createCoreController } = require('@strapi/strapi').factories;



module.exports = createCoreController(
    'api::order.order',
    ({ strapi }) => ({
        async create(ctx) {
            const { products } = ctx.request.body;

            const lineItems = await Promise.all(
                products.map(async (product) => {

                    const item = await strapi
                        .service("api::product.product")
                        .findOne(product.id)

                    return {
                        price_data: {
                            currency: "usd",
                            product_data: {
                                name: item.title,
                                images: [item.photo],
                            },
                            unit_amount: item.price * 100,
                        },
                        quantity: product.quantity,
                    };
                }

                )
            )

            try {
                const session = await stripe.checkout.sessions.create({
                    mode: "payment",
                    success_url: `${process.env.STRIPE_DOMAIN}?success=true`,
                    cancel_url: `${process.env.STRIPE_DOMAIN}?canceled=true`,
                    line_items: lineItems,
                    payment_method_types: ["card"]
                })


                await strapi
                    .service("api::order.order")
                    .create({
                        data: {
                            stripeId: session.id,
                            products: products,
                        }
                    })

                return { stripeSession: session }


            } catch (error) {
                ctx.response.status = 500;
                return error

            }
        }
    })
);
