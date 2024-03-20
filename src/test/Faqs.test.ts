import { render, screen, fireEvent } from '@testing-library/react';
import Faqs from '../components/Faqs';

test('should toggle FAQ content when question is clicked', () => {
    render(<Faqs />);
    
  const firstQuestion = screen.getByText(/How does URL shortening work?/i);
    expect(firstQuestion).toBeInTheDocument();

    const answerElement = screen.queryByText(/URL shortening works by taking a long URL/i);
    expect(answerElement).not.toBeInTheDocument();

    fireEvent.click(firstQuestion);

    const answer = screen.getByText(/URL shortening works by taking a long URL/i);
    expect(answer).toBeInTheDocument(); // Now visible

    // Test closing the FAQ by clicking again
    fireEvent.click(firstQuestion);

    expect(screen.queryByText(/URL shortening works by taking a long URL/i)).not.toBeInTheDocument(); // Hidden again
});