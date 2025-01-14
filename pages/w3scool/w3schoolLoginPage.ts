import { Page } from '@playwright/test';

export class W3SchoolLoginPage {
    constructor(protected page: Page) {
        this.page = page;
    }

    url: string = 'https://profile.w3schools.com/login?redirect_url=https%3A%2F%2Fwww.w3schools.com%2F';
    emailInputFieldLocator = this.page.getByPlaceholder('email');
    passwordInputFieldLocator  = this.page.getByPlaceholder('password');
    loginButtonLocator = this.page.getByRole('button', { name: 'Login' });


    async openLoginPage() {
        await this.page.goto(this.url);
    }

    async enterEmail(email){
        await this.emailInputFieldLocator.fill(email)
    }

    async enterPassword(pswrd){
        await this.passwordInputFieldLocator.fill(pswrd)
    }

    async clickLoginButton(){
        await this.loginButtonLocator.click();
    }

}
