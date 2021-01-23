import App from './App';
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Home } from './components/home/home';
import { SignIn } from './components/sign-in/signin';
import { Register } from './components/register/register';
import { Universities } from './components/universities/universities';
import { Newsletters } from './components/newsletters/newsletters';
import { Favorites } from './components/favorites/favorites';
import { PageNotFound } from './components/not-found/not-found';


describe('Tests for App router', () => {
  test('should redirect to sign page', async () => {
    
  });

  test('should redirect to register page', () => {
  
  });

  test('should redirect to universities page', () => {
   
  });
});