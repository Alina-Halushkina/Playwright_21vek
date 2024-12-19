import {BasePage} from "./base.page";

export class HomePage extends BasePage {

    get searchInput() {
        return this.page.getByPlaceholder('Поиск товаров')
    };

    get addToCartButton() {
        return this.page.getByRole('button', { name: 'В корзину' }).first()
    };

    get cartIcon() {
        return this.page.getByRole('link', {name: 'Корзина'})
    };

    get accountIcon() {
        return this.page.getByRole('button', { name: 'Аккаунт' })
    };

    get favoritesButton() {
        return this.page.getByRole('link', { name: 'Избранные товары' })
    };

    async addToCart() {
        await this.addToCartButton.click()
    };

    async search(query: string) {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter')
    };

    async openCart() {
        await this.cartIcon.click()
    };

    async openAccount() {
        await this.accountIcon.click()
    };

    async openFavorites() {
        await this.favoritesButton.click()
    };

    async randomItemName() {
        return await this.page.getByTestId('card-info').first().innerText()
    };

    async acceptPopupWindows() {
        this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByText('Принять').click();
        await this.page.getByText('Нет, спасибо').click();
    }
}