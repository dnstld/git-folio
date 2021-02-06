import React, { useState } from 'react'
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

const FindUser = ({ user, changeUser }) => {
  const [value, setValue] = useState(user)

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleUser = () => {
    changeUser(value)
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

export default FindUser
