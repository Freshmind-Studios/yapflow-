import Yappie from "../components/Yappie";

const YappiesSelector = (props) => {

    console.log(props)
    return <>
        <div className="block yappies-selector">
        <span className="heading">yappies</span>
            <input type="search" name="search" id="search-yappies" placeholder="Search by tag, massages, ..." />
            <div className="yappies-scroll-wrapper">
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            {props.user.yappies.map((yappie, index) => (
                <Yappie key={index} yappie={yappie} />
            ))}
            </div>

        </div>
    </>
}

export default YappiesSelector;