import { http, HttpResponse } from 'msw'

import { GetDailyRevenueInPeriodResponse } from '../get-daily-revenue-in-period'

export const getDailyRevenueInPeriodMock = http.get<
  never,
  never,
  GetDailyRevenueInPeriodResponse
>('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '01/01/2024', receipt: 1000 },
    { date: '02/01/2024', receipt: 7770 },
    { date: '03/01/2024', receipt: 5135 },
    { date: '04/01/2024', receipt: 1234 },
    { date: '05/01/2024', receipt: 7572 },
    { date: '06/01/2024', receipt: 3436 },
    { date: '07/01/2024', receipt: 4646 },
  ])
})
