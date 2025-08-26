import React from 'react';
import { mount } from "cypress/react";

describe('Inline Button Component', () => {
  const Button = ({ label, onClick }) => (
    <button onClick={onClick}>{label}</button>
  );

  it('renders with correct label', () => {
    mount(<Button label="Click Me" />);
    cy.contains('Click Me').should('exist');
  });

  it('calls onClick when clicked', () => {
    const handleClick = cy.stub();
    mount(<Button label="Click Me" onClick={handleClick} />);
    cy.get('button').click().then(() => {
      expect(handleClick).to.have.been.calledOnce;
    });
  });
});
