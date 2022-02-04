
import './App.css';
import CreateMoMentPost from './components/CreateMoMentPost';
import SearchUsersPage from './components/SearchUserspage';
import FeedLanding from './pages/feedpage';
import OnboardPage from './pages/onboardingpage';
import SignIn from './pages/signin';
import SignUp from './pages/signup';
import SuggestedFriends from './pages/unboardingfriends';
import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import ProfilePage from './pages/profilepage';


function App() {
  return (
    <Routes>
      <Route path='/' exact element={<OnboardPage />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/findfriend' element={<CreateMoMentPost />} />
      <Route path='/login' element={<SignIn />} />
      <Route path='/searchpage' element={<SearchUsersPage />} />
      <Route path={'/profile'} exact element={<ProfilePage />} />




    </Routes>

  );
}

export default App;
