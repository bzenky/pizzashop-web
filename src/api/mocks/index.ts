import { setupWorker } from 'msw/browser'

import { env } from '@/env'

import { approveOrderMock } from './approve-order'
import { cancelOrderMock } from './cancel-order'
import { deliveryOrderMock } from './delivery-order'
import { dispatchOrderMock } from './dispatch-order'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period'
import { getDayOrdersAmountMock } from './get-day-orders-amount'
import { getManagedRestaurantMock } from './get-managed-restaurant'
import { getMonthCanceledOrdersAmountMock } from './get-month-canceled-orders-amount'
import { getMonthOrdersAmountMock } from './get-month-orders-amount'
import { getMonthRevenueMock } from './get-month-revenue'
import { getOrderDetailsMock } from './get-order-details'
import { getOrdersMock } from './get-orders'
import { getPopularProductsMock } from './get-popular-products'
import { getProfileMock } from './get-profile'
import { registerRestaurantMock } from './register-restaurant-mock'
import { signInMock } from './sign-in-mock'
import { updateProfileMock } from './update-profile'

export const worker = setupWorker(
  signInMock,
  registerRestaurantMock,
  getDayOrdersAmountMock,
  getMonthOrdersAmountMock,
  getMonthCanceledOrdersAmountMock,
  getMonthRevenueMock,
  getDailyRevenueInPeriodMock,
  getMonthOrdersAmountMock,
  getPopularProductsMock,
  getProfileMock,
  getManagedRestaurantMock,
  updateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliveryOrderMock,
  dispatchOrderMock,
)

export async function enableMSW() {
  if (env.MODE !== 'test') return

  await worker.start()
}
