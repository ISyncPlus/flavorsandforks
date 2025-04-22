import React from 'react'
import { BounceLoader } from 'react-spinners'

const override = {
    display: 'block',
    margin: '50vh auto'
}
const Spinner = ({loading}) => {
  return (
    <div>
      <BounceLoader
        color='#f97316'
        loading={loading}
        cssOverride={override}
      />
    </div>
  )
}

export default Spinner
