import React from 'react'
import './Stars.css'

import PropTypes from 'prop-types'
import Star from './Star/Star'

function Stars(props) {
  if (typeof props.count !== 'number') {
    return null
  }

  if (props.count < 1 || props.count > 5) {
    return null
  }

  return <Star count={props.count} />
}

Stars.defaultProps = {
  count: 0,
}

Stars.propTypes = {
  count: PropTypes.number.isRequired,
}

export default Stars
