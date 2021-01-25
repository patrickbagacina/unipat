import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import { Universities } from './universities';

describe('Universities', () => {
  afterEach(cleanup);

  it('should render universities component with no list', async () => {
    // Arrange / Act
    const { queryByText } = render(<Universities />);

    // Assert
    expect(queryByText('Universities')).toBeInTheDocument();
    expect(queryByText('Please apply filters to list some universities.')).toBeInTheDocument();
  });

  it('should fetch from api when filter is selected', async () => {
    // Arrange
    const { queryByTestId, queryByText } = render(<Universities />);
    const btn = queryByTestId('btn-filter');

    // Act
    fireEvent.click(btn);

    // Assert
    expect(queryByText('Fetching universities...')).toBeInTheDocument();
  });
});