import { IEIndexNgPage } from './app.po';

describe('ieindex-ng App', function() {
  let page: IEIndexNgPage;

  beforeEach(() => {
    page = new IEIndexNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
