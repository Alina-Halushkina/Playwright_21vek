import { test, expect } from '@playwright/test';

test.beforeEach(async ({page}) => {
    await page.goto('https://www.21vek.by/');
    page.on('dialog', dialog => dialog.accept());
    await page.getByText('Принять').click();
    await page.getByText('Нет, спасибо').click();
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

test('Add to cart', async ({page}) => {
    await page.getByPlaceholder('Поиск товаров').click();
    await page.getByPlaceholder('Поиск товаров').fill('Телевизор LG 43UR78009LL');
    await page.keyboard.press('Enter');
    await expect(page.locator("span[class$='name']")).toHaveText('Телевизор LG 43UR78009LL');
    await page.getByRole('button', { name: 'В корзину' }).click();
    await page.getByRole('link', { name: 'Корзина' }).click();
    expect(page.locator("a[class*='title']")).toHaveText('Телевизор LG 43UR78009LL');
});

test('Remove from cart', async ({page}) => {
    await page.getByPlaceholder('Поиск товаров').click();
    await page.getByPlaceholder('Поиск товаров').fill('Телевизор LG 43UR78009LL');
    await page.keyboard.press('Enter');
    await expect(page.locator("span[class$='name']")).toHaveText('Телевизор LG 43UR78009LL');
    await page.getByRole('button', {name: 'В корзину'}).click();
    await page.getByRole('link', {name: 'Корзина'}).click();
    expect(page.locator("a[class*='title']")).toHaveText('Телевизор LG 43UR78009LL');
    await page.locator("button[aria-label='Удалить товар']").click();
    await page.getByTestId('modal-confirmation-button').click();
    expect(page.getByTestId('empty-basket-screen').isVisible()).toBeTruthy();
});

test('Add to favorites', async ({page}) => {
    await page.getByPlaceholder('Поиск товаров').click();
    await page.getByPlaceholder('Поиск товаров').fill('Телевизор LG 43UR78009LL');
    await page.keyboard.press('Enter');
    await expect(page.locator("span[class$='name']")).toHaveText('Телевизор LG 43UR78009LL');
    await page.getByRole('link', { name: 'Телевизор LG 43UR78009LL' }).click();
    await page.getByRole('button', {name: 'В избранное'}).click();
    await page.getByRole('button', { name: 'Аккаунт' }).click();
    await page.getByRole('link', { name: 'Избранные товары' }).click();
    expect(page.locator("div[class*='name'] a")).toHaveText('Телевизор LG 43UR78009LL');
});

test('Add to compare', async ({page}) => {
    await page.getByPlaceholder('Поиск товаров').click();
    await page.getByPlaceholder('Поиск товаров').fill('Телевизор LG 43UR78009LL');
    await page.keyboard.press('Enter');
    await expect(page.locator("span[class$='name']")).toHaveText('Телевизор LG 43UR78009LL');
    await page.getByRole('link', {name: 'Телевизор LG 43UR78009LL'}).click();
    await page.getByRole('button', { name: 'Добавить к сравнению' }).click();
    await page.getByRole('button', { name: 'Перейти в сравнение' }).click();
    expect(page.getByTestId('compare-product')).toContainText('Телевизор LG 43UR78009LL');
});