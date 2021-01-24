import React from 'react';

import { render, cleanup } from '@testing-library/react';
import PageTitle from './page-title';

describe('PageTitle', () => {
  afterEach(cleanup);

  it('should render title component', async () => {
    // Arrange
    const { queryByTestId } = render(<PageTitle title="Hello" />);

    // Act / Assert
    expect(queryByTestId('title').textContent).toEqual('Hello');
  });
});