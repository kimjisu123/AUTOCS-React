import {NavLink} from "react-router-dom";
import React from "react";
import UpdatePW from "./UpdatePwd/UpdatePW";

function MypageEmpMenubar(){

    return (
        <>
            <div className="menubar" style={{width: "295px",  height: "959px", paddingTop: "30px"}}>
                <div className="myPgateNavTitle" style={{marginLeft:"auto", marginRight:"auto",textAlign:"center"}}><h1>마이페이지</h1></div>
                <div className="documentForm">
                    사원 정보
                </div>
                <div className="purchase">사원정보 변경</div>
                <div className="purchase">비밀번호 변경
                    {/*<NavLink to=<UpdatePW /> className="upadatepw"/>*/}
                </div>
            </div>
        </>

    )
}
export default MypageEmpMenubar;