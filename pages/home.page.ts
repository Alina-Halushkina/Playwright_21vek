import {BasePage} from "./base.page";

export class HomePage extends BasePage {
    async acceptPopupWindows() {
        this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByText('Принять').click();
        await this.page.getByText('Нет, спасибо').click();
    }


    get searchInput() {
        return this.page.getByPlaceholder('Поиск товаров')
    };
    async search(query: string) {
        await this.searchInput.fill(query);
        await this.searchInput.press('Enter')
    };


    get addToCartButton() {
        return this.page.getByRole('button', { name: 'В корзину' })
    };
    async addToCart() {
        await this.addToCartButton.click()
    };


    get cartIcon() {
        return this.page.getByRole('link', {name: 'Корзина'})
    };
    async openCart() {
        await this.cartIcon.click()
    };


    get accountIcon() {
        return this.page.getByRole('button', { name: 'Аккаунт' })
    };
    async openAccount() {
        await this.accountIcon.click()
    };

    get favoritesButton() {
        return this.page.getByRole('link', { name: 'Избранные товары' });
    }
    async openFavorites() {
        await this.favoritesButton.click();
    }

    async randomItemName() {
        return await this.page.getByTestId('card-info').first().innerText()
    }
}