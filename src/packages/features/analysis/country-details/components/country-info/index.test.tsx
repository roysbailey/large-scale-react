import {CountryInfo} from './index';
import { render, screen } from '@testing-library/react';

describe('Country Info renders correctly', () => {
    it('renders no output with no country', () => {
        
        render(<CountryInfo countryDetails={undefined} />);
        expect(screen.queryByText(/Name:/)).toBeNull();
        expect(screen.queryByText(/Capital:/)).toBeNull();
        expect(screen.queryByText(/Number of regions:/)).toBeNull();
        expect(screen.queryByText(/Main currency:/)).toBeNull();
    });

    it('renders country when present', () => {
        let stubCountry = { name: 'England', capital: 'Birmingham', numRegions: 10, currencyCodes: ["GOAT"], flagImageUri: "brum.svg" };
        render(<CountryInfo countryDetails={stubCountry} />);
        expect(screen.getByText(/Name:/)).toBeInTheDocument();
        expect(screen.getByText(/Capital:/)).toBeInTheDocument();
        expect(screen.getByText(/Number of regions:/)).toBeInTheDocument();
        expect(screen.getByText(/Main currency:/)).toBeInTheDocument();
    });
});

