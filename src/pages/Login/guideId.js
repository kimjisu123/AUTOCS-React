import React from 'react';
import { useSelector } from 'react-redux';
import img from './loginMain.png';
import './guideId.css';
import { Link, Navigate } from 'react-router-dom';

const GuideId = () => {
    const findIdData = useSelector(state => state.memberReducer.data);

    if (!findIdData) {
        return <div>Loading...</div>;
    }
    //console.log("findIdData>>>>>>>>>>" + findIdData)
    const test = JSON.parse(JSON.stringify(findIdData.member));
    //console.log("멤버2>>>>>>>>>>" , JSON.parse(test).id);
    const userId = JSON.parse(test).id;



    // 로그인 상태일 시 페이지로 접근 방지
    const token = localStorage.getItem('accessToken');
    if (token) {
        return <Navigate to="/main" replace />;
    }

    return (
        <div style={{ backgroundColor: '#1C2C10' }}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: '145px', height: '200px', marginTop: '-150px', marginBottom: '-35px' }} />

                    <h1 style={{ color: '#1C2C10' }}>{findIdData != undefined ? findIdData.name : ''}님의 아이디는</h1>
                    <div className="separator" style={{ width: '60%' }}></div>

                    <h3 style={{ marginBottom: '10px', marginTop: '10px', background: 'white' }}>
                        아이디 안내
                    </h3>
                    <p>찾은 아이디: {findIdData != undefined ? userId : ''}</p>

                    <Link to="/login" type="button" className="ok">
                        로그인하러 가기
                    </Link>
                </main>
            </div>
        </div>
    );
};

export default GuideId;