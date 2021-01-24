import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import { SignIn } from './signin';

describe('SignIn', () => {
  afterEach(cleanup);

  it('should validate required fields', async () => {
    // Arrange
    const { queryByText, queryByTestId } = render(
      <SignIn history={{}} />
    );
    
    // Act
    const signin = queryByTestId('btn-sign-in');
    fireEvent.click(signin)

    // Assert
    expect(queryByText('Username is required')).toBeInTheDocument();
    expect(queryByText('Password is required')).toBeInTheDocument();
  });

  it('should validate invalid credentials', async () => {
    // Arrange
    const { queryByText, queryByTestId } = render(
      <SignIn history={{}} />
    );
    const username = queryByTestId('input-username');
    const password = queryByTestId('input-password');
    const signin = queryByTestId('btn-sign-in');

    fireEvent.change(username, {target: {value: 'user'}});
    fireEvent.change(password, {target: {value: '123'}});
    
    // Act
    fireEvent.click(signin)

    // Assert
    expect(queryByText('Username is required')).not.toBeInTheDocument();
    expect(queryByText('Password is required')).not.toBeInTheDocument();
    expect(queryByText('Invalid username / password')).toBeInTheDocument();
  });

  it('should login successfully', async () => {
    // Arrange
    const { queryByText, queryByTestId } = render(
      <SignIn history={{}} />
    );
    const username = queryByTestId('input-username');
    const password = queryByTestId('input-password');
    const signin = queryByTestId('btn-sign-in');
    const user = {
      username: 'user',
      password: '123',
      favorites: [{
        name: 'foo',
        country: 'Philippines',
        web_pages: []
      }]
    };
    localStorage.setItem('users', JSON.stringify([user]));

    fireEvent.change(username, {target: {value: 'user'}});
    fireEvent.change(password, {target: {value: '123'}});
    
    // Act
    fireEvent.click(signin)

    // Assert
    expect(queryByText('Username is required')).not.toBeInTheDocument();
    expect(queryByText('Password is required')).not.toBeInTheDocument();
    expect(queryByText('Invalid username / password')).not.toBeInTheDocument();
  });
});