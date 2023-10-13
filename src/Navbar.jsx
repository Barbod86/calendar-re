export default function Navbar() {
  return <nav className="nav">
      <a href="/" className="Home">Home</a>
      <ul className="list">
          <li>
              <a href="/Age">Age calculator</a>
          </li>
          <li>
              <a href="/Year-difference">Year difference</a>
          </li>
          <li>
              <a href="/Calendar-difference">Calendar difference</a>
          </li>
          <li>
              <a href="/About">About</a>
          </li>
      </ul>
  </nav>
}