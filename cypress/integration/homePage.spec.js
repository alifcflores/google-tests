/// <reference types="cypress"/>

const selectors = {
    search: '.gLFyf',
    results: {
        title: '[aria-level="3"]'
    }
}

const data = {
    searching: {
        carsForSaleInOrlando: 'Cars for Sale in Orlando',
        carsForSale: 'Cars for Sale'
    }
}

describe('Testing a Home Page', ()=>{

    before(()=>{
        cy.visit('https://www.google.com/');
    });

    it('Visit Page', ()=>{
        cy.get(selectors.search).type(data.searching.carsForSaleInOrlando);
        cy.get('form').submit();
    });

    it('Getting a Text from top Results', ()=>{
        cy.get(selectors.results.title).each(($el, index, $list)=>{
            const titles = $list.text();
            return titles;
        });
    })
});