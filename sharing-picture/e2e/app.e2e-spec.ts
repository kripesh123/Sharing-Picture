import { SharingPicturePage } from './app.po';

describe('sharing-picture App', function() {
  let page: SharingPicturePage;

  beforeEach(() => {
    page = new SharingPicturePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
