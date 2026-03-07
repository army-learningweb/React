// Component
import { UserProfile } from "./components/UserProfile";
import { users } from "./data/users";

// App
function App() {
  return (
    <>
      { users.map((user)=>(
        <UserProfile key={user.id} user={user} />
      )) }
    </>
  );
}

export default App;
