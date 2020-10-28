import React, { useState } from "react"
import { Link } from "gatsby"

import styles from "./header.module.scss"

const Links = ({ className }) => {
  return (
    <span className={className}>
      <Link to="/" aria-label="View home page" className={styles.link}>
        Home
      </Link>
      <Link to="/about" aria-label="View about page" className={styles.link}>
        About
      </Link>
      <Link to="/thoughts" aria-label="View thoughts" className={styles.link}>
        Thoughts
      </Link>
      <Link
        to="/contact"
        aria-label="View contact page"
        className={styles.link}
      >
        Contact
      </Link>
    </span>
  )
}

const DesktopMenu = () => {
  return (
    <div className={styles.desktopMenu}>
      <Links className={styles.horizontal} />
    </div>
  )
}

const MobileMenu = () => {
  let [menuOpened, toggleShowLinks] = useState(false)
  return (
    <div className={styles.mobileMenu}>
      <input
        aria-label={menuOpened ? "open menu" : "close menu"}
        type="checkbox"
        id="mobile-menu-toggle"
        onChange={() => toggleShowLinks(!menuOpened)}
      />
      <label id="mobile-menu-icon" htmlFor="mobile-menu-toggle">
        <span className={menuOpened ? styles.topRotation : undefined}></span>
        <span className={menuOpened ? styles.middleRotation : undefined}></span>
        <span className={menuOpened ? styles.bottomRotation : undefined}></span>
      </label>
      {menuOpened && (
        <div className={styles.overlay}>
          <Links className={styles.vertical} />
        </div>
      )}
    </div>
  )
}

const Header = () => {
  return (
    <header className={styles.headerStyle}>
      <nav className={styles.navStyle}>
        <Link to="/" className={styles.link}>
          <svg
            className={styles.logo}
            width="44"
            height="44"
            version="1.1"
            viewBox="0 0 67.733 67.733"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="m10.089 39.574-0.02481 10.443q0 1.0914-0.62012 2.0092-0.86816 1.265-2.5301 1.265-1.9596 0-3.0758-1.5875-0.86816-1.2402-0.86816-2.6541 0-5.5066 0.34727-16.545 0.34727-11.038 0.34727-16.545 0-1.3891 0.99219-2.3812 0.99219-0.99219 2.4805-0.99219t2.4557 0.99219q0.99219 0.99219 0.99219 2.3812 0 2.2324-0.22324 6.0275-0.27285 4.4152-0.32246 6.0275 1.7363-1.6371 12.874-13.791 1.141-1.2402 2.6293-1.2402 1.4139 0 2.4557 0.99219 1.0666 0.99219 1.0666 2.4061 0 1.5379-5.9035 7.9871-4.3656 4.7377-9.2025 9.3514 2.7037 2.5549 5.4322 5.1098 3.175 2.927 5.7051 4.8121 1.265 0.91777 2.7285 1.3891 2.6541 0.84336 2.6541 3.2494 0 1.0666-0.66973 2.0588-0.91777 1.3395-2.5549 1.3395-3.5471 0-9.2025-4.6385-1.6867-1.3891-7.9623-7.4662z" />
            <path d="m45.51 53.152q-6.3004 0-9.9219-2.9939-3.051-2.4905-3.051-5.7493 0-1.6692 0.94258-2.7554 0.94258-1.1128 2.6045-1.1128 2.2324 0 3.2742 2.4375 1.4139 3.2588 6.3996 3.2588 4.2664 0 8.26-1.9871 4.1424-2.0401 4.1424-4.4776 0-3.3383-2.5797-4.3981-1.8355-0.76834-7.367-0.90082-4.2912-0.10598-7.6895-1.7221-4.5889-2.1991-4.5145-6.3057 0.07441-5.1664 5.1594-9.4586 5.085-4.3186 11.212-4.3186 2.4309 0 6.0027 1.1923 4.44 1.4837 4.44 3.4178 0 1.3777-0.89297 2.4375-0.99219 1.1923-2.5549 1.1923-1.1658 0-3.4975-0.52989-2.3068-0.52989-3.4975-0.52989-3.1998 0.02648-6.0771 1.6427-2.9766 1.6427-2.9766 3.5768 0 1.0068 0.89297 1.6692 0.91777 0.63587 2.7285 0.90082 3.175 0.18546 6.3252 0.37092 5.5066 0.45041 8.7064 3.3118 3.5223 3.1794 3.5223 8.7962 0 6.8356-7.2926 10.359-5.5562 2.676-12.7 2.676z" />
          </svg>
        </Link>
        <MobileMenu />
        <DesktopMenu />
      </nav>
    </header>
  )
}

export default Header
