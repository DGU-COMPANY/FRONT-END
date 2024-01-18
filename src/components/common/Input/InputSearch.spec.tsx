import { render, screen } from '@testing-library/react'
import InputSearch from './InputSearch'

describe('InputSearch', () => {
  it('renders the input field', () => {
    render(<InputSearch />)

    const inputField = screen.getByPlaceholderText('Search')
    expect(inputField).toBeInTheDocument()
  })
})
