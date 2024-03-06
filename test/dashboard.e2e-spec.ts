import { expect, test } from '@playwright/test'

test('display day orders amount metric', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  const totalMonthIncome = page.getByText('R$ 200,00')
  const totalMonthSubtitle = page.getByText('-5% em relação a ontem').first()
  const monthOrders = page.getByText('100').first()
  const monthOrdersSubtitle = page
    .locator('div')
    .filter({ hasText: /^-5% em relação ao mês passado100$/ })
    .getByRole('paragraph')
  const dayOrders = page.getByText('100').nth(1)
  const dayOrdersSubtitle = page.getByText('-5% em relação a ontem')
  const monthCancelled = page.getByText('200', { exact: true })
  const monthCancelledSubtitle = page
    .locator('div')
    .filter({ hasText: /^200-5% em relação ao mês passado$/ })
    .getByRole('paragraph')

  expect(totalMonthIncome).toBeVisible()
  expect(totalMonthSubtitle).toBeVisible()
  expect(monthOrders).toBeVisible()
  expect(monthOrdersSubtitle).toBeVisible()
  expect(dayOrders).toBeVisible()
  expect(dayOrdersSubtitle).toBeVisible()
  expect(monthCancelled).toBeVisible()
  expect(monthCancelledSubtitle).toBeVisible()
})
