import { render, screen } from '@testing-library/react'
import HomePage from './page'

describe('HomePage', () => {
  it('renders the correct content', () => {
    render(<HomePage />)
    const headingElement = screen.getByText(/this is home page/i)
    expect(headingElement).toBeInTheDocument()
  })
})
