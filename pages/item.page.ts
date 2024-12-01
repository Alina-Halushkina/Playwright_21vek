import {HomePage} from "./home.page";

export class ItemPage extends HomePage {

    get addToFavoriteButton() {
        return this.page.getByRole('button', {name: 'В избранное'})
    };
    async addToFavorite() {
        await this.addToFavoriteButton.click()
    }


    get addToComparisonButton() {
        return this.page.getByRole('button', { name: 'Добавить к сравнению' });
    }
    async addToComparison() {
        await this.addToComparisonButton.click();
    }


    get goToComparisonButton() {
        return this.page.getByRole('button', { name: 'Перейти в сравнение' })
    };
    async goToComparison() {
        await this.goToComparisonButton.click();
    };
}