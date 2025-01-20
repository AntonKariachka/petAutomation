import { request } from '@playwright/test';
import { expect } from '../../base';

export default class ChuckApi {

    categoriesEndpoint = 'https://api.chucknorris.io/jokes/categories';
    randomFactEndpoint = 'https://api.chucknorris.io/jokes/random';
    categoryFactEndpoint= (category: string) => `https://api.chucknorris.io/jokes/random?category=${category}`;


    async getCategoriesList() {
        const chuckContext = await request.newContext();
        const response = await chuckContext.get(this.categoriesEndpoint);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        return responseBody;
    }

    async getRandomFact() {
        const chuckContext = await request.newContext();
        const response = await chuckContext.get(this.randomFactEndpoint);
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        return responseBody;
    }

    async getCategoryFact(category) {
        const chuckContext = await request.newContext();
        const response = await chuckContext.get(this.categoryFactEndpoint(category));
        expect(response.status()).toBe(200);
        const responseBody = await response.json();
        return responseBody;
    }
}
