import { render, screen } from '@testing-library/react'
import Button from './Button'

test('renders the button element', () => {
  render(<Button />)

  const buttonElement = screen.getByRole('button', { name: /button/i })

  expect(buttonElement).toBeInTheDocument()
  expect(buttonElement).toHaveTextContent('button')
})
