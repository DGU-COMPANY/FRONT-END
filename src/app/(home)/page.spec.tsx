import { fireEvent, render, screen } from '@testing-library/react'
import HomePage from './page'

describe('HomePage', () => {
  it('renders the correct content', () => {
    render(<HomePage />)

    const btn = screen.getByText('Increment')
    expect(btn).toBeInTheDocument()
    fireEvent.click(btn)
  })
})
