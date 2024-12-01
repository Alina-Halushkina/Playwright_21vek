import {BasePage} from "./base.page";

class HomePage extends BasePage {
    get searchInput() {
        return await this.page.getByPlaceholder('Поиск товаров')
    };
    async search(query: string) {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter')
    };


    get addToCartButton() {
        return await this.page.getByRole('button', { name: 'В корзину' })
    };
    async addToCart() {
        await this.addToCartButton.click()
    };


    get cartIcon() {
        return await this.page.getByRole('link', {name: 'Корзина'})
    };
    async openCart() {
        await this.cartIcon.click()
    };


    get accountIcon() {
        return await this.page.getByRole('button', { name: 'Аккаунт' })
    };
    async openAccount() {
        await this.accountIcon.click()
    };


    get favoritesButton() {
        return await this.page.getByRole('link', { name: 'Избранные товары' });
    }
    async openFavorites() {
        await this.favoritesButton.click();
    }
}

export default new HomePage();