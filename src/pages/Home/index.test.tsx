import { fireEvent, waitFor, act } from '@testing-library/react'
import { render } from 'helpers/customRender'
import { getAlbums } from 'api'
import Home from 'pages/Home'

const mockData = [{
  id: 'id',
  name: 'Album 1',
  release_date: '2015',
  images: [{
    height: 10,
    url: 'uri',
    width: 10
  }]
}]

jest.mock('api')
jest.mock('hooks/useToken',
  () => () => ({ token: 'token', logout: jest.fn() })
)

describe('Home', () => {
  let mockApi: jest.MockedFunction<typeof getAlbums>

  beforeEach(() => {
    mockApi = getAlbums as jest.MockedFunction<typeof getAlbums>
    mockApi.mockResolvedValue(mockData)
  })

  it('should fetch albums and display them', async () => {
    const { getByPlaceholderText, getByText } = await act(async () => render(<Home/>))

    const searchInput = getByPlaceholderText('Search')
    fireEvent.change(searchInput, { target: { value: 'Artist Name' } })

    expect(getAlbums).toHaveBeenCalledWith('token', 'Artist Name', expect.any(Function))

    await waitFor(() => {
      expect(getByText('Album 1')).toBeInTheDocument()
    })
  })

  it('should display "No results" message if no albums are found', async () => {
    mockApi.mockResolvedValue([])

    const { getByPlaceholderText, getByText, queryByText } = render(<Home/>)

    const searchInput = getByPlaceholderText('Search')
    await act(async () => {
      fireEvent.change(searchInput, { target: { value: 'Unknown Artist' } })
    })

    expect(getAlbums).toHaveBeenCalledWith('token', 'Unknown Artist', expect.any(Function))

    await waitFor(() => {
      expect(getByText('Please make sure your words are spelled correctly or use less or different words.')).toBeInTheDocument()
      expect(queryByText('Album 1')).not.toBeInTheDocument()
    })
  })
})
