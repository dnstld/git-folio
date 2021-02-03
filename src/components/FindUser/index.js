import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faSearch
} from '@fortawesome/free-solid-svg-icons'

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
    this.state = { value: 'dnstld' };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
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
            <Button tabIndex="2">
              <FontAwesomeIcon icon={faSearch} pull="left" />
              Find
            </Button>
          </InputContainer>
        </Wrapper>
      </Content>
    )
  }
}

export default FindUser
