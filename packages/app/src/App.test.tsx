import React from 'react';
import { render, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import App from './App';

describe('<App />', () => {
	it('renders learn react link', () => {
		const { getByText } = render(<App />);
		const linkElement = getByText(/learn react/i);
		expect(linkElement).toBeInTheDocument();
	});

	it('renders a button and the counter text', () => {
		const { getByText } = render(<App />);

		expect(getByText(/click/i)).toBeInTheDocument();
		expect(getByText(/the counter is: 0/i)).toBeInTheDocument();
	});

	it('increments the counter on click of the button', async () => {
		const { getByText } = render(<App />);

		expect(getByText(/the counter is: 0/i)).toBeInTheDocument();

		userEvent.click(getByText(/click/i));
		await waitFor(() => {
			expect(getByText(/the counter is: 1/i)).toBeInTheDocument();
		});
	});
});
