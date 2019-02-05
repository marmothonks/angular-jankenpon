import { AngularJankenponPage } from './app.po';

describe('angular-jankenpon App', function() {
  let page: AngularJankenponPage;

  beforeEach(() => {
    page = new AngularJankenponPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
