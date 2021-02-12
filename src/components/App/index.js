/* eslint-disable jsx-a11y/tabindex-no-positive */
import React, { useState } from 'react'
import { GlobalStyles } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons'

import FindUser from '../FindUser'
import UserInfo from '../UserInfo'

import {
  AppContainer,
  Header,
  LogoSection,
  LogoContainer,
  Logo,
  Version,
  Main,
  FindSection,
} from './styles'

const App = () => {
  const [user, setUser] = useState('dnstld')

  const changeUser = (newUser) => {
    setUser(newUser)
  }

  return (
    <AppContainer>
      <Header>
        <LogoSection>
          <LogoContainer>
            <Logo>GitFolio</Logo>
            <Version>v1.0.0</Version>
          </LogoContainer>
          <a
            href="https://github.com/dnstld/git-portfolio"
            target="blank"
            tabIndex="3"
          >
            <FontAwesomeIcon icon={faGithub} size="lg" />
          </a>
        </LogoSection>
        <FindSection>
          <FindUser user={user} changeUser={changeUser} />
        </FindSection>
      </Header>

      <Main>
        <GlobalStyles />

        <UserInfo user={user} />
      </Main>
    </AppContainer>
  )
}

export default App
