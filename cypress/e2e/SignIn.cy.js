import { Paths } from '@constants/paths';

describe('Login Tests', () => {
  beforeEach(() => {
    cy.visit(Paths.SIGNIN);
  });

  it('should log in with email and password', () => {
    cy.intercept('POST', '**/accounts:signInWithPassword*', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          email: 'valeriakorolkova2703@gmail.com',
        },
      });
    }).as('loginUser');

    cy.get('input[placeholder="Phone number, email address"]').type('valeriakorolkova2703@gmail.com');
    cy.get('input[placeholder="Password"]').type('Aa123456789');

    cy.get('button[type="submit"]').click();

    cy.url().should('eq', Cypress.config().baseUrl + Paths.SIGNIN);
  });

  it('should log in with phone number and password', () => {
    cy.get('input[placeholder="Phone number, email address"]').type('+3333333333');
    cy.get('input[placeholder="Password"]').type('Aa123456789');

    cy.intercept('POST', '**/loginUserWithEmail', (req) => {
      req.reply({
        statusCode: 200,
        body: { email: 'valeriakorolkova2703@gmail.com', ...otherUserData },
      });
    }).as('loginUser');

    cy.get('button[type="submit"]').click();

    cy.url().should('eq', Cypress.config().baseUrl + '/feed');
  });
});
