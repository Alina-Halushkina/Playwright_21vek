import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.21vek.by/');
    page.on('dialog', dialog => dialog.accept());
    await page.getByText('Принять').click();
    // await page.getByText('Нет, спасибо').click();
});

test('Search results', async ({ page }) => {
    await page.getByPlaceholder('Поиск товаров').click();
    await page.getByPlaceholder('Поиск товаров').fill('Телевизор LG 43UR78009LL');
    await page.keyboard.press('Enter');
    await expect(page.locator("span[class$='name']")).toHaveText('Телевизор LG 43UR78009LL');
    await page.getByRole('button', { name: 'В корзину' }).click();
    await page.getByRole('link', { name: 'Корзина' }).click();
    expect(page.locator("a[class*='title']")).toHaveText('Телевизор LG 43UR78009LL');
});
