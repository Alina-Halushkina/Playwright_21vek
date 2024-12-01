import {HomePage} from "./home.page";

class SearchResultsPage extends HomePage {
    page: any;

    get searchResultsItemName() {
        return this.page.locator("span[class$='name']")
    };

    get searchResultsItemLink() {
        return this.page.getByRole('link', {name: 'Телевизор LG 43UR78009LL'})
    };
}

export default new SearchResultsPage();