import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import NavBar from './navbar';

describe('NavBar', () => {
  afterEach(cleanup);

  it('should have login button and be able to click', async () => {
    // Arrange
    const { queryByTestId } = render(<NavBar history={{}} />);

    // Act
    const btn = queryByTestId('btn-login');

    // Assert
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
  });

  it('should have logout button and be able to click', async () => {
    // Arrange
    localStorage.setItem('currentUser', JSON.stringify({username: 'foo'}));
    const { queryByTestId } = render(<NavBar history={{}} />);

    // Act
    const btn = queryByTestId('btn-logout');

    // Assert
    expect(btn).toBeInTheDocument();
    fireEvent.click(btn);
  });
});