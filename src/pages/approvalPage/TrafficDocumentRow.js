import styles from './approval.module.css'
import traffic from "./Traffic.module.css";

function TrafficAddRow ({traffics}) {

    return (
        <>
            <tr key={traffics.travelingExpensesCode} className={traffic.tr}>
                <td className={traffic.td}>{traffics.trafficDate}</td>
                <td className={traffic.td}>{traffics.time}</td>
                <td className={traffic.td}>{traffics.startPoint}</td>
                <td className={traffic.td}>{traffics.destination}</td>
                <td className={traffic.td}>{traffics.distance + "Km"}</td>
                <td className={traffic.td}>{traffics.business}</td>
                <td className={traffic.td}>{traffics.price}</td>
                <td className={traffic.td}>{traffics.vehicle}</td>
            </tr>
        </>
    )
}

export default TrafficAddRow;