import { MusitorikaClientPage } from './app.po';

describe('musitorika-client App', () => {
  let page: MusitorikaClientPage;

  beforeEach(() => {
    page = new MusitorikaClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
