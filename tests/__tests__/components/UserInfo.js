/* eslint-disable no-undef */
import React from 'react'
import { render, cleanup, waitFor } from '@testing-library/react'
import axios from 'axios'

import UserInfo from '../../../src/components/UserInfo'

jest.mock('axios')

afterEach(cleanup)

describe('UserInfo component', () => {
  it('fetches and displays data', async () => {
    Date.now = jest.fn(() => new Date('2021-01-01T00:00:00.000Z'))

    const data = {
      data: {
        avatar_url: 'https://avatars.githubusercontent.com/u/3258939?v=4',
        bio: 'Front-end developer with a taste for design',
        blog: 'https://denistoledo.dev',
        created_at: '2013-01-13T17:56:53Z',
        email: 'contato@denistoledo.com.br',
        followers: 10,
        following: 24,
        hireable: true,
        html_url: 'https://github.com/dnstld',
        location: 'Sumaré, São Paulo',
        login: 'dnstld',
        name: 'Denis Toledo',
        public_gists: 0,
        public_repos: 98,
        repos_url: 'https://api.github.com/users/dnstld/repos',
        site_admin: true,
        twitter_username: 'dnstld',
        updated_at: '2021-02-16T14:04:14Z',
        url: 'https://api.github.com/users/dnstld',
      },
    }

    axios.get.mockImplementationOnce(() => Promise.resolve(data))

    const { getByTestId } = render(<UserInfo user="gitfolio" />)

    expect(getByTestId('loading')).toBeInTheDocument()

    await waitFor(() => getByTestId('content'))

    expect(getByTestId('public-repos')).toHaveTextContent('Repos98')
    expect(getByTestId('public-gists')).toHaveTextContent('Gists0')
    expect(getByTestId('followers')).toHaveTextContent('Followers10')
    expect(getByTestId('following')).toHaveTextContent('Following24')
    expect(getByTestId('twitter-username')).toBeInTheDocument()
    expect(getByTestId('blog')).toBeInTheDocument()
    expect(getByTestId('email')).toBeInTheDocument()
    expect(getByTestId('avatar-url')).toBeInTheDocument()
    expect(getByTestId('site-admin')).toBeInTheDocument()
    expect(getByTestId('name')).toHaveTextContent('Denis Toledo')
    expect(getByTestId('location')).toHaveTextContent('Sumaré, São Paulo')
    expect(getByTestId('bio')).toHaveTextContent(
      'Front-end developer with a taste for design'
    )
    expect(getByTestId('created-at')).toHaveTextContent('Created 8 years ago')
    expect(getByTestId('updated-at')).toHaveTextContent('Updated in 2 months')
  })
})
