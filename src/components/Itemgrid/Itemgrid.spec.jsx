import { screen, render } from '@testing-library/react';
import { it } from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import Itemgrid from './Itemgrid';

beforeEach(() => {
  render(
    <MemoryRouter>
      <Itemgrid />
    </MemoryRouter>
    ,
  );
});

describe('Itemgrid', () => {
  it('renders the Itemgrid div', () => {
    const itemgrid = screen.getByTestId('itemgrid');
    expect(itemgrid).toBeInTheDocument();
  });
});
