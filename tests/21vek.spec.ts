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
    await homePage.search('Телевизор LG 43UR78009LL');
    await expect(searchResultsPage.searchResultsItemName).toHaveText('Телевизор LG 43UR78009LL');
    await homePage.addToCart();
    await homePage.openCart();
    await expect(cartPage.cartItems).toHaveText('Телевизор LG 43UR78009LL');
    await cartPage.removeItem();
    await cartPage.confirmRemove();
    expect(cartPage.emptyCartMessage.isVisible()).toBeTruthy();
});

test('Add to favorites', async ({page}) => {
    await homePage.search('Телевизор LG 43UR78009LL');
    await expect(searchResultsPage.searchResultsItemName).toHaveText('Телевизор LG 43UR78009LL');
    await searchResultsPage.searchResultsItemLink.click();
    await itemPage.addToFavorite();
    await homePage.openAccount();
    await homePage.openFavorites();
    expect(favoritesPage.favoritesItems).toHaveText('Телевизор LG 43UR78009LL');
});

test('Add to compare', async ({page}) => {
    await homePage.search('Телевизор LG 43UR78009LL');
    await expect(searchResultsPage.searchResultsItemName).toHaveText('Телевизор LG 43UR78009LL');
    await searchResultsPage.searchResultsItemLink.click();
    await itemPage.addToComparison();
    await itemPage.goToComparison();
    expect(comparePage.compareItems).toContainText('Телевизор LG 43UR78009LL');
});