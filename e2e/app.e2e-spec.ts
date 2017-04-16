import { MansionTask1Page } from './app.po';

describe('mansion-task1 App', () => {
  let page: MansionTask1Page;

  beforeEach(() => {
    page = new MansionTask1Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
