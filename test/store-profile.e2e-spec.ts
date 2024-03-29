import { expect, test } from '@playwright/test'

test('sign up successfully', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Xablau')
  await page.getByLabel('Descrição').fill('Lorem Ipsum')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Perfil atualizado com sucesso.')
  await expect(toast).toBeVisible()

  await page.getByRole('button', { name: 'Close' }).click()

  const updatedName = page.getByRole('button', { name: 'Xablau' })

  await expect(updatedName).toBeVisible()
})

test('sign up with error', async ({ page }) => {
  await page.goto('/', { waitUntil: 'networkidle' })

  await page.getByRole('button', { name: 'Pizza Shop' }).click()
  await page.getByRole('menuitem', { name: 'Perfil da loja' }).click()

  await page.getByLabel('Nome').fill('Error Response')
  await page.getByLabel('Descrição').fill('Lorem Ipsum')

  await page.getByRole('button', { name: 'Salvar' }).click()

  await page.waitForLoadState('networkidle')

  const toast = page.getByText('Falha ao atualizar o perfil, tente novamente!')

  await expect(toast).toBeVisible()
})
