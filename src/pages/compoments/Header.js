import './Header.css'
import img from './LOGO.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="headerWrapper">
            <div className="topNav">
                <Link to="/"><div className="gohome">
                    <div className="logo">
                        <img src={ img } style={{ width: "40px", marginTop: "2px"}}/>
                    </div>
                    <div className="officName">
                        AUTOCSS
                    </div>
                </div></Link>
                <div style={{display: "flex", justifyContent: "space-between", width: "100%", paddingRight: "10px"}}>
                    <Link to="/"><div className="home">
                        홈
                    </div></Link>
                    <Link to="/dashborad"><div className="dashboard">
                        게시판
                    </div></Link>
                    <Link to="chart"><div className="chart">
                        조직도
                    </div></Link>
                    <Link to="approval"><div className="approval">
                        전자결재
                    </div></Link>
                    <Link to="calendar"><div className="calendar">
                        캘린더
                    </div></Link>
                    <Link to="management"><div className="management">
                        근태관리
                    </div></Link>
                    <Link to="todo"><div className="todo">
                        +Todo
                    </div></Link>
                    <Link to="stock"><div className="stock">
                        재고관리
                    </div></Link>
                    <Link to="myPage"><div className="profile">
                        <div className="profileImg">

                        </div>
                        마이페이지
                    </div></Link>
                </div>
            </div>
            <div className="menubar">

            </div>

        </div>


)
}

export default Header;