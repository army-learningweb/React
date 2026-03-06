import "../UserProfile.css"

function UserProfile(){
    return (
        <div>
            <div className="name">Lưu Đức Vỹ</div>
            <div className="avatar">Vỹ</div>
            <div className="skill">
                <ul>
                    <li>HTML,CSS,JS</li>
                    <li>PHP.LARAVEL</li>
                </ul>
            </div>
        </div>
    )
}

export {UserProfile}