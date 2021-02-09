import React from 'react'
import './Star.css'
import { nanoid } from 'nanoid'
import PropTypes from 'prop-types'

function Star(props) {
  const items = []

  for (let i = 0; i < props.count; i++) {
    items.push(
      <li className="star__item" key={nanoid()}>
        <svg
          fill="#D3BCA2"
          height="28"
          viewBox="0 0 18 18"
          width="28"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M9 11.3l3.71 2.7-1.42-4.36L15 7h-4.55L9 2.5 7.55 7H3l3.71 2.64L5.29 14z" />
          <path d="M0 0h18v18H0z" fill="none" />
        </svg>
      </li>
    )
  }
  return <ul className="star__list">{items}</ul>
}

Star.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Star
