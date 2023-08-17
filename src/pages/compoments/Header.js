import './Header.css'
import img from './logo-black1.png'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


const Header = () => {

    const activestyle = {

        backgroundColor: '#8d8a6d'
    }


    return (
        <div className="headerWrapper">
            <div className="topNav">
                <NavLink to="/"><div className="gohome">
                    <div className="logo">
                        <img src={ img } style={{ width: "40px", marginTop: "2px"}}/>
                    </div>
                    <div className="officName">
                        AUTOCSS
                    </div>
                </div></NavLink>
                <div style={{display: "flex", justifyContent: "space-between", width: "100%", paddingRight: "10px"}}>
                    <NavLink to="/" style={({isActive}) => isActive? activestyle:undefined} className="home">
                        홈
                    </NavLink>
                    <NavLink to="/dashborad" style={({isActive}) => isActive? activestyle:undefined} className="dashboard">
                        게시판
                    </NavLink>
                    <NavLink to="chart" style={({isActive}) => isActive? activestyle:undefined} className="chart">
                        조직도
                    </NavLink>
                    <NavLink to="approval" style={({isActive}) => isActive? activestyle:undefined} className="approval">
                        전자결재
                    </NavLink>
                    <NavLink to="calendar" style={({isActive}) => isActive? activestyle:undefined} className="calendar">
                        캘린더
                    </NavLink>
                    <NavLink to="management" style={({isActive}) => isActive? activestyle:undefined} className="management">
                        근태관리
                    </NavLink>
                    <NavLink to="todo" style={({isActive}) => isActive? activestyle:undefined} className="todo">
                        +Todo
                    </NavLink>
                    <NavLink to="stock" style={({isActive}) => isActive? activestyle:undefined} className="stock">
                        재고관리
                    </NavLink>
                    <NavLink to="myPage" style={({isActive}) => isActive? activestyle:undefined} className="profile">
                        <div className="profileImg">

                        </div>
                        마이페이지
                    </NavLink>
                </div>
            </div>
        </div>


    )
}

export default Header;