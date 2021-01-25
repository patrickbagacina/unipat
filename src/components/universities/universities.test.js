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
    const { queryByTestId, queryByText } = render(<Universities />);
    const btn = queryByTestId('btn-filter');

    // Act
    fireEvent.click(btn);

    // Assert
    expect(queryByText('Fetching universities...')).toBeInTheDocument();
  });

  it('should list initial results', async () => {
    const initial = [
      {
        name: 'iAcademy',
        country: 'Philippines',
        web_pages: []
      }
    ];

    // Act
    const { queryByText } = render(<Universities initial={initial} />);

    // Assert
    expect(queryByText('iAcademy')).toBeInTheDocument();
  });

  it('should list initial results with favorites', async () => {
    localStorage.setItem('currentUser', JSON.stringify({
      username: 'test'
    }));
    const initial = [
      {
        name: 'iAcademy',
        country: 'Philippines',
        web_pages: []
      }
    ];

    // Act
    const { queryByText, queryByTestId } = render(<Universities initial={initial} />);

    // Assert
    expect(queryByTestId('btn-favorite')).toBeInTheDocument();
    expect(queryByText('iAcademy')).toBeInTheDocument();
  });

  it('should be able to add item to favorites', async () => {
    let user = {
      username: 'test'
    };
    localStorage.setItem('currentUser', JSON.stringify(user));
    localStorage.setItem('users', JSON.stringify([user]));
    const initial = [
      {
        name: 'iAcademy',
        country: 'Philippines',
        web_pages: []
      }
    ];
    const { queryByTestId } = render(<Universities initial={initial} />);
    const btn = queryByTestId('btn-favorite');

    // Act
    fireEvent.click(btn);
    const favorites = JSON.parse(localStorage.getItem('currentUser')).favorites;

    // Assert
    expect(favorites).not.toBeNull();
    expect(favorites.length).toEqual(1);
  });
});