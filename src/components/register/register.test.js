import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import { Register } from './register';

describe('Register', () => {
  afterEach(cleanup);

  it('should validate required fields', async () => {
    // Arrange
    const { queryByText, queryByTestId } = render(
      <Register history={{}} />
    );
    
    // Act
    const reqister = queryByTestId('btn-register');
    fireEvent.click(reqister)

    // Assert
    expect(queryByText('Username is required')).toBeInTheDocument();
    expect(queryByText('Password is required')).toBeInTheDocument();
  });

  it('should validate already taken username', async () => {
    // Arrange
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
    const { queryByText, queryByTestId } = render(
      <Register history={{}} />
    );
    const username = queryByTestId('input-username');
    const password = queryByTestId('input-password');
    const reqister = queryByTestId('btn-register');

    fireEvent.change(username, {target: {value: 'user'}});
    fireEvent.change(password, {target: {value: '123'}});
    
    // Act
    fireEvent.click(reqister)

    // Assert
    expect(queryByText('Username is required')).not.toBeInTheDocument();
    expect(queryByText('Password is required')).not.toBeInTheDocument();
    expect(queryByText('Username is already taken')).toBeInTheDocument();
  });

  it('should create user successfully', async () => {
    // Arrange
    const { queryByText, queryByTestId } = render(
      <Register history={{}} />
    );
    const username = queryByTestId('input-username');
    const password = queryByTestId('input-password');
    const reqister = queryByTestId('btn-register');
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

    fireEvent.change(username, {target: {value: 'test'}});
    fireEvent.change(password, {target: {value: 'user'}});
    
    // Act
    fireEvent.click(reqister)

    // Assert
    expect(queryByText('Successfully registered user! Please sign in to continue.')).toBeInTheDocument();
  });
});