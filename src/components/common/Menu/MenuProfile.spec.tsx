import { render, screen, fireEvent } from '@testing-library/react'
import MenuProfile from './MenuProfile'

describe('MenuProfile', () => {
  test('Test for MenuProfile', () => {
    render(<MenuProfile>Test Children</MenuProfile>)

    const childrenElement = screen.getByText('Test Children')
    expect(childrenElement).toBeInTheDocument()

    const buttonElement = screen.getByText('Test Children')
    fireEvent.click(buttonElement)

    const menuElement = screen.getByRole('list')
    expect(menuElement).toBeInTheDocument()
    fireEvent.click(buttonElement)
    expect(menuElement).not.toBeInTheDocument()
  })
})
