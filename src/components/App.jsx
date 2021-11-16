import { Routes, Route, Navigate } from 'react-router-dom';
import Authentication from './Authentication/AuthenticationContainer';
import Dashboard from './Dashboard/DashboardContainer';

const App = (props) => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />}>
        <Route index element={<p>Villages</p>} />
        <Route path="/village/:id" element={<p>Villagers of village</p>} />
        <Route path="/villager/:id" element={<p>Offers of villager</p>} />
        <Route path="/profile" element={<p>Profile</p>} />
      </Route>
      <Route path="/auth" element={<Authentication />}>
        <Route index element={<p>Login</p>} />
        <Route path="register" element={<p>Register</p>} />
        <Route path="*" element={<Navigate to="/auth" />} />
      </Route>
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

export default App;
