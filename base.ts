import { W3SchoolPages } from './pages/w3scool/w3schoolPageFactory';
import { test as base } from '@playwright/test';

export type MyFixtures = {
    pages: {
        w3School : W3SchoolPages
    }
}

export const test = base.extend<MyFixtures>({
    pages: async ({page}, use) => {
        const pages = {
            w3School: new W3SchoolPages(page)
        };
        await use(pages);
    }
});

export { expect } from '@playwright/test';
