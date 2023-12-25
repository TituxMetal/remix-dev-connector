import { faker } from '@faker-js/faker'
import { expect, test } from '@playwright/test'

test.describe('Home Page', () => {
  test('has login button', async ({ page }) => {
    await page.goto('/')
    const loginBtn = await page.getByRole('link', { name: /log in/i })
    loginBtn.click()

    await expect(loginBtn).toBeVisible()
    await expect(page).toHaveURL(/login/)
  })
  test('has signin button', async ({ page }) => {
    await page.goto('/')

    const signupBtn = await page.getByRole('link', { name: /sign up/i })
    signupBtn.click()

    await expect(signupBtn).toBeVisible()
    await expect(page).toHaveURL(/join/)
  })
})

const validEmail = 'rachel@remix.run'
const validPassword = 'racheliscool'

test.describe('Login Flow', () => {
  test('allows a user to log in', async ({ page }) => {
    // Navigate to the login page
    await page.goto('/login')

    // Fill in the login form
    await page.fill('input[name="email"]', validEmail)
    await page.fill('input[name="password"]', validPassword)

    // Click the login button
    await page.click('button[type="submit"]')

    // Assert that the login was successful and we are redirected to the notes page
    await expect(page).toHaveURL(/notes/)

    // Optionally check for a logout button to confirm that the user is logged in
    const logoutBtn = await page.getByRole('button', { name: /logout/i })
    await expect(logoutBtn).toBeVisible()
  })
})

test.describe('Signup Flow', () => {
  test('allows a user to sign up', async ({ page }) => {
    // Navigate to the login page
    await page.goto('/join')

    // Fill in the signup form
    await page.fill('input[name="email"]', faker.internet.email())
    await page.fill('input[name="password"]', 'johniscool')

    // Click the signup button
    await page.click('[type="submit"]')

    // Assert that the signup was successful and we are redirected to the notes page
    await expect(page).toHaveURL('/')

    // Optionally check for a "view notes for" button to confirm that the user is logged in
    const logoutBtn = await page.getByRole('link', { name: /view notes for/i })
    await expect(logoutBtn).toBeVisible()
  })
})
