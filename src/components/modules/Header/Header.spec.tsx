import { render } from '@testing-library/react'
import Header from './Header'

describe('Header', () => {
  it('Test for Header', () => {
    const { getByText } = render(<Header />)

    const btnCreateVideo = getByText('Create video')
    expect(btnCreateVideo).toBeInTheDocument()
  })
})
