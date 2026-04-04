import { Navigate, Route, Routes } from 'react-router-dom'
import { JobsPage } from './pages/JobsPage'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/jobs" replace />} />
      <Route path="/jobs" element={<JobsPage />} />
    </Routes>
  )
}

export default App
