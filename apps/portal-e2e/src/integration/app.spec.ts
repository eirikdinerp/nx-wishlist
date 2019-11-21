import { getAddWishButton, getWishes } from '../support/app.po';

describe('portal', () => {
  beforeEach(() => cy.visit('/'));

  it('should display wishes', () => {
    getWishes().should(t => expect(t.length).equal(2));
    getAddWishButton().click();
    getWishes().should(t => expect(t.length).equal(3));
  });
});
