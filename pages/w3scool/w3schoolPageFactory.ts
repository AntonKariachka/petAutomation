import { Page } from '@playwright/test';
import { W3SchoolLandingPage  } from './w3schoolLandingPage'
import { W3SchoolLoginPage  } from './w3schoolLoginPage'

export class W3SchoolPages {
    w3SchoolLandingPage : W3SchoolLandingPage;
    w3SchoolLoginPage : W3SchoolLoginPage;


    constructor(page: Page) {
    this.w3SchoolLandingPage = new W3SchoolLandingPage(page);
    this.w3SchoolLoginPage = new W3SchoolLoginPage(page);
    }
}
