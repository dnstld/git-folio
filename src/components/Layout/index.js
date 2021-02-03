import React from 'react'
import { GlobalStyles } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'

import FindUser from './../FindUser'

import {
  App,
  Header,
  LogoSection,
  LogoContainer,
  Logo,
  Version,
  Main,
  FindSection
} from './styles'

const Layout = ({ children }) => (
  <App>
    <Header>
      <LogoSection>
        <LogoContainer>
          <Logo>GitFolio</Logo>
          <Version>v1.0.0</Version>
        </LogoContainer>
        <a href="https://github.com/dnstld/git-portfolio" target="blank" tabIndex="3">
          <FontAwesomeIcon icon={faGithub} size="lg" />
        </a>
      </LogoSection>
      <FindSection>
        <FindUser />
      </FindSection>
    </Header>

    <Main>
      <GlobalStyles />

      {children}
    </Main>
  </App>
)

export default Layout
