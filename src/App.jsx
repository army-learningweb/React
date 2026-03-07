// Component
import { UserProfile } from "./components/UserProfile";

// App
function App() {

  // logic
  const user = {
    name: "Lưu Đức Vỹ",
    avatar: "Vỹ",
    skill: ["HTML,CSS,JS", "PHP,LARAVEL"],
  };

  const user2 = {
    name: "Lưu Đức Vỹ",
    avatar: "Vỹ",
    skill: ["HTML,CSS,JS", "PHP,LARAVEL"],
  };

  return (
    <>
      <UserProfile user={user}/>
      <UserProfile user={user2}/>
    </>
  );
}

export default App;
