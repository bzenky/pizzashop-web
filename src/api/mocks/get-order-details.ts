import { http, HttpResponse } from 'msw'

import {
  GetOrderDetailsParams,
  GetOrderDetailsResponse,
} from '../get-order-details'

export const getOrderDetailsMock = http.get<
  GetOrderDetailsParams,
  never,
  GetOrderDetailsResponse
>('/orders/:orderId', ({ params }) => {
  return HttpResponse.json({
    id: params.orderId,
    customer: {
      name: 'Jonh Doe',
      email: 'john-doe@example.com',
      phone: '9999999999',
    },
    status: 'pending',
    createdAt: new Date().toISOString(),
    totalInCents: 5000,
    orderItems: [
      {
        id: 'order-id-1',
        priceInCents: 1000,
        quantity: 1,
        product: {
          name: 'Pizza 4 Queijos',
        },
      },
      {
        id: 'order-id-2',
        priceInCents: 2000,
        quantity: 2,
        product: {
          name: 'Pizza de Bacon',
        },
      },
    ],
  })
})
