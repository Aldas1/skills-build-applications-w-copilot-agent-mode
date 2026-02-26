

import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';


function App() {
  return (
    <div className="bg-light min-vh-100 d-flex flex-column">
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary shadow-sm py-3">
        <div className="container">
          <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
            <img src={process.env.PUBLIC_URL + '/octofitapp-small.png'} alt="Octofit Logo" className="App-logo" />
            Octofit Tracker
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0 gap-2">
              <li className="nav-item">
                <Link className="nav-link" to="/activities">Activities</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/teams">Teams</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/users">Users</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/workouts">Workouts</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <main className="flex-grow-1 d-flex align-items-center justify-content-center py-4">
        <section className="container" style={{maxWidth: '1000px'}}>
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="p-5 bg-white rounded-4 shadow text-center">
                <h2 className="display-5 fw-bold mb-3">Welcome to Octofit Tracker!</h2>
                <p className="lead mb-4">Track your fitness, join teams, and compete on the leaderboard. Start your journey today!</p>
                <Link to="/activities" className="btn btn-primary btn-lg px-4">Get Started</Link>
              </div>
            } />
          </Routes>
        </section>
      </main>
      <footer className="bg-primary text-white text-center py-3 mt-auto shadow-sm">
        <small>&copy; {new Date().getFullYear()} Octofit Tracker. All rights reserved.</small>
      </footer>
    </div>
  );
}

export default App;
