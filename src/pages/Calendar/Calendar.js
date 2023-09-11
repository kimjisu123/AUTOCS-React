import React, { Component } from "react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import FullCalendar from '@fullcalendar/react';

export default function DashBoard () {

        const test = (e) => console.log(e);


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
                        selectable={true}
                        // dateClick={e => console.log(e)}
                        select={e=> test(e)}
                        events={[{title:'판매건수 : 23건', date:'2023-05-11',},{title:'판매건수 : 23건',date:'2023-05-13',}]} // ajax데이터를 가져오는 곳
                    />
                </div>
            </>
        );

}