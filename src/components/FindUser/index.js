import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons'

import withUser from '../WithUser'

import {
  Content,
  Wrapper,
  Label,
  InputContainer,
  Input,
  Button
} from './styles'

class FindUser extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.user
    };
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

  handleUser = () => {
    this.props.changeUser(this.state.value)
  }

  render() {
    return (
      <Content>
        <Wrapper>
          <Label htmlFor="find-user">
            GitHub username
          </Label>
          <InputContainer>
            <Input
              onChange={this.handleChange}
              value={this.state.value}
              type="text"
              id="find-user"
              tabIndex="1"
            />
            <Button type="button" tabIndex="2" onClick={this.handleUser}>
            {/* <Button type="button" tabIndex="2"> */}
              <FontAwesomeIcon icon={faSearch} pull="left" />
              Find
            </Button>
          </InputContainer>
        </Wrapper>
      </Content>
    )
  }
}

export default withUser(FindUser)
