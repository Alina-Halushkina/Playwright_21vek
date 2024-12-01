import {BasePage} from "./base.page";

class HomePage extends BasePage {
    get searchInput() {return await page.getByPlaceholder('Поиск товаров')
}