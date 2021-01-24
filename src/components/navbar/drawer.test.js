import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import Drawer from './drawer';

describe('Drawer', () => {
  afterEach(cleanup);

  it('should render Drawer but not displayed', async () => {
    // Arrange 
    const fn = jest.fn();
    
    // Act
    const { queryByTestId } = render(
      <Drawer history={{}} showSidebar={false} toggleSidebar={fn} />
    );

    // Assert
    expect(queryByTestId('d-title')).not.toBeInTheDocument();
  });

  it('should render Drawer and displayed', async () => {
    // Arrange 
    const fn = jest.fn();
    
    // Act
    const { queryByTestId } = render(
      <Drawer history={{}} showSidebar={true} toggleSidebar={fn} />
    );

    // Assert
    expect(queryByTestId('d-title')).toBeInTheDocument();
  });

  it('should toggle sidebar', async () => {
    // Arrange 
    const fn = jest.fn();
    
    // Act
    const { queryByTestId } = render(
      <Drawer history={{}} showSidebar={true} toggleSidebar={fn} />
    );

    // Assert
    expect(queryByTestId('d-title')).toBeInTheDocument();

    // Arrange
    const li = queryByTestId('d-li-universities');

    // Act
    fireEvent.click(li);

    // Assert
    expect(fn).toHaveBeenCalled();
  });
});


