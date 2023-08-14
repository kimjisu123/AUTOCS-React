

function Main() {
    return (
        <div>
            <div className="container">
                <div className="headerContainer">
                    <div className="logo">
                        {/* <img src="../img/logo-black.png" alt=""> */}
                            <div className="hor">
                                <div className="horizon"></div>
                            </div>
                    </div>
                    <div className="nav">
                        <div className="logout">
                            <div id="logout" onClick="location.href='#'">
                                로그아웃
                            </div>
                        </div>
                        <div className="menubar">
                            <div className="menu" onClick="location.href='#'">마이페이지</div>
                            <div className="menu" onClick="location.href='#'">근태관리</div>
                            <div className="menu" onClick="location.href='#'">전자결재</div>
                            <div className="menu" onClick="location.href='#'">일정</div>
                            <div className="menu" onClick="location.href='#'">게시판</div>
                            <div className="menu" onClick="location.href='#'">재고관리</div>
                        </div>
                    </div>
                </div>
                <div className="mainContainer">
                    <div className="leftContainer">
                        <div className="paddingContainer">
                            <div className="profile"></div>
                            <div className="name">홍길동 사원님</div>
                            <div className="dept">영업 1부</div>
                            <div className="workHours">
                                <div className="work">근태관리</div>
                                <div className="date">2023-08-08</div>
                                <div className="hour">8H 17M</div>
                            </div>
                            <div className="workBtn">
                                <div className="attendence">출근하기</div>
                                <div className="leaveWork">퇴근하기</div>
                            </div>
                            <div className="memo"></div>
                        </div>
                    </div>
                    <div className="rightContainer">
                        <div className="content"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Main;