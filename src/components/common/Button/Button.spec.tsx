import { render, fireEvent } from '@testing-library/react'
import Button from './Button'

describe('Button', () => {
  it('Test for Button', () => {
    const handleClick = jest.fn()
    const { getByText } = render(
      <Button
        leftIcon={<div>left icon</div>}
        rightIcon={<div>right icon</div>}
        onClick={handleClick}
      >
        Click me
      </Button>,
    )

    const button = getByText('Click me')
    fireEvent.click(button)
    expect(handleClick).toHaveBeenCalled()

    const leftIcon = getByText('left icon')
    expect(leftIcon).toBeInTheDocument()

    const rightIcon = getByText('right icon')
    expect(rightIcon).toBeInTheDocument()
  })
})
