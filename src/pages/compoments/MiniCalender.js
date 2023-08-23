import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
//css 적용시키기

export const MiniCalender = ({ user }) => {

    const [value, onChange] = useState(new Date());
    const dateArr = ["2023.8.23"];

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={value}
                formatDay={(locale,date)=> new Date(date).toLocaleDateString("en-us",{day:"2-digit"})}
                tileContent={({date, view })=> {
                    const exist = dateArr.find(
                        (oneDate) =>
                            oneDate === String( new Date(date).toLocaleDateString("ko",{
                                year: "numeric",
                                month: "2-digit",
                                day:"2-digit",
                            }))
                    );
                    return (
                        <>
                        </>
                    )

                }}

            />
        </div>
    );
}
export default MiniCalender;