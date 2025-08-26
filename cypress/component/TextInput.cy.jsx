import React, { useState } from 'react';
import { mount } from "cypress/react";

describe('Inline TextInput', () => {
  it('updates value when typing', () => {
    const TextInput = ({ value, onChange }) => (
      <input type="text" value={value} onChange={onChange} />
    );

    function Wrapper() {
      const [value, setValue] = useState('');
      return <TextInput value={value} onChange={(e) => setValue(e.target.value)} />;
    }

    mount(<Wrapper />);
    cy.get('input').type('Hello').should('have.value', 'Hello');
  });
});
