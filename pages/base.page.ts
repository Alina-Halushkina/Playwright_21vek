import {expect, type Locator, type Page} from "@playwright/test";

export abstract class BasePage {
    readonly page: Page;
    constructor() {
    }

    async goto() {
        await this.page.goto('https://www.21vek.by/');
    }

    async acceptPopupWindows() {
        this.page.on('dialog', dialog => dialog.accept());
        await this.page.getByText('Принять').click();
        await this.page.getByText('Нет, спасибо').click();
    }
}