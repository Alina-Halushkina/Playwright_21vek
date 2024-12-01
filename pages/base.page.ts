import {expect, type Locator, type Page} from "@playwright/test";

export abstract class BasePage {
    readonly page: Page;
    constructor() {
    }

    async goto() {
        await this.page.goto('https://www.21vek.by/');
    }
}