// src/__tests__/PatternEditor.test.jsx
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import PatternEditor from '../components/PatternEditor';

describe('PatternEditor', () => {
  it('renders without crashing', () => {
    render(<PatternEditor />);
    expect(screen.getByText(/Pattern Type:/i)).toBeInTheDocument();
  });

  it('allows pattern type selection', () => {
    render(<PatternEditor />);
    const select = screen.getByRole('combobox');
    expect(select).toBeInTheDocument();
  });

  it('updates line width when slider changes', () => {
    render(<PatternEditor />);
    const slider = screen.getByRole('slider', { name: /line width/i });
    fireEvent.change(slider, { target: { value: 1 } });
    expect(screen.getByText(/Line Width \(mm\): 1/i)).toBeInTheDocument();
  });
});