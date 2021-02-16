import React, { useEffect, useState } from 'react'
import Moment from 'react-moment'
import Skeleton from 'react-loading-skeleton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faGithub } from '@fortawesome/free-brands-svg-icons'
import {
  faDesktop,
  faEnvelope,
  faUserShield,
  faMapMarkerAlt,
  faUserEdit,
} from '@fortawesome/free-solid-svg-icons'

import { getUser } from '../../services/api'

import {
  Content,
  FollowAndSocial,
  Social,
  Follow,
  FollowText,
  SocialLink,
  UserAndInfo,
  AvatarContainer,
  InfoContainer,
  InfoHeader,
  UserName,
  UserShield,
  UserLocation,
  UserBio,
  InfoFooter,
  GithubUserLink,
  GithubUserLinkText,
} from './styles'

const UserInfo = ({ user }) => {
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState()
  // eslint-disable-next-line no-unused-vars
  const [errors, setErrors] = useState(null)

  const fetchUserData = async (username) => {
    setIsLoading(true)

    return getUser(username)
      .then((response) => {
        setUserData(response.data)
        setIsLoading(false)
      })
      .catch((error) => {
        setErrors(error)
        setIsLoading(false)
      })
  }

  useEffect(() => {
    fetchUserData(user)
  }, [user])

  return (
    <div>
      {!isLoading ? (
        <Content data-testid="content">
          <FollowAndSocial>
            <Follow>
              <div data-testid="public-repos">
                <p>Repos</p>
                <FollowText>{userData.public_repos}</FollowText>
              </div>
              <div data-testid="public-gists">
                <p>Gists</p>
                <FollowText>{userData.public_gists}</FollowText>
              </div>
              <div data-testid="followers">
                <p>Followers</p>
                <FollowText>{userData.followers}</FollowText>
              </div>
              <div data-testid="following">
                <p>Following</p>
                <FollowText>{userData.following}</FollowText>
              </div>
            </Follow>

            <Social>
              {userData.twitter_username && (
                <SocialLink
                  href={`https://twitter.com/${userData.twitter_username}`}
                  target="blank"
                  title={userData.twitter_username}
                  data-testid="twitter-username"
                >
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </SocialLink>
              )}
              {userData.blog && (
                <SocialLink
                  href={userData.blog}
                  target="blank"
                  title={userData.name}
                  data-testid="blog"
                >
                  <FontAwesomeIcon icon={faDesktop} size="lg" />
                </SocialLink>
              )}
              {userData.email && (
                <SocialLink
                  href={`mailto:${userData.email}`}
                  target="blank"
                  title={userData.email}
                  data-testid="email"
                >
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </SocialLink>
              )}
            </Social>
          </FollowAndSocial>

          <UserAndInfo>
            <AvatarContainer>
              <img
                src={userData.avatar_url}
                alt={userData.name}
                data-testid="avatar-url"
              />
            </AvatarContainer>

            <InfoContainer>
              <InfoHeader>
                <UserName>
                  {userData.site_admin && (
                    <UserShield data-testid="site-admin">
                      <FontAwesomeIcon icon={faUserShield} pull="left" />
                    </UserShield>
                  )}
                  <span data-testid="name">{userData.name}</span>
                </UserName>

                {userData.location && (
                  <UserLocation>
                    <FontAwesomeIcon icon={faMapMarkerAlt} pull="left" />
                    <span data-testid="location">{userData.location}</span>
                  </UserLocation>
                )}

                {userData.bio && (
                  <UserBio data-testid="bio">{userData.bio}</UserBio>
                )}
              </InfoHeader>

              <InfoFooter>
                <GithubUserLink
                  href={userData.html_url}
                  target="blank"
                  title={userData.login}
                >
                  <GithubUserLinkText>
                    <FontAwesomeIcon icon={faGithub} pull="left" />
                    <span data-testid="created-at">
                      Created&nbsp;
                      <Moment fromNow>{userData.created_at}</Moment>
                    </span>
                  </GithubUserLinkText>
                </GithubUserLink>
                <GithubUserLinkText>
                  <FontAwesomeIcon icon={faUserEdit} pull="left" />
                  <span data-testid="updated-at">
                    Updated&nbsp;<Moment fromNow>{userData.updated_at}</Moment>
                  </span>
                </GithubUserLinkText>
              </InfoFooter>
            </InfoContainer>
          </UserAndInfo>
        </Content>
      ) : (
        <Content data-testid="loading">
          <FollowAndSocial>
            <Follow>
              <div>
                <p>Repos</p>
                <Skeleton />
              </div>
              <div>
                <p>Gists</p>
                <Skeleton />
              </div>
              <div>
                <p>Followers</p>
                <Skeleton />
              </div>
              <div>
                <p>Following</p>
                <Skeleton />
              </div>
            </Follow>

            <Social>
              <Skeleton width={24} height={24} />
              <Skeleton width={24} height={24} />
              <Skeleton width={24} height={24} />
            </Social>
          </FollowAndSocial>

          <UserAndInfo>
            <AvatarContainer />

            <InfoContainer>
              <InfoHeader>
                <Skeleton width={150} />

                <UserLocation>
                  <FontAwesomeIcon icon={faMapMarkerAlt} pull="left" />
                  <Skeleton width={100} />
                </UserLocation>

                <Skeleton width={275} />
                <Skeleton width={150} />
              </InfoHeader>

              <InfoFooter>
                <GithubUserLink>
                  <GithubUserLinkText>
                    <FontAwesomeIcon icon={faGithub} pull="left" />
                    <Skeleton width={100} />
                  </GithubUserLinkText>
                </GithubUserLink>
                <GithubUserLinkText>
                  <FontAwesomeIcon icon={faUserEdit} pull="left" />
                  <Skeleton width={100} />
                </GithubUserLinkText>
              </InfoFooter>
            </InfoContainer>
          </UserAndInfo>
        </Content>
      )}
    </div>
  )
}

export default UserInfo
