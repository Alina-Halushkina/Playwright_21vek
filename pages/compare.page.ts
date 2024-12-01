import {HomePage} from "./home.page";

export class ComparePage extends HomePage {

    get compareItems() {
        return this.page.getByTestId('compare-product')
    };
}