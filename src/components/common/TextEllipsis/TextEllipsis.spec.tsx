import { render, fireEvent, screen } from '@testing-library/react'
import TextEllipsis from './TextEllipsis'

describe('TextEllipsis', () => {
  it('renders without crashing', () => {
    render(<TextEllipsis content="Test Content" />)
    expect(screen.getByText('Test Content')).toBeInTheDocument()
  })

  it('truncates text based on characterLength', () => {
    const longText = 'This is a very long text that should be truncated'
    render(<TextEllipsis content={longText} characterLength={20} />)
    expect(screen.getByText(/This is a very long \.\.\./)).toBeInTheDocument()
  })

  it('does not truncate text if under characterLength', () => {
    const shortText = 'Short text'
    render(<TextEllipsis content={shortText} characterLength={20} />)
    expect(screen.getByText(shortText)).toBeInTheDocument()
  })

  it('expands text on clicking "see more"', () => {
    const longText = 'Long text that gets truncated'
    render(<TextEllipsis content={longText} characterLength={10} />)
    fireEvent.click(screen.getByText('see more'))
    expect(
      screen.getByText('Long text that gets truncated'),
    ).toBeInTheDocument()
  })

  it('collapses text on clicking "hide less"', () => {
    const longText = 'Long text that gets truncated'
    render(<TextEllipsis content={longText} characterLength={10} />)
    fireEvent.click(screen.getByText('see more'))
    fireEvent.click(screen.getByText('Hide less'))
    expect(screen.getByText(/Long text \.\.\./)).toBeInTheDocument()
  })
})
