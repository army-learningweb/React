import "../UserProfile.css";

function UserProfile({name,avatar,skill}) {
  // Logic
  // const name = 'Lưu Đức Vỹ'
  // const avatar = "Vỹ"
  // const skill = ['HTML,CSS,JS','PHP,LARAVEL'];

  // const user = {
  //   name: "Lưu Đức Vỹ",
  //   avatar: "Vỹ",
  //   skill: ["HTML,CSS,JS", "PHP,LARAVEL"],
  // };

  // HTML
  return (
    <div
      className="card"
      style={{
        background: "#242424",
        color: "white",
        padding: "15px",
        borderRadius: "15px",
      }}
    >
      <div className="name">{name}</div>
      <div className="avatar">{avatar}</div>
      <div className="skill">
        <ul>
            <li>{skill[0]}</li>
            <li>{skill[1]}</li>
        </ul>
      </div>
    </div>
  );
}

export { UserProfile };
