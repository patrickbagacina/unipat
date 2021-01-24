import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import { Favorites } from './favorites';

describe('Favorites', () => {
  afterEach(cleanup);

  it('should ask user to login', async () => {
    // Arrange
    const { queryByText } = render(
      <Favorites />
    );

    // Act / Assert
    expect(queryByText('Favorites')).toBeInTheDocument();
    expect(queryByText('Please login to view or add favorites.')).toBeInTheDocument();
  });

  it('should display empty favorites', async () => {
    // Arrange
    localStorage.setItem('currentUser', JSON.stringify({username: 'foo', password: 'bar'}));
    
    // Act
    const { queryByText } = render(
      <Favorites />
    );

    // Assert
    expect(queryByText('Favorites')).toBeInTheDocument();
    expect(queryByText('No Favorites Added Yet.')).toBeInTheDocument();
  });

  it('should display favorites', async () => {
    // Arrange
    const user = {
      username: 'foo',
      password: 'bar',
      favorites: [{
        name: 'foo',
        country: 'Philippines',
        web_pages: []
      }]
    };
    localStorage.setItem('currentUser', JSON.stringify(user));
    
    // Act
    const { queryByText } = render(
      <Favorites />
    );
    

    // Assert
    expect(queryByText('Favorites')).toBeInTheDocument();
    expect(queryByText('No Favorites Added Yet.')).not.toBeInTheDocument();
  });

  it('should remove item from favorites', async () => {
    // Arrange
    const user = {
      username: 'foo',
      password: 'bar',
      favorites: [{
        name: 'foo',
        country: 'Philippines',
        web_pages: []
      }]
    };
    localStorage.setItem('users', JSON.stringify([user]));
    localStorage.setItem('currentUser', JSON.stringify(user));
    const { queryByText, queryByTestId } = render(
      <Favorites />
    );
    const btn = queryByTestId('btn-favorite');

    // Act
    fireEvent.click(btn);

    // Assert
    expect(queryByText('Favorites')).toBeInTheDocument();
    expect(queryByText('No Favorites Added Yet.')).toBeInTheDocument();
    expect(queryByText('foo')).not.toBeInTheDocument();
  });
});