import {expect, type Locator, type Page} from "@playwright/test";

export abstract class BasePage {
    constructor(protected readonly page: Page) {
    }

    async goto() {
        await this.page.goto('https://www.21vek.by/');
    }
}