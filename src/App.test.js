import { fireEvent, render, screen } from '@testing-library/react';
import Main from './Main';
import { fetchAPI, submitAPI } from './js/api';

test('Renders the Main', () => {
  render(<Main/>);
});