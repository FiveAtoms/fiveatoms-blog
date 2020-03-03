import Link from 'next/link'

const linkStyle = {
  marginRight: 15
}

export default function Header() {
  return (
  <nav className="mx-gn">
  <div className="mx-gn-content">
    <Link href="/">
      <a href="/" className="mx-gn-logo">
        <img src="https://www.fiveatoms.com/images/fa-logo.svg" height="25" width="33" className="logo"/>
      </a>
    </Link>
    <ul className="mx-gn-list">
      <li>
        <a href="#" className="mx-gn-link">About</a>
      </li>
      <li>
        <a href="#" className="mx-gn-link">Progress</a>
      </li>
      <li>
        <a href="#" className="mx-gn-link">About</a>
      </li>
    </ul>
  </div>
  </nav>
  )
}
