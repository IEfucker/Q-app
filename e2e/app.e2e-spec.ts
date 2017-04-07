import { QAppPage } from './app.po';

describe('q-app App', function() {
  let page: QAppPage;

  beforeEach(() => {
    page = new QAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
