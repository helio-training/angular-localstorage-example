import { AngularLocalstorageExamplePage } from './app.po';

describe('angular-localstorage-example App', function() {
  let page: AngularLocalstorageExamplePage;

  beforeEach(() => {
    page = new AngularLocalstorageExamplePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
