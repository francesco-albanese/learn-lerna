import React from 'react';
import { render } from '@testing-library/react';
import { Button } from './';

describe('<Button />', () => {
	it('renders with text Click!', () => {
		const { getByText } = render(<Button onClick={jest.fn} />);

		expect(getByText('Click!')).toBeInTheDocument();
	});
});
