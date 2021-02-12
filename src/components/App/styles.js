import tw from 'twin.macro'

export const AppContainer = tw.div`
  text-body
`
export const Header = tw.header`
  fixed top-0 left-0 right-0
`
export const LogoSection = tw.section`
  h-12 bg-primary text-white flex items-center px-4
`
export const LogoContainer = tw.div`
  flex flex-grow items-baseline
`
export const Logo = tw.h1`
  text-xl antialiased tracking-wider
`
export const Version = tw.small`
  text-gray-500 ml-2
`
export const Main = tw.main`
  container mx-auto mt-36 md:mt-44 lg:mt-56 p-4
`
export const FindSection = tw.section`
  h-24 md:h-32 lg:h-44 flex items-center bg-primary-light px-4
`
