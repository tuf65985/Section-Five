import { SectionFivePage } from './app.po';

describe('section-five App', () => {
  let page: SectionFivePage;

  beforeEach(() => {
    page = new SectionFivePage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
