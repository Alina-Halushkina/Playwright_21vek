import {HomePage} from "./home.page";

export class ItemPage extends HomePage {

    get addToFavoriteButton() {
        return this.page.getByRole('button', {name: 'В избранное'})
    };

    get addToComparisonButton() {
        return this.page.getByRole('button', { name: 'Добавить к сравнению' })
    };

    get goToComparisonButton() {
        return this.page.getByRole('button', { name: 'Перейти в сравнение' })
    };


    async addToFavorite() {
        await this.addToFavoriteButton.click()
    };

    async addToComparison() {
        await this.addToComparisonButton.click()
    };

    async goToComparison() {
        await this.goToComparisonButton.click()
    };
}