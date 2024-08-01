import { Paths } from '@constants/paths';
import { DATA_TEST_ID } from './data';

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

    cy.visit(Paths.SIGNIN);
  });

  it('modal for edit should be visible', () => {
    cy.viewport(1920, 1080);
    cy.get('a[href*="/profile"]').click();

    cy.get(`[data-test-id=${DATA_TEST_ID.UPDATE_PROFILE}]`).should('exist').click();
    cy.get(`[data-test-id=${DATA_TEST_ID.MODAL_UPDATE_PROFILE}]`).should('exist');
  });

  it('should update user info', () => {
    cy.viewport(1920, 1080);
    cy.get('a[href*="/profile"]').click();

    cy.get(`[data-test-id=${DATA_TEST_ID.UPDATE_PROFILE}]`).should('exist').click();
    cy.get(`[data-test-id=${DATA_TEST_ID.MODAL_UPDATE_PROFILE}]`).should('exist');

    cy.get('input[placeholder="Username"]').type('Valeria Korolkova');

    cy.get('button').contains('Update').click();
  });
});
