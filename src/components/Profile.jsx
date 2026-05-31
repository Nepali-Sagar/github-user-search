import "../style/Profile.css";

export default function Profile({ userData }) {
  if (!userData) {
    return <h2 className="searchMsg">Search for a user</h2>;
  }

  return (
    <div className="profile">
      <div className="user-details">
        <div className="user-details-text">

          <p className="user-name">{userData.name}</p>
          <p>
            <span className="label">Username: </span>
            <span className="value">{userData.login}</span>
          </p>

          <p>
            <span className="label">Followers: </span>
            <span className="value">{userData.followers}</span>
          </p>

          <p>
            <span className="label">Following: </span>
            <span className="value">{userData.following}</span>
          </p>

          <p>
            <span className="label">Public Repos: </span>
            <span className="value">{userData.public_repos}</span>
          </p>

        </div>


        <div className="user-details-img">
          <img 
          src={userData.avatar_url} 
          alt={userData.login} 
          />
          <q className="user-bio">{userData.bio}</q>
        </div>
      </div>

      <div className="user-activity-visual"></div>
    </div>
  );
}
