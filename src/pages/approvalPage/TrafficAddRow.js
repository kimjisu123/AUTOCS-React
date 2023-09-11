import styles from './approval.module.css'
import traffic from "./Traffic.module.css";

function TrafficAddRow ({index, value, onChangeInput}) {



    return (
        <>
            <tr key={index} className={traffic.tr}>
                <td className={traffic.td}><input type="date" name="trafficDate" id={traffic.trafficDate}/></td>
                <td className={traffic.td}><input type="time" name="trafficTime" id={traffic.trafficTime}/></td>
                <td className={traffic.td}><input type="text" name="from" id={traffic.from}/></td>
                <td className={traffic.td}><input type="text" name="to" id={traffic.to}/></td>
                <td className={traffic.td}><input type="number" placeholder="km" name="distance" id={traffic.distance}/></td>
                <td className={traffic.td}><input type="text" name="business" id={traffic.business}/></td>
                <td className={traffic.td}><input type="number" name="trafficPrice" id={traffic.trafficPrice} onChange={e => onChangeInput('trafficPrice', e.target.value)}/></td>
                <td className={traffic.td}><input type="text" name="vehicle" id={traffic.vehicle}/></td>
            </tr>
        </>
    )
}

export default TrafficAddRow;