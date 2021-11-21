import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from './AppStyles';
import { GlobalStyle } from './AppStyles';
import Authentication from './Authentication/AuthenticationContainer';
import LoginForm from './Authentication/LoginForm/LoginFormContainer';
import RegisterForm from './Authentication/RegisterForm/RegisterFormContainer';
import Dashboard from './Dashboard/DashboardContainer';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<p>Villages</p>} />
          <Route path="/village/:id" element={<p>Villagers of village</p>} />
          <Route path="/villager/:id" element={<p>Offers of villager</p>} />
          <Route path="/profile" element={<p>Profile</p>} />
        </Route>
        <Route path="/auth" element={<Authentication />}>
          <Route index element={<LoginForm />} />
          <Route path="register" element={<RegisterForm />} />
          <Route path="*" element={<Navigate to="/auth" />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
