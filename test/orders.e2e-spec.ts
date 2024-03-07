import { expect, test } from '@playwright/test'

test('list orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  const order1 = page.getByRole('cell', { name: 'Customer 1', exact: true })
  const order10 = page.getByRole('cell', { name: 'Customer 10' })

  await expect(order1).toBeVisible()
  await expect(order10).toBeVisible()
})

test('paginate orders', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Próxima página' }).click()

  const order11 = page.getByRole('cell', { name: 'Customer 11', exact: true })
  const order20 = page.getByRole('cell', { name: 'Customer 20' })

  await expect(order11).toBeVisible()
  await expect(order20).toBeVisible()

  await page.getByRole('button', { name: 'Última página' }).click()

  const order51 = page.getByRole('cell', { name: 'Customer 51', exact: true })
  const order60 = page.getByRole('cell', { name: 'Customer 60' })

  await expect(order51).toBeVisible()
  await expect(order60).toBeVisible()

  await page.getByRole('button', { name: 'Página anterior' }).click()

  const order41 = page.getByRole('cell', { name: 'Customer 41', exact: true })
  const order50 = page.getByRole('cell', { name: 'Customer 50' })

  await expect(order41).toBeVisible()
  await expect(order50).toBeVisible()

  await page.getByRole('button', { name: 'Primeira página' }).click()

  const order1 = page.getByRole('cell', { name: 'Customer 1', exact: true })
  const order10 = page.getByRole('cell', { name: 'Customer 10' })

  await expect(order1).toBeVisible()
  await expect(order10).toBeVisible()
})

test('filter by order id', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Id do pedido').fill('order-11')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'order-11' })).toBeVisible()
})

test('filter by customer name', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByPlaceholder('Nome do cliente').fill('Customer 47')
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  await expect(page.getByRole('cell', { name: 'Customer 47' })).toBeVisible()
})

test('filter by status', async ({ page }) => {
  await page.goto('/orders', { waitUntil: 'networkidle' })

  await page.getByRole('combobox').click()
  await page.getByLabel('Pendente').click()
  await page.getByRole('button', { name: 'Filtrar resultados' }).click()

  const tableRows = page.getByRole('cell', { name: 'Pendente' })

  await expect(tableRows).toHaveCount(10)
})
