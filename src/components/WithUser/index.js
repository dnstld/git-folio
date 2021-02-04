import React from 'react'

const withUser = (WrappedComponent) => {
  class WithUser extends React.Component {
    constructor(props) {
      super(props);

      this.state = {
        user: 'dnstld'
      }
    }

    changeUser = (newUser) => {
      this.setState({ user: newUser })
    }

    render() {
      return <WrappedComponent user={this.state.user} changeUser={this.changeUser} />
    }
  }
  return WithUser
}

export default withUser
