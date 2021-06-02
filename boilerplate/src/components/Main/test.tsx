import { render, screen } from '@testing-library/react'

import Main from '.'

describe('Main component', () => {
  it('should render the heading', () => {
    // given

    // when
    const { container } = render(<Main />)

    // then
    expect(
      screen.getByRole('heading', { name: /react avançado/i })
    ).toBeInTheDocument()

    expect(container.firstChild).toMatchSnapshot()
  })
})
