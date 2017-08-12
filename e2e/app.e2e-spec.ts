import { RestPage } from './app.po';

describe('rest App', () => {
  let page: RestPage;

  beforeEach(() => {
    page = new RestPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
