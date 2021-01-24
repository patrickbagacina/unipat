import React from 'react';

import {render, cleanup, screen } from '@testing-library/react';
import Empty from './empty';

describe('Empty', () => {
  afterEach(cleanup);

  it('should render text in empty component', async () => {
    // Arrange / Act
    render(<Empty message='Foo' />);

    // Assert
    expect(screen.getByText('Foo')).toBeInTheDocument();
  });
});


