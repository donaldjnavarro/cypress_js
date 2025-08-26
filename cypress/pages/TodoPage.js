export class TodoPage {
  constructor() {
    this.url = 'https://example.cypress.io/todo';
    this.locators = {
      todoList: '//*[@class="todo-list"]//li',
    };
  }

  visit() {
    cy.visit(this.url);
  }

  todoList() {
    return cy.xpath(this.locators.todoList);
  }

}
