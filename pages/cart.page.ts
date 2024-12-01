import {HomePage} from "./home.page";

class CartPage extends HomePage {
    page: any;

    get cartItems() {
        return this.page.locator("a[class*='title']")
    };


    get removeButton() {
        return this.page.locator("button[aria-label='Удалить товар']")
    };
    async removeItem() {
        await this.removeButton.click()
    };


    get confirmRemoveButton() {
        return this.page.getByTestId('modal-confirmation-button');
    };
    async confirmRemove() {
        await this.confirmRemoveButton.click()
    };


    get emptyCartMessage() {
        return this.page.getByTestId('empty-basket-screen')
    };
}

export default new CartPage();