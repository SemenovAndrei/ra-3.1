import { render } from '@testing-library/react'
import Stars from './Stars'

describe('Stars render true', () => {
  test('renders Stars', () => {
    render(<Stars count={1} />)
    const starsEl = document.querySelector('.star__list')
    expect(starsEl).toBeTruthy()
  })
})

describe('Stars render false', () => {
  test.each([
    [-1, null],
    [0, null],
    [100, null],
    [true, null],
    [false, null],
    ['false', null],
    [null, null],
    [undefined, null],
    [[], null],
    [{}, null],
  ])('%p', (count, result) => {
    render(<Stars count={count} />)
    const starsEl = document.querySelector('.star__list')
    expect(starsEl).toBe(result)
  })
})
