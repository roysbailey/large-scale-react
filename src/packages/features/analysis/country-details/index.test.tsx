import { render, screen } from '@testing-library/react';
import { CountryDetails } from './index';
import userEvent from '@testing-library/user-event';
import TestContextWrapper from '@cc-cp-context/test-wrapper';
import { JsonObjectExpression } from 'typescript';

describe('Country details show correctly', () => {
    it('renders selector but no country info on page load', () => {
        render(
            <TestContextWrapper>
                <CountryDetails />
            </TestContextWrapper>
        );

        expect(screen.getByText(/Select a country from the list/)).toBeInTheDocument();
        expect(screen.queryByText(/Country's Name:/)).toBeNull();
        expect(screen.queryByText(/Capital:/)).toBeNull();
        expect(screen.queryByText(/Number of regions:/)).toBeNull();
        expect(screen.queryByText(/Main currency:/)).toBeNull();
    });

    it('selecting a country loads and displays the country details', async () => {
        // Arrange - mock the API call to return data
        const fakeCountry = { data: { name: 'Great Britain', capital: 'Birmingham', numRegions: 10, currencyCodes: ["GOAT"], flagImageUri: "brum.svg" }};
        jest.spyOn(global, "fetch").mockImplementation(() =>
            Promise.resolve(new Response(JSON.stringify(fakeCountry)))
        );

        // Act (render and select GB from the box)
        render(
            <TestContextWrapper>
                <CountryDetails />
            </TestContextWrapper>
        );

        userEvent.selectOptions(
            screen.getByRole('combobox'),
            screen.getByRole('option', { name: 'Great Britain' })
        );

        // Assert (the country is now displayed)
        expect((screen.getByRole('option', { name: 'Great Britain' }) as HTMLOptionElement).selected).toBeTruthy();
        expect(screen.getByText(/Select a country from the list/)).toBeInTheDocument();
        expect(await screen.findByText(/Birmingham/)).toBeInTheDocument();
        expect(screen.getByText(/Capital:/)).toBeInTheDocument();
        expect(screen.getByText(/Country's Name:/)).toBeInTheDocument();
        expect(screen.getByText(/GOAT/)).toBeInTheDocument();
        expect(screen.getByText(/10/)).toBeInTheDocument();
    });
});
