import React from 'react'
import { Link } from 'gatsby'

import { rhythm, scale } from '../utils/typography'
import alephLogo from '../../src/assets/alephnode.png'

class Layout extends React.Component {
  constructor() {
    super()
    this.state = {
      theme: false,
    }
  }
  componentDidMount() {
    this.setState({ theme: window.__theme })
    window.__onThemeChange = () => {
      this.setState({ theme: window.__theme })
    }
  }
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header
    let { theme } = this.state

    if (location.pathname === rootPath) {
      header = (
        <div>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <img
              src={alephLogo}
              alt={`aleph node`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(4),
                height: rhythm(4),
              }}
            />
            <h1
              style={{
                ...scale(1.3),
                marginBottom: rhythm(1.5),
                marginTop: 0,
              }}
            >
              {title}
            </h1>
          </Link>
        </div>
      )
    } else {
      header = (
        <div>
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: 'inherit',
            }}
            to={'/'}
          >
            <img
              src={alephLogo}
              alt={`aleph node`}
              style={{
                marginRight: rhythm(1 / 2),
                marginBottom: 0,
                width: rhythm(4),
                height: rhythm(4),
              }}
            />
            <h3
              style={{
                fontFamily: 'Helvetica, sans-serif',
                marginTop: 0,
                marginBottom: rhythm(1),
              }}
            >
              {title}
            </h3>
          </Link>
        </div>
      )
    }
    return (
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        {theme ? (
          <button
            id="theme-btn"
            name={theme || 'dark'}
            onClick={({ target: { name } }) =>
              window.__setPreferredTheme(name === 'dark' ? 'light' : 'dark')
            }
          >
            {theme === 'dark' ? '💡' : '🕯'}
          </button>
        ) : (
          <div style={{ height: '24px' }} />
        )}
        {header}
        {children}
      </div>
    )
  }
}

export default Layout
