import React from 'react'
import tw, { GlobalStyles } from 'twin.macro'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons'

const Header = tw.header`
  fixed top-0 left-0 right-0
`

const LogoSection = tw.section`
  h-12 bg-primary text-white flex items-center px-4
`

const LogoContainer = tw.div`
  flex flex-grow items-baseline
`

const Logo = tw.h1`
  text-xl antialiased tracking-wider
`

const Version = tw.small`
  text-gray-500 ml-2
`

const Main = tw.main`
  text-body
`

const FindSection = tw.section`
  h-24 md:h-32 lg:h-44 flex items-center bg-primary-light px-4
`

const Layout = ({ children }) => (
  <div>
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
        Find User
      </FindSection>
    </Header>

    <Main>
      <GlobalStyles />

      {children}
    </Main>
  </div>
)

export default Layout
