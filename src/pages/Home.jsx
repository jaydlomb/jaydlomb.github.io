import { useNavigate } from 'react-router-dom'
import photo from '../assets/headshot.png'

export default function Home() {
  const navigate = useNavigate()

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '60px', padding: '80px 40px', minHeight: '90vh' }}>
      <img src={photo} alt="Jayden" style={{ width: '300px', height: '300px', objectFit: 'cover', borderRadius: '8px' }} />
      <div>
        <h1 style={{ fontSize: '64px', fontWeight: '900', lineHeight: 1 }}>Hello!</h1>
        <p style={{ fontSize: '20px', fontWeight: 'bold', marginTop: '16px' }}>I'm Jayden!</p>
        <p style={{ marginTop: '8px', maxWidth: '360px', lineHeight: 1.6 }}>Game Programmer always striving to create, learn, and code more!</p>
        <div style={{ display: 'flex', gap: '20px', marginTop: '32px' }}>
          <button onClick={() => navigate('/resume')} style={{ width: '100px', height: '100px', borderRadius: '50%', border: 'none', background: '#f0a500', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer' }}>Resume</button>
          <button onClick={() => navigate('/projects')} style={{ width: '100px', height: '100px', borderRadius: '50%', border: 'none', background: '#e84040', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', color: '#fff' }}>Projects</button>
          <button onClick={() => navigate('/contact')} style={{ width: '100px', height: '100px', borderRadius: '50%', border: 'none', background: '#2a75bb', fontWeight: 'bold', fontSize: '16px', cursor: 'pointer', color: '#fff' }}>Contact</button>
        </div>
      </div>
    </div>
  )
}