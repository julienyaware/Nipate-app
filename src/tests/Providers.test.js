import React from 'react';
import { render, waitFor,screen } from '@testing-library/react';
import Providers from '../components/Providers';


// Mock Firebase Firestore
jest.mock('../Firabase', () => ({
  db: {
    collection: jest.fn(() => ({
      getDocs: jest.fn(() => ({
        forEach: jest.fn(),
      })),
    })),
  },
}));

describe('Providers Component', () => {
  test('renders loading indicator while fetching data', async () => {
   render(<Providers />)
    expect(screen.getByText('Loading')).toBeInTheDocument();
  });

});
