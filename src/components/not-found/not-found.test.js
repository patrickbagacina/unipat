import React from 'react';

import { render, cleanup } from '@testing-library/react';
import { PageNotFound } from './not-found';

describe('PageNotFound', () => {
  afterEach(cleanup);

  it('should render page not found component', async () => {
    // Arrange / Act
    const { queryByText } = render(<PageNotFound />);

    // Assert
    expect(queryByText('Page Not Found')).toBeInTheDocument();
  });
});


