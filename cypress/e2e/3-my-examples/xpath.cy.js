/// <reference types="cypress" />
import 'cypress-xpath';
import { TodoPage } from '../../pages/TodoPage';

describe('example to-do app', () => {
const todoPage = new TodoPage();
  beforeEach(() => {
    todoPage.visit()
  })

  it('displays two todo items by default', () => {
    todoPage.todoList().should('have.length', 2)
    todoPage.todoList().first().should('have.text', 'Pay electric bill')
    todoPage.todoList().last().should('have.text', 'Walk the dog')
  })
})
