import {HomePage} from "./home.page";

class ComparePage extends HomePage {
    page: any;


    get compareItems() {
        return this.page.getByTestId('compare-product')
    };
}

export default new ComparePage();