/* eslint-disable jsx-a11y/tabindex-no-positive */
import React, { useState, useRef } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'

import {
  Content,
  Wrapper,
  Label,
  InputContainer,
  Input,
  Button,
} from './styles'

const FindUser = ({ user, changeUser }) => {
  const [value, setValue] = useState(user)
  const isButtonDisabled = value.length === 0

  const searchInput = useRef(null)

  const handleChange = (event) => {
    setValue(event.target.value)
  }

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      changeUser(value)
    }
  }

  const handleOnFocus = (event) => {
    setValue('')
  }

  return (
    <Content>
      <Wrapper>
        <Label htmlFor="find-user">GitHub username</Label>
        <InputContainer>
          <Input
            ref={searchInput}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            onFocus={handleOnFocus}
            value={value}
            type="text"
            id="find-user"
            placeholder="Type the username"
          />
          <Button
            type="button"
            onClick={() => changeUser(value)}
            disabled={isButtonDisabled}
          >
            <FontAwesomeIcon icon={faSearch} pull="left" />
            Find
          </Button>
        </InputContainer>
      </Wrapper>
    </Content>
  )
}

export default FindUser
