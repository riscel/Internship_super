import { Ng4NodePage } from './app.po';

describe('ng4-node App', () => {
  let page: Ng4NodePage;

  beforeEach(() => {
    page = new Ng4NodePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
