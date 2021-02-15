/* eslint-disable no-undef */
import axios from 'axios'

import { getUser } from '../../../src/services/api'

jest.mock('axios')

describe('API service', () => {
  it('fetches successfully data from an API', async () => {
    const data = { data: { name: 'GitFolio' } }

    axios.get.mockImplementationOnce(() => Promise.resolve(data))

    await expect(getUser('gitfolio')).resolves.toEqual(data)
  })

  it('fetches erroneously data from an API', async () => {
    const errorMessage = 'Network Error'

    axios.get.mockImplementationOnce(() =>
      Promise.reject(new Error(errorMessage))
    )

    await expect(getUser('gitfolio')).rejects.toThrow(errorMessage)
  })
})
