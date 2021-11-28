import { Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from "styled-components";
import { theme } from './AppStyles';
import { GlobalStyle } from './AppStyles';
import Authentication from './Authentication/AuthenticationContainer';
import LoginForm from './Authentication/LoginForm/LoginFormContainer';
import RegisterForm from './Authentication/RegisterForm/RegisterFormContainer';
import Dashboard from './Dashboard/DashboardContainer';
import Offers from './Dashboard/Offers/OffersContainer';
import Profile from './Dashboard/Profile/ProfileContainer';
import Villagers from './Dashboard/Villagers/VillagersContainer';
import Villages from './Dashboard/Villages/VillagesContainer';

const App = (props) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Villages />} />
          <Route path="/village/:villageId" element={<Villagers />} />
          <Route path="/villager/:villagerId" element={<Offers />} />
          <Route path="/profile" element={<Profile />} />
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
