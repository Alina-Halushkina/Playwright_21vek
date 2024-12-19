import {HomePage} from "./home.page";

export class SearchResultsPage extends HomePage {
    get searchResultsItemName() {
        return this.page.locator('.result__name').first()
    };

    async searchResultsItemLink(ItemName: string) {
        return this.page.getByRole('link', {name: ItemName}).click()
    };
}