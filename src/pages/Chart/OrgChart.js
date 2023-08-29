import React, { Component } from 'react';
import { render } from 'react-dom';
import OrganizationChart from '@dabeng/react-orgchart';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from 'react-redux';
import './OrgChart.css'

import {
    callGetChartAPI
} from '../../apis/ChartAPICalls'

function OrgChart() {

    const dispatch = useDispatch();

    // const chart = useSelector(state => state.chartReducer)
    //
    useEffect(
        () => {
            dispatch(callGetChartAPI())
        },
        []
    )

    const chart = useSelector(state => state.chartReducer);

    console.log(chart)

    return <OrganizationChart datasource={chart} />;
}

export default OrgChart;