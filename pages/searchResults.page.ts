import {HomePage} from "./home.page";

export class SearchResultsPage extends HomePage {
    get searchResultsItemName() {
        return this.page.locator('.result__name').first()
    };

    get searchResultsItemLink() {
        return this.page.getByRole('link', {name: 'Телевизор LG 43UR78009LL'})
    };
}