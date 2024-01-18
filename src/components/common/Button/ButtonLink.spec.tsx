import { render } from '@testing-library/react'
import ButtonLink from './ButtonLink'

describe('ButtonLink', () => {
  it('renders the left icon when provided', () => {
    const leftIcon = <svg data-testid="left-icon" />
    const rightIcon = <svg data-testid="right-icon" />

    const { getByTestId, getByRole } = render(
      <ButtonLink href="/example" leftIcon={leftIcon} rightIcon={rightIcon}>
        Button
      </ButtonLink>,
    )

    const linkElement = getByRole('link')
    expect(linkElement).toHaveAttribute('href', '/example')

    const leftIconElement = getByTestId('left-icon')
    expect(leftIconElement).toBeInTheDocument()

    const rightIconElement = getByTestId('right-icon')
    expect(rightIconElement).toBeInTheDocument()
  })
})
