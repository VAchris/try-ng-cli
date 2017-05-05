import { TryNgCliPage } from './app.po';

describe('try-ng-cli App', () => {
  let page: TryNgCliPage;

  beforeEach(() => {
    page = new TryNgCliPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
