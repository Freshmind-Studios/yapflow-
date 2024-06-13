import YapService from "../services/YapService";
import Yappie from "../components/Yappie";

const YappiesSelector = () => {
    const yappies = YapService.yappies();

    return <>
        <div className="block yappies-selector">
        {
            yappies.map(yappie => {
                return <Yappie yappie={yappie} />
            })
        }
        </div>
    </>
}

export default YappiesSelector;