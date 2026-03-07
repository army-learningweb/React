import "../UserProfile.css";

function UserProfile({ user }) {
  // HTML
  return (
    <div
      className="card"
      style={{
        background: "#242424",
        color: "white",
        padding: "15px",
        borderRadius: "15px",
        marginTop: "5px"
      }}
    >
      <div className="name">{user.name}</div>
      <div className="avatar">{user.avatar}</div>
      <div className="skill">
        <ul>
            <li>{user.skill[0]}</li>
            <li>{user.skill[1]}</li>
        </ul>
      </div>
    </div>
  );
}

export { UserProfile };
