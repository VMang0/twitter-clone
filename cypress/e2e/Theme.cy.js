import { Paths } from '@constants/paths';

describe('Theme toggle test', () => {
  const themes = ['light', 'dark'];

  beforeEach(() => {
    cy.visit(Paths.WELCOME);
  });

  themes.forEach((theme) => {
    it(`should apply ${theme} theme`, () => {
      cy.window().then((win) => {
        win.localStorage.setItem('theme', JSON.stringify(theme));
      });

      cy.reload();

      const expectedColor = theme === 'light' ? 'rgb(252, 252, 252)' : 'rgb(20, 23, 26)';

      cy.get('body').should('have.css', 'background-color', expectedColor);
    });
  });
});
