import React, { useState } from 'react'
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

const FindUser = (props) => {
  const [value, setValue] = useState(props.user)

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleUser = () => {
    props.changeUser(value)
  }

  return (
    <Content>
      <Wrapper>
        <Label htmlFor="find-user">
          GitHub username
        </Label>
        <InputContainer>
          <Input
            onChange={handleChange}
            value={value}
            type="text"
            id="find-user"
            tabIndex="1"
          />
          <Button type="button" tabIndex="2" onClick={handleUser}>
            <FontAwesomeIcon icon={faSearch} pull="left" />
            Find
          </Button>
        </InputContainer>
      </Wrapper>
    </Content>
  )
}

export default withUser(FindUser)
