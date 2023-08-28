import React from 'react'
import { render, screen } from '@testing-library/react'
import Details from './index'

test('renders learn react link', () => {
  render(<Details />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
