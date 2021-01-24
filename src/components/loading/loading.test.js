import React from 'react';

import { render, cleanup } from '@testing-library/react';
import Loading from './loading';

describe('Loading', () => {
  afterEach(cleanup);

  it('should render loading component', async () => {
    // Arrange
    const { queryByTestId } = render(<Loading label="test" />);

    // Act / Assert
    expect(queryByTestId('label').textContent).toEqual('test');
  });
});