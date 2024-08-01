import { Paths } from '@constants/paths';
import { DATA_TEST_ID } from './data';

describe('Registration Tests', () => {
  beforeEach(() => {
    cy.visit(Paths.SIGNUP);
    cy.intercept('POST', '**/identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDshz4W032DcBlIKdASnkfeEUW17pA2_6g', (req) => {
      req.reply({
        statusCode: 200,
        body: {
          email: 'valeriakorolkova2703@gmail.com',
        },
      });
    }).as('signUpUserWithEmail');
  });

  it('should register a user successfully', () => {
    cy.get('input[placeholder="Name"]').type('Valeria Korolkova');
    cy.get('input[placeholder="Phone number"]').type('+375447339453');
    cy.get('input[placeholder="Email"]').type('jpvgxp5@smartnator.com');
    cy.get('input[placeholder="Password"]').type('Aa123456789');

    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(0).should('exist').click();
    cy.get(`[data-test-id=select-item-March]`).click();

    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(1).should('exist').click();
    cy.get(`[data-test-id=select-item-25]`).click();

    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(2).should('exist').click();
    cy.get(`[data-test-id=select-item-2003]`).click();

    cy.get('button[type="submit"]').click();

    cy.wait('@signUpUserWithEmail');
  });

  it('should show error notification', () => {
    cy.get('input[placeholder="Name"]').type('Valeria Korolkova');
    cy.get('input[placeholder="Phone number"]').type('+375447339153');
    cy.get('input[placeholder="Email"]').type('jpvgxp5@smartnator.com');
    cy.get('input[placeholder="Password"]').type('Aa123456789');

    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(0).should('exist').click();
    cy.get(`[data-test-id=select-item-March]`).click();

    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(1).should('exist').click();
    cy.get(`[data-test-id=select-item-25]`).click();

    cy.get(`[data-test-id=${DATA_TEST_ID.SELECT}]`).eq(2).should('exist').click();
    cy.get(`[data-test-id=select-item-2003]`).click();

    cy.get('button[type="submit"]').click();

    cy.get(`[data-test-id=${DATA_TEST_ID.NOTIFICATION}]`).should('exist');
  });
});
