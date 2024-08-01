import { Paths } from '@constants/paths';

describe('Create tweet Tests', () => {
  beforeEach(() => {
    cy.visit(Paths.SIGNIN);

    cy.get('input[placeholder="Phone number, email address"]').type('+3333333333');
    cy.get('input[placeholder="Password"]').type('Aa123456789');

    cy.intercept('POST', '**/loginUserWithEmail', (req) => {
      req.reply({
        statusCode: 200,
        body: { email: 'valeriakorolkova2703@gmail.com', ...otherUserData },
      });
    }).as('loginUser');

    cy.get('button[type="submit"]').click();

    cy.url().should('include', Paths.FEED);
  });

  it('should create a tweet successfully', () => {
    cy.intercept('POST', '**/saveNewTweet', (req) => {
      req.reply({
        statusCode: 200,
        body: { success: true },
      });
    }).as('saveNewTweet');

    cy.get('textarea[placeholder="What\'s happening..."]').type('This is a test tweet!');

    cy.get('button[type="submit"]').click();

    cy.contains('This is a test tweet!');
  });

  it('should disable submit button', () => {
    cy.get('button[type="submit"]').should('be.disabled');

    cy.get('textarea[placeholder="What\'s happening..."]').type('This is a test tweet!');

    cy.get('button[type="submit"]').should('not.be.disabled').click();
  });
});
