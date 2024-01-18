import { render, screen } from '@testing-library/react'
import Input from './Input'

describe('Input', () => {
  it('renders the input element with the provided placeholder', () => {
    const placeholder = 'Enter your name'
    render(<Input placeholder={placeholder} />)

    const inputElement = screen.getByPlaceholderText(placeholder)
    expect(inputElement).toBeInTheDocument()
  })
})
