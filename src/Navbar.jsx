export default function Navbar() {
  return <nav className="nav">
      <a href="/" className="Home">Home</a>
      <ul className="list">
          <li>
              <a href="/Age">Age calculator</a>
          </li>
          <li>
              <a href="/Year-difference">Date difference</a>
          </li>
          <li>
              <a href="/Calendar-difference">Calender conversion</a>
          </li>
          <li>
              <a href="/About">About</a>
          </li>
      </ul>
  </nav>
}