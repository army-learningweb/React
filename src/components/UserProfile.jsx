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
          {user.skill.map((skill, index)=>(
              <li key={index}>{skill}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export { UserProfile };
