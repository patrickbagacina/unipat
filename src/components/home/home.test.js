import React from 'react';

import { render, cleanup } from '@testing-library/react';
import { Home } from './home';

describe('Home', () => {
  afterEach(cleanup);

  it('should render home with universities', async () => {
    // Arrange 
    const prop = {
      history: {},
      match: {
        path: '/universities'
      }
    };
    
    // Act
    const { queryByTestId } = render(<Home history={prop.history} match={prop.match} />);

    // Assert
    expect(queryByTestId('title').textContent).toEqual('Universities');
  });

  it('should render home with favorites', async () => {
    // Arrange 
    const prop = {
      history: {},
      match: {
        path: '/favorites'
      }
    };
    
    // Act
    const { queryByTestId } = render(<Home history={prop.history} match={prop.match} />);

    // Assert
    expect(queryByTestId('title').textContent).toEqual('Favorites');
  });

  it('should render home with newsletters', async () => {
    // Arrange 
    const prop = {
      history: {},
      match: {
        path: '/newsletters'
      }
    };
    
    // Act
    const { queryByTestId } = render(<Home history={prop.history} match={prop.match} />);

    // Assert
    expect(queryByTestId('title').textContent).toEqual('Newsletters');
  });
});