import { test, expect } from '@playwright/test';
import basePage from '../pages/base.page';
import {HomePage} from "../pages/home.page";
import {ComparePage} from "../pages/compare.page";
import {CartPage} from "../pages/cart.page";
import {FavoritesPage} from "../pages/favorites.page";
import {ItemPage} from "../pages/item.page";
import {SearchResultsPage} from "../pages/searchResults.page";


let cartPage:CartPage;
let homePage:HomePage;
let comparePage:ComparePage;
let favoritesPage:FavoritesPage;
let itemPage:ItemPage;
let searchResultsPage:SearchResultsPage;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    comparePage = new ComparePage(page);
    favoritesPage = new FavoritesPage(page);
    itemPage = new ItemPage(page);
    searchResultsPage = new SearchResultsPage(page);
    await homePage.goto();
    await homePage.acceptPopupWindows();
});

test('Search results', async ({ page }) => {
    await homePage.search('Телевизор LG 43UR78009LL');
    await expect(searchResultsPage.searchResultsItemName).toHaveText('Телевизор LG 43UR78009LL');
});

test('Add to cart', async ({page}) => {
    await homePage.search('Телевизор LG 43UR78009LL');
    await expect(searchResultsPage.searchResultsItemName).toHaveText('Телевизор LG 43UR78009LL');
    await homePage.addToCart();
    await homePage.openCart();
    await expect(cartPage.cartItems).toHaveText('Телевизор LG 43UR78009LL');
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