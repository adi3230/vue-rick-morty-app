// https://docs.cypress.io/api/introduction/api.html

describe('My First Test', () => {
  it('Visits the app root url', () => {
    cy.visit('/')
    cy.contains('h1', 'Welcome to Your Vue.js App')
  })
})
describe('Ricky Morty', () => {
  it('visit the ricky morty page', () => {
    cy.visit('/ricky-morty')
    cy.get('.character-list__item').find('.flip-card--morty-smith').trigger('mouseenter');
  });
});
