import { render, screen, fireEvent } from '@testing-library/react'
import SwitchTypeVideo from './SwitchTypeVideo'

describe('SwitchTypeVideo', () => {
  test('Test for SwitchTypeVideo', () => {
    render(<SwitchTypeVideo />)

    const buttons = screen.getAllByRole('button')
    expect(buttons.length).toBe(2)

    const firstButton = buttons[0]
    const secondButton = buttons[1]

    fireEvent.click(firstButton)
    expect(firstButton).toHaveClass('text-white')
    expect(secondButton).not.toHaveClass('text-white')

    fireEvent.click(secondButton)
    expect(firstButton).not.toHaveClass('text-white')
    expect(secondButton).toHaveClass('text-white')
  })
})
