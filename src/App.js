
import './App.css';
import CreateMoMentPost from './components/CreateMoMentPost';
import SearchUsersPage from './components/SearchUserspage';
import SignIn from './pages/signin';
import SuggestedFriends from './pages/unboardingfriends';
function App() {
  return (
    <div className="App">
      {/* <SignIn /> */}
      {/* <SuggestedFriends /> */}
      {/* <SearchUsersPage /> */}
      <CreateMoMentPost />
    </div>
  );
}

export default App;
