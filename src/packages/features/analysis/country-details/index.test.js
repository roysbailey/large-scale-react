import { CountryDetails } from './index';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

describe('Country details show correctly', () => {
    it('renders selector but no country info on page load', () => {
        render(<CountryDetails />);

        expect(screen.getByText(/Select a country from the list/)).toBeInTheDocument();
        expect(screen.queryByText(/Name:/)).toBeNull();
        expect(screen.queryByText(/Capital:/)).toBeNull();
        expect(screen.queryByText(/Number of regions:/)).toBeNull();
        expect(screen.queryByText(/Main currency:/)).toBeNull();
    });

    it('selecting a country loads and displays the country details', async () => {
        // Arrange - mock the API call to return data
        const fakeCountry = { data: { name: 'Great Britain', capital: 'Birmingham', numRegions: 10, currencyCodes: ["GOAT"], flagImageUri: "brum.svg" }};
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve({
                json: () => Promise.resolve(fakeCountry)
            })
        );

        // Act (render and select GB from the box)
        render(<CountryDetails />);
        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', { name: 'Great Britain' })
          );

        // Assert (the country is now displayed)
        expect(screen.getByRole('option', { name: 'Great Britain' }).selected).toBe(true)
        expect(screen.getByText(/Select a country from the list/)).toBeInTheDocument();
        expect(await screen.findByText(/Name:/)).toBeInTheDocument();
        expect(screen.getByText(/Capital:/)).toBeInTheDocument();
        expect(screen.getByText(/Birmingham/)).toBeInTheDocument();
        expect(screen.getByText(/GOAT/)).toBeInTheDocument();
        expect(screen.getByText(/10/)).toBeInTheDocument();
    });
});

