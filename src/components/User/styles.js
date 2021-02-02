import tw from 'twin.macro'

export const Content = tw.div`
  flex flex-col
`
export const FollowAndSocial = tw.div`
  flex justify-between
`
export const Social = tw.div`
  flex md:gap-2
`
export const Follow = tw.div`
  flex gap-4 w-full text-xs text-center mb-4
`
export const FollowText = tw.p`
  text-sm font-bold
`
export const SocialLink = tw.a`
  p-2
`
export const UserInfo = tw.div`
  flex flex-col sm:flex-row items-center gap-2 p-4 border rounded mb-4
`
export const AvatarContainer = tw.div`
  flex-shrink-0 h-20 md:h-32 w-20 md:w-32 rounded-full overflow-hidden flex items-center justify-center border-2 md:border-4 border-gray-300
`
export const InfoContainer = tw.div`
  flex flex-col w-full px-4
`
export const InfoHeader = tw.header`
  flex flex-col items-center sm:items-baseline
`
export const UserName = tw.h1`
  inline-flex items-center text-primary text-2xl antialiased font-semibold tracking-wide
`
export const UserShield = tw.span`
  text-yellow-400 text-initial
`
export const UserLocation = tw.small`
  flex items-center text-gray-500
`
export const UserBio = tw.p`
  italic mt-2 text-center sm:text-left
`
export const InfoFooter = tw.footer`
  flex justify-between w-full text-gray-500 mt-2
`
export const GithubUserLink = tw.a`
  leading-initial
`
export const GithubUserLinkText = tw.small`
  flex items-center
`