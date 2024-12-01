import {HomePage} from "./home.page";

export class FavoritesPage extends HomePage {

    get favoritesItems() {
        return this.page.locator("div[class*='name'] a");
    };
}