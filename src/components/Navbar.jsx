import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={{ display: 'flex', gap: '24px', padding: '16px 32px', borderBottom: '1px solid #ddd', background: '#fff' }}>
      <Link to="/">Home</Link>
      <Link to="/resume">Resume</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  )
}