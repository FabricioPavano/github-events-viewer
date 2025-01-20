import { render, screen, fireEvent } from '@testing-library/react'
import SearchForm from './SearchForm'

describe('SearchForm', () => {
  const mockOnSearch = vi.fn()

  beforeEach(() => {
    mockOnSearch.mockClear()
  })

  test('renders form elements', () => {
    render(<SearchForm onSearch={mockOnSearch} />)
    
    expect(screen.getByPlaceholderText('Owner')).toBeInTheDocument()
    expect(screen.getByPlaceholderText('Repository')).toBeInTheDocument()
    expect(screen.getByRole('button')).toHaveTextContent('Search')
  })

  test('calls onSearch with form values', () => {
    render(<SearchForm onSearch={mockOnSearch} />)
    
    fireEvent.change(screen.getByPlaceholderText('Owner'), {
      target: { value: 'facebook' }
    })
    fireEvent.change(screen.getByPlaceholderText('Repository'), {
      target: { value: 'react' }
    })
    fireEvent.click(screen.getByRole('button'))

    expect(mockOnSearch).toHaveBeenCalledWith('facebook', 'react', 'All')
  })
})
