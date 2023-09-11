import moment from "moment-timezone";
import React, {useEffect, useState} from "react";

const Clock = () => {


    const getCurrentTime = () => {
        var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
        return m.format("HH:mm:ss");
    };

    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 1000); // (60초)마다 업데이트

        return () => {
            clearInterval(intervalId);
        };
    }, []);


    return(
        <>
            <h1 style={{textAlign:"center", fontSize:'60px', marginTop:'0px'}}>{ currentTime }</h1>
        </>
    )

}

export default Clock;