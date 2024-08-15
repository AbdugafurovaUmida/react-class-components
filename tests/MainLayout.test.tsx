import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import { MainLayout } from '../components/MainLayout/MainLayout'
import { ThemeContext } from '../contexts/ThemeContext'
// import { useRouter } from 'next/router'
// import { ThemeToggle } from '../../contexts/ThemeToggle'
// import { Search } from '../search/Search'
// import { ButtonError } from '../ButtonError'
// import { List } from '../components/list/List'
// import { Pagination } from '../components/pagination/Pagination'
// import { Flyout } from '../components/flyout/Flyout'

// Mock the useRouter hook
vi.mock('next/router', () => ({
  useRouter: () => ({
    query: { search: '', page: '1' },
    push: vi.fn(),
  }),
}))

// Mock the useGetHeroesByPageQuery hook
vi.mock('../../services/swapi', () => ({
  useGetHeroesByPageQuery: () => ({
    data: {
      data: { count: 30 },
    },
  }),
}))

// Mock other components if needed
vi.mock('../search/Search', () => ({
  // Search: ({ onChange }: any) => (
  //   <input data-testid='search-input' onChange={(e) => onChange(e.target.value)} />
  // ),
}))

vi.mock('../ButtonError', () => ({
  ButtonError: () => <div>Button Error</div>,
}))

vi.mock('../list/List', () => ({
  List: () => <div>List of characters</div>,
}))

vi.mock('../pagination/Pagination', () => ({
  Pagination: () => <div>Pagination</div>,
}))

vi.mock('../flyout/Flyout', () => ({
  Flyout: () => <div>Flyout</div>,
}))

// Mock the ThemeContext
const themeContextValue = { theme: 'light' }

describe('MainLayout Component', () => {
  it('renders correctly with the light theme', () => {
    render(
      <ThemeContext.Provider value={themeContextValue}>
        <MainLayout>
          <div>Child Content</div>
        </MainLayout>
      </ThemeContext.Provider>,
    )

    expect(screen.getByTestId('home-page')).toBeInTheDocument()
    expect(screen.getByText('War Heroes')).toBeInTheDocument()
    expect(screen.getByText('Button Error')).toBeInTheDocument()
    expect(screen.getByText('List of characters')).toBeInTheDocument()
    expect(screen.getByText('Pagination')).toBeInTheDocument()
    expect(screen.getByText('Flyout')).toBeInTheDocument()
  })

  it('handles search input change', () => {
    render(
      <ThemeContext.Provider value={themeContextValue}>
        <MainLayout>
          <div>Child Content</div>
        </MainLayout>
      </ThemeContext.Provider>,
    )

    const searchInput = screen.getByTestId('search-input') as HTMLInputElement
    fireEvent.change(searchInput, { target: { value: 'New search' } })

    // Add your expectations here. You may need to mock the router.push function if it's used.
    // For now, this checks if the input change event works correctly.
    expect(searchInput.value).toBe('New search')
  })
})
