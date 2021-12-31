import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {

  const endPoints = {
    list: 'https://api.example.com/images/list',
    upload: 'https://api.example.com/images/upload',
    remove: 'https://api.example.com/images/remove',
  }

  render(<App apiEndPoints={endPoints} />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();
});
