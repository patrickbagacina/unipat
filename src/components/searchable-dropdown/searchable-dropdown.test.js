import React from 'react';

import { render, cleanup } from '@testing-library/react';
import SearchableDropdown from './searchable-dropdown';

describe('SearchableDropdown', () => {
  afterEach(cleanup);

  it('should render dropdown', async () => {
    // Arrange
    const onChange = jest.fn();
    const { queryByTestId } = render(
      <SearchableDropdown
        options={[{name: 'foo'}]}
        label='Country'
        onChange={onChange} />
    );

    // Act
    const d = queryByTestId('s-dropdown');

    // Assert
    expect(d).toBeTruthy();
  });
});