import { W3SchoolPages } from './pages/w3scool/w3schoolPageFactory';
import ChuckApi from './api/ChuckApi/chuckApi'
import { test as base } from '@playwright/test';

export type MyFixtures = {
    pages: {
        w3School : W3SchoolPages
    }
    api: {
        chuckApi: ChuckApi
    }
}

export const test = base.extend<MyFixtures>({
    pages: async ({page}, use) => {
        const pages = {
            w3School: new W3SchoolPages(page)
        };
        await use(pages);
    },
    api: async ({ }, use) => {
        const chuckApiRequests = {
            chuckApi: new ChuckApi()
        };
        await use(chuckApiRequests);
    }
});

export { expect } from '@playwright/test';
