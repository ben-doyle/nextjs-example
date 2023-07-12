import React from 'react';
import { describe, expect, it } from '@jest/globals';
import { render, screen } from '@testing-library/react';
import Page from '../app/page';

describe('Page', () => {
  it('should render the h1', () => {
    render(<Page/>);
    expect(screen.getByText('test')).toBeInTheDocument()
  });
});
