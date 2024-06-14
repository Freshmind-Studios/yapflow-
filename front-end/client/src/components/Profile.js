
const Profile = (props) => {

    return <div className="profile">
        <img className="profile-picture" src={props.user.picture} alt="" />
        <div className="text-container">
            <span className="user-name">{props.user.name}</span>
            <span className="user-tag">{props.user.tag}</span>
            <span className="user-status">{
                (props.user.status.substring(0, 25) + "...")

            }</span>
        </div>
    </div>
}

export default Profile;
