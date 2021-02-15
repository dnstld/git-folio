/* eslint-disable no-undef */
import React from 'react'
import { render } from '@testing-library/react'
import { useStaticQuery } from 'gatsby'
import Helmet from 'react-helmet'

import Seo from '../../../src/components/Seo'

describe('SEO component', () => {
  beforeAll(() => {
    useStaticQuery.mockReturnValue({
      site: {
        siteMetadata: {
          title: 'Test Title',
          description: 'Test Description',
        },
      },
    })
  })

  it('renders correctly', () => {
    render(<Seo />)

    const helmet = Helmet.peek()

    expect(helmet.title).toBe('Test Title')
    expect(helmet.metaTags).toEqual(
      expect.arrayContaining([
        {
          name: 'description',
          content: 'Test Description',
        },
      ])
    )
  })

  it('updates correctly', () => {
    render(<Seo title="New Test Title" description="New Test Description" />)

    const helmet = Helmet.peek()

    expect(helmet.title).toBe('New Test Title')
    expect(helmet.metaTags).toEqual(
      expect.arrayContaining([
        {
          name: 'description',
          content: 'New Test Description',
        },
      ])
    )
  })
})
