import React from 'react'
import { GlobalStyles } from 'twin.macro'
import tw from "twin.macro"

const Main = tw.main`
  text-body
`;

const Layout = ({ children, ...rest }) => (
  <Main {...rest}>
    <GlobalStyles />

    {children}
  </Main>
)

export default Layout