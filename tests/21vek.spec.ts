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
let itemName: string;

test.beforeEach(async ({page}) => {
    homePage = new HomePage(page);
    cartPage = new CartPage(page);
    comparePage = new ComparePage(page);
    favoritesPage = new FavoritesPage(page);
    itemPage = new ItemPage(page);
    searchResultsPage = new SearchResultsPage(page);
    await homePage.goto();
    await homePage.acceptPopupWindows();
    itemName = await homePage.randomItemName();
});

test('Search results', async ({ page }) => {
    await homePage.search(itemName);
    await expect(searchResultsPage.searchResultsItemName).toHaveText(itemName);
});

test('Add to cart', async ({page}) => {
    await homePage.search(itemName);
    await expect(searchResultsPage.searchResultsItemName).toHaveText(itemName);
    await homePage.addToCart();
    await homePage.openCart();
    await expect(cartPage.cartItems).toHaveText(itemName);
});

test('Remove from cart', async ({page}) => {
    await homePage.search(itemName);
    await expect(searchResultsPage.searchResultsItemName).toHaveText(itemName);
    await homePage.addToCart();
    await homePage.openCart();
    await expect(cartPage.cartItems).toHaveText(itemName);
    await cartPage.removeItem();
    await cartPage.confirmRemove();
    expect(cartPage.emptyCartMessage.isVisible()).toBeTruthy();
});

test('Add to favorites', async ({page}) => {
    await homePage.search(itemName);
    await expect(searchResultsPage.searchResultsItemName).toHaveText(itemName);
    await searchResultsPage.searchResultsItemLink.click();
    await itemPage.addToFavorite();
    await homePage.openAccount();
    await homePage.openFavorites();
    expect(favoritesPage.favoritesItems).toHaveText(itemName);
});

test('Add to compare', async ({page}) => {
    await homePage.search(itemName);
    await expect(searchResultsPage.searchResultsItemName).toHaveText(itemName);
    await searchResultsPage.searchResultsItemLink.click();
    await itemPage.addToComparison();
    await itemPage.goToComparison();
    expect(comparePage.compareItems).toContainText(itemName);
});