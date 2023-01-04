import { Navigation } from './index';
import { render, screen } from '@testing-library/react';

jest.mock('react-router-dom', () => ({
    Link: () => <div />,
}));

describe('Navigation', () => {
    it('renders menu correctly', () => {
        render(<Navigation />);
  
        //screen.debug();
        //screen.getByRole('');
        expect(screen.getAllByRole('navigation')).toHaveLength(1);
        expect(screen.getAllByRole('listitem')).toHaveLength(4);
    });
});

