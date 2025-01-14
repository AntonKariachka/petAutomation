import { Page } from '@playwright/test';

export class W3SchoolLandingPage {
    constructor(protected page: Page) {
        this.page = page;
    }

    url: string = 'https://www.w3schools.com/';
    searchFieldLocator = this.page.getByPlaceholder('Search our tutorials, e.g.');
    searchResultLocator = (searchResult: string) => this.page.locator('#listofsearchresults').getByRole('link', { name: `${searchResult}` });
    exercisePageTitleLocator = this.page.getByText('W3Schools Exercises');
    loginTitleLocator = this.page.locator('#pagetop').getByLabel('Login to your account');

    async openLandingPage() {
        await this.page.goto(this.url);
    }

    async typeRequest(text) {
        await this.searchFieldLocator.focus();
        await this.searchFieldLocator.pressSequentially(text);
    }

    async chooseSearchResult(searchResult) {
        await this.searchResultLocator(searchResult).click();
    }

    async clickLoginButton() {
        await this.loginTitleLocator.click();
    }
}
