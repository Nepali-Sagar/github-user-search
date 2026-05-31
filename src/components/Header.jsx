import "../style/Header.css";

export default function Header({ search, setSearch, setUserData }) {
  const searchUser = async () => {
    if (!search) return;
    const response = await fetch(`https://api.github.com/users/${search}`);

    const data = await response.json();

    setUserData(data);
  };

  return (
    <div className="header">
      <div className="search-container">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="| GitHub Username"
        />

        <button onClick={searchUser}>Search</button>
      </div>
    </div>
  );
}
