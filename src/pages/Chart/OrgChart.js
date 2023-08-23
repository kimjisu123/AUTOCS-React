import React, { Component } from 'react';
import { render } from 'react-dom';
import OrganizationChart from '@dabeng/react-orgchart';
import './OrgChart.css'

function OrgChart() {

        const ds = {
            id: '1',
            name: '회장',
            title: '박지호',
            children: [
                { id: '2', name: '사장', title: '김마야', children: [
                        { id: 'd1', name: '인사부', title: '6명', children: [
                                {id: '3', name: '부장', title: '김지수', children: [
                                        {id: '4', name: '차장', title: '이기원', children: [
                                                {id: '5', name: '과장', title: '송정근', children: [
                                                        {id: '6', name: '대리', title: '김민수', children: [
                                                                {id: '7', name: '사원', title: '박민희'},
                                                                {id: '8', name: '사원', title: '박정호'},
                                                            ]}
                                                    ]}
                                            ]}
                                    ]}
                            ]},
                        {id: 'd2' , name: '재무/회계부', title: '6명'},
                        {id: 'd3', name: '경영부', title: '8명'},
                        {id: 'd4', name: '마케팅부', title: '7명'},
                        {id: 'd5', name: '영업부', title: '10명'},
                        {id: 'd6', name: '서비스부', title: '11명'},
                    ]},
            ],
        }

    return <OrganizationChart datasource={ds} />;
}

export default OrgChart;