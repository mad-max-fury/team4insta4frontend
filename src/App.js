
import './App.css';
import SearchUsersPage from './components/SearchUserspage';
import SignIn from './pages/signin';
import SuggestedFriends from './pages/unboardingfriends';
function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <SuggestedFriends /> */}
      <SearchUsersPage />
    </div>
  );
}

export default App;
