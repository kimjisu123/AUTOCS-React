import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';

export default class DashBoard extends Component {
    constructor(props){
        super(props);
    }
    dateClick=(info)=>{          // 모달창을 보여주는 이벤트로 변경
        alert(info.dateStr)
    }

    render() {
        return(
            <>
                <div style={{margin:"50px -400px 50px 270px", display:'grid',gridTemplateColumns:"2fr 1fr"}}>
                <FullCalendar
                        plugins={[dayGridPlugin,timeGridPlugin,interactionPlugin]}
                        initialView={'dayGridMonth'}
                        headerToolbar={
                            {
                                start: 'today',
                                center: 'title',
                                end: 'prev,next',
                                right: 'myCustomButton prev,next'
                            }
                        }

                        customButtons={{
                            myCustomButton: {
                                text: '등록',
                                click : () => alert("hi")
                            }
                        }}
                        height={"90vh"}

                        dateClick={this.dateClick}
                        events={[{title:'판매건수 : 23건', date:'2023-05-11',},{title:'판매건수 : 23건',date:'2023-05-13',}]} // ajax데이터를 가져오는 곳
                    />
                </div>
            </>
        );
    }
}