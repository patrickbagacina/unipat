import React from 'react';

import { render, cleanup, fireEvent } from '@testing-library/react';
import { Newsletters } from './newsletters';
import data from '../../data/users.json';

describe('Newsletters', () => {
  afterEach(cleanup);

  it('should display all newsletters from users.json', async () => {
    // Arrange
    const newsletters = data.newsletters;
    
    // Act
    const { queryByText } = render(
      <Newsletters />
    );

    // Assert
    expect(queryByText(newsletters[0].school.name)).toBeInTheDocument();
  });

  it('should view a newsletter', async () => {
    // Arrange
    const newsletters = data.newsletters;
    const { queryByText, queryByTestId } = render(
      <Newsletters />
    );
    
    // Act
    const btn = queryByTestId(`${newsletters[0].id}-btn-read`);
    fireEvent.click(btn);

    // Assert
    expect(queryByText('SCHOOL NEWS')).toBeInTheDocument();
  });

  it('should go back to newsletter list screen from view', async () => {
    // Arrange
    const newsletters = data.newsletters;
    const { queryByText, queryByTestId } = render(
      <Newsletters />
    );
    const btn = queryByTestId(`${newsletters[0].id}-btn-read`);
    fireEvent.click(btn);
    expect(queryByText('SCHOOL NEWS')).toBeInTheDocument();
    
    // Act
    const back = queryByTestId('btn-n-go-back');
    fireEvent.click(back);

    // Assert
    expect(queryByText('SCHOOL NEWS')).not.toBeInTheDocument();
  });
});