import { useState } from "react";
import Header from "./components/Header";
import Profile from "./components/Profile";

function App() {
  const [search, setSearch] = useState("");
  const [userData, setUserData] = useState(null);

  return (
    <div>
      <Header
        search={search}
        setSearch={setSearch}
        setUserData={setUserData}
      />

      <Profile userData={userData} />
    </div>
  );
}

export default App;