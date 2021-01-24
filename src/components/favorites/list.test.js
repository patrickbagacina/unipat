import React from 'react';

import { render, cleanup } from '@testing-library/react';
import FavoriteList from './list';

describe('FavoriteList', () => {
  afterEach(cleanup);

  it('should render empty component', async () => {
    // Arrange
    const onFavorite = jest.fn();
    const list = [];
    const { queryByText } = render(
      <FavoriteList
        universities={list}
        enableFavorite={false}
        onFavorite={onFavorite} />
    );

    // Act
    const el = queryByText('No Favorites Added Yet.');

    // Assert
    expect(el).toBeInTheDocument();
  });

  it('should not render empty component', async () => {
    // Arrange
    const onFavorite = jest.fn();
    const list = [{
      name: 'foo',
      country: 'Philippines',
      web_pages: []
    }];
    const { queryByText } = render(
      <FavoriteList
        universities={list}
        enableFavorite={false}
        onFavorite={onFavorite} />
    );

    // Act
    const el = queryByText('No Favorites Added Yet.');

    // Assert
    expect(el).not.toBeInTheDocument();
  });
});