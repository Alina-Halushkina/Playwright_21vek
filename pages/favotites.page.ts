import {HomePage} from "./home.page";

class FavoritesPage extends HomePage {
    page: any;

    get favoritesItems() {
        return this.page.locator("div[class*='name'] a");
    };
}

export default new FavoritesPage();