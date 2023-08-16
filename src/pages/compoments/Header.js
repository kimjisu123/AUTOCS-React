import './Header.css'
import img from './LOGO.png'

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="topNav">
                <div className="gohome">
                    <div className="logo">
                        <img src={ img } style={{ width: "40px", marginTop: "2px"}}/>
                    </div>
                    <div className="officName">
                        AUTOCSS
                    </div>
                </div>
                <div style={{display: "flex", justifyContent: "space-between", width: "100%", paddingRight: "10px"}}>
                    <div className="home">
                        홈
                    </div>
                    <div className="dashboard">
                        게시판
                    </div>
                    <div className="chart">
                        조직도
                    </div>
                    <div className="approval">
                        전자결재
                    </div>
                    <div className="calendar">
                        캘린더
                    </div>
                    <div className="management">
                        근태관리
                    </div>
                    <div className="todo">
                        +Todo
                    </div>
                    <div className="stock">
                        재고관리
                    </div>
                    <div className="profile">
                        <div className="profileImg">

                        </div>
                        마이페이지
                    </div>
                </div>
            </div>
            <div className="menubar">

            </div>

        </div>


)
}

export default Header;