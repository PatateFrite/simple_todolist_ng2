import { TodolistNg2Page } from './app.po';

describe('todolist-ng2 App', function() {
  let page: TodolistNg2Page;

  beforeEach(() => {
    page = new TodolistNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
