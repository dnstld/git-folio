import React, { useEffect, useState } from 'react'
import Moment from 'react-moment';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faTwitter,
  faGithub,
} from '@fortawesome/free-brands-svg-icons'
import {
  faDesktop,
  faEnvelope,
  faUserShield,
  faMapMarkerAlt,
  faUserEdit
} from '@fortawesome/free-solid-svg-icons'

import api from '../../services/api'
import {
  Content,
  FollowAndSocial,
  Social,
  Follow,
  FollowText,
  SocialLink,
  UserInfo,
  AvatarContainer,
  InfoContainer,
  InfoHeader,
  UserName,
  UserShield,
  UserLocation,
  UserBio,
  InfoFooter,
  GithubUserLink,
  GithubUserLinkText
} from './styles'

const User = ({ user }) => {
  const [userData, setUserData] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    api.getUser(user)
      .then(response => {
        setUserData(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setErrors(error)
        setIsLoading(false)
      })
  }, [user])

  return (
    <div>
      {!isLoading ? (
        <Content>
          <FollowAndSocial>
            <Follow>
              <div>
                <p>Repos</p>
                <FollowText>{userData.public_repos}</FollowText>
              </div>
              <div>
                <p>Gists</p>
                <FollowText>{userData.public_gists}</FollowText>
              </div>
              <div>
                <p>Followers</p>
                <FollowText>{userData.followers}</FollowText>
              </div>
              <div>
                <p>Following</p>
                <FollowText>{userData.following}</FollowText>
              </div>
            </Follow>

            <Social>
              {userData.twitter_username &&
                <SocialLink href={`https://twitter.com/${userData.twitter_username}`} target="blank" title={userData.twitter_username}>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </SocialLink>
              }
              {userData.blog &&
                <SocialLink href={userData.blog} target="blank" title={userData.name}>
                  <FontAwesomeIcon icon={faDesktop} size="lg" />
                </SocialLink>
              }
              {userData.email &&
                <SocialLink href={`mailto:${userData.email}`} target="blank" title={userData.email}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </SocialLink>
              }
            </Social>
          </FollowAndSocial>

          <UserInfo>
            {/* <AvatarContainer hireable={userData.hireable}> */}
            <AvatarContainer>
              <img src={userData.avatar_url} alt={userData.name} />
            </AvatarContainer>

            <InfoContainer>
              <InfoHeader>
                <UserName>
                  {userData.site_admin &&
                    <UserShield>
                      <FontAwesomeIcon icon={faUserShield} pull="left" />
                    </UserShield>
                  }
                  {userData.name}
                </UserName>

                {userData.location &&
                  <UserLocation>
                    <FontAwesomeIcon icon={faMapMarkerAlt} pull="left" />
                    {userData.location}
                  </UserLocation>
                }

                {userData.bio &&
                  <UserBio>
                    {userData.bio}
                  </UserBio>
                }
              </InfoHeader>

              <InfoFooter>
                <GithubUserLink href={userData.html_url} target="blank" title={userData.login}>
                  <GithubUserLinkText>
                    <FontAwesomeIcon icon={faGithub} pull="left" />
                    Created&nbsp;<Moment fromNow>{userData.created_at}</Moment>
                  </GithubUserLinkText>
                </GithubUserLink>
                <GithubUserLinkText>
                  <FontAwesomeIcon icon={faUserEdit} pull="left" />
                  Updated&nbsp;<Moment fromNow>{userData.updated_at}</Moment>
                </GithubUserLinkText>
              </InfoFooter>
            </InfoContainer>
          </UserInfo>
        </Content>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  )
}

export default User
