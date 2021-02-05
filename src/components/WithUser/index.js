import React, { useState } from 'react'

const withUser = (WrappedComponent) => {
  const WithUser = () => {
    const [user, setUser] = useState('dnstld')

    const changeUser = (newUser) => {
      setUser(newUser)
    }

    return (
      <WrappedComponent user={user} changeUser={changeUser} />
    )
  }

  return WithUser
}

export default withUser
