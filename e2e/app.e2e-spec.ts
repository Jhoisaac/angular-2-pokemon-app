import { RutasPage } from './app.po';

describe('rutas App', () => {
  let page: RutasPage;

  beforeEach(() => {
    page = new RutasPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
