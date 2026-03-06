import "../UserProfile.css"

function UserProfile(){

    // Logic
    // const name = 'Lưu Đức Vỹ'
    // const avatar = "Vỹ"
    // const skill = ['HTML,CSS,JS','PHP,LARAVEL'];

    const user = {
        name: 'Lưu Đức Vỹ',
        avatar: 'Vỹ',
        skill : ['HTML,CSS,JS','PHP,LARAVEL']
    };
    
    // HTML
    return (
        <div className="card" style={{background:"#242424",color:"white", padding:"15px", borderRadius:"15px"}}>
            <div className="name">{user.name}</div>
            <div className="avatar">{user.avatar}</div>
            <div className="skill">
                <ul>
                    <li>{user.skill[0]}</li>
                    <li>{user.skill[1]}</li>
                </ul>
            </div>
        </div>
    )
}

export {UserProfile}