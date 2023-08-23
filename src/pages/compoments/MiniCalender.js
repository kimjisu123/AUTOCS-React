import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './MiniCalender.css'
//css 적용시키기

export const MiniCalender = ({ user }) => {

    const [value, onChange] = useState(new Date());
    const [mark, setMark] = useState([]);
    const dateArr = ["2023.8.23"];


    return (
        <div className="custom-calender">
            <Calendar
                onChange={onChange}
                value={value}
                formatDay={(locale,date)=> new Date(date).toLocaleDateString("en-us",{day:"2-digit"})}
                selectRange={true}
            />
        </div>
    );
}
export default MiniCalender;