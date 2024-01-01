import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('renders the button', () => {
    const { getByRole } = render(<Button>Click me</Button>)
    const button = getByRole('button')
    expect(button).toBeInTheDocument()
  })

  it('calls onClick when clicked', () => {
    const handleClick = jest.fn()
    const { getByRole } = render(
      <Button onClick={handleClick}>Click me</Button>,
    )
    const button = getByRole('button')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()
  })

  it('displays the left icon when provided', () => {
    const { getByText } = render(
      <Button leftIcon={<div>left icon</div>}>Click me</Button>,
    )
    const leftIcon = getByText('left icon')
    expect(leftIcon).toBeInTheDocument()
  })

  it('displays the right icon when provided', () => {
    const { getByText } = render(
      <Button rightIcon={<div>right icon</div>}>Click me</Button>,
    )
    const rightIcon = getByText('right icon')
    expect(rightIcon).toBeInTheDocument()
  })
})
