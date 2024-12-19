import {HomePage} from "./home.page";

export class CartPage extends HomePage {
    get cartItems() {
        return this.page.locator("a[class*='title']")
    };

    get removeButton() {
        return this.page.locator("button[aria-label='Удалить товар']")
    };

    get confirmRemoveButton() {
        return this.page.getByTestId('modal-confirmation-button');
    };

    get emptyCartMessage() {
        return this.page.getByTestId('empty-basket-screen')
    };

    async removeItem() {
        await this.removeButton.click()
    };

    async confirmRemove() {
        await this.confirmRemoveButton.click()
    };
}