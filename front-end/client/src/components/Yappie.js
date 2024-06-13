import YapService from "../services/YapService";

const Yappie = async (props) => {

    const userId = props.yappie.users.find(user => user != global.status);
    const user = await YapService.user(userId);

    return <>
        <div className="yappie">
            <span>{user.tag}</span>
            <span>{user.status}</span>
        </div>

    </>

}

export default Yappie;