import { render, screen } from '@testing-library/react';
import TrimUrlForm from '../components/TrimUrlForm';

test('should display error message for invalid URL', () => {
    render(<TrimUrlForm />);

  const input = screen.getByRole('textbox');
    userEvent.type(input, 'invalid_url');

    const button = screen.getByRole('button', { name: /Trim Url/i });
    fireEvent.click(button);

    const error = screen.getByText('Invalid URL. Please enter a valid URL.');
    expect(error).toBeInTheDocument();
});

test('should not display error message for valid URL', () => {
    render(<TrimUrlForm />);

  const input = screen.getByRole('textbox');
    userEvent.type(input, 'https://www.google.com');

    const button = screen.getByRole('button', { name: /Trim Url/i });
    fireEvent.click(button);

    const error = screen.queryByText('Invalid URL. Please enter a valid URL.');
    expect(error).not.toBeInTheDocument();
});