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

import withUser from '../WithUser'

const User = (props) => {
  const [userName, setUserName] = useState(props.user)
  const [user, setUser] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [errors, setErrors] = useState(null)

  useEffect(() => {
    api.getUser(props.user)
      .then(response => {
        setUser(response.data)
        setIsLoading(false)
      })
      .catch(error => {
        setErrors(error)
        setIsLoading(false)
      })
  }, [])

  return (
    <div>
      {!isLoading ? (
        <Content>
          <FollowAndSocial>
            <Follow>
              <div>
                <p>Repos</p>
                <FollowText>{user.public_repos}</FollowText>
              </div>
              <div>
                <p>Gists</p>
                <FollowText>{user.public_gists}</FollowText>
              </div>
              <div>
                <p>Followers</p>
                <FollowText>{user.followers}</FollowText>
              </div>
              <div>
                <p>Following</p>
                <FollowText>{user.following}</FollowText>
              </div>
            </Follow>

            <Social>
              {user.twitter_username &&
                <SocialLink href={`https://twitter.com/${user.twitter_username}`} target="blank" title={user.twitter_username}>
                  <FontAwesomeIcon icon={faTwitter} size="lg" />
                </SocialLink>
              }
              {user.blog &&
                <SocialLink href={user.blog} target="blank" title={user.name}>
                  <FontAwesomeIcon icon={faDesktop} size="lg" />
                </SocialLink>
              }
              {user.email &&
                <SocialLink href={`mailto:${user.email}`} target="blank" title={user.email}>
                  <FontAwesomeIcon icon={faEnvelope} size="lg" />
                </SocialLink>
              }
            </Social>
          </FollowAndSocial>

          <UserInfo>
            {/* <AvatarContainer hireable={user.hireable}> */}
            <AvatarContainer>
              <img src={user.avatar_url} alt={user.name} />
            </AvatarContainer>

            <InfoContainer>
              <InfoHeader>
                <UserName>
                  {user.site_admin &&
                    <UserShield>
                      <FontAwesomeIcon icon={faUserShield} pull="left" />
                    </UserShield>
                  }
                  {user.name}
                </UserName>

                {user.location &&
                  <UserLocation>
                    <FontAwesomeIcon icon={faMapMarkerAlt} pull="left" />
                    {user.location}
                  </UserLocation>
                }

                {user.bio &&
                  <UserBio>
                    {user.bio}
                  </UserBio>
                }
              </InfoHeader>

              <InfoFooter>
                <GithubUserLink href={user.html_url} target="blank" title={user.login}>
                  <GithubUserLinkText>
                    <FontAwesomeIcon icon={faGithub} pull="left" />
                    Created&nbsp;<Moment fromNow>{user.created_at}</Moment>
                  </GithubUserLinkText>
                </GithubUserLink>
                <GithubUserLinkText>
                  <FontAwesomeIcon icon={faUserEdit} pull="left" />
                  Updated&nbsp;<Moment fromNow>{user.updated_at}</Moment>
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

export default withUser(User)
