import { expect, test } from '../../base'

test.describe('W3School E2E + Chuck API ', () => {

test('w3School login & search', async ({ pages }) => {

    const email = process.env.USEREMAIL;
    const password = process.env.PASSWORD;
    const landingPage = pages.w3School.w3SchoolLandingPage;
    const loginPage = pages.w3School.w3SchoolLoginPage;

    await landingPage.openLandingPage();
    await landingPage.clickLoginButton();
    await loginPage.enterEmail(email);
    await loginPage.enterPassword(password);
    await loginPage.clickLoginButton();
    await landingPage.typeRequest('ex');
    await landingPage.chooseSearchResult('Exercises');
    await expect(landingPage.exercisePageTitleLocator).toBeVisible();
    });

    test('ChuckApi GET checks', async ({ api}) => {

        const chuckApi = api.chuckApi;

        const categories = await chuckApi.getCategoriesList();
        const categoryFact = await chuckApi.getCategoryFact(categories[0]);
        await expect(categoryFact.value).toContain('Chuck Norris');
        const fact = await chuckApi.getRandomFact();
        await expect(fact.value).toContain('Chuck Norris');
    });
});
