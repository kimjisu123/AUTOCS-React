import { NavLink } from 'react-router-dom';
import StockCSS from '../stock/Stock.module.css'
import {decodeJwt} from "../../util/tokenUtils";
import "./custom.css";

function BoardMenubar() {
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;
    /*
    < 직원 >
        공지사항(모두읽기 가능, 직급 나눠서 쓰기 가능)
        업무 규정 및 규칙(모두읽기 가능, 직급 나눠서 쓰기 가능). . . 직원 등록시 양식 같은거
        인사소식(모두읽기 가능, 직급 나눠서 쓰기 가능)
        부서별소식(모두읽기 가능, 직급 나눠서 쓰기 가능)
        (업무협업요청) --> 이건 쪽지로 해도 될 듯
        건의 및 의견(모두읽기 가능, 모두 쓰기 가능, 익명가능)
        자유게시판(모두읽기 가능, 모두 쓰기 가능, 익명가능)
        *** 영업점 공지사항과 영업점 건의 및 의견 확인하는 내용도 필요 ***
    < 영업점 >
        공지사항(읽기만 가능)-----------------------------> 직원 쪽에서 봐야함
        건의 및 의견(읽기 및 쓰기가능, 익명 가능)--------> 직원 쪽에서 봐야함
        자유게시판(읽기 및 쓰기가능, 익명 가능)
     */

    return(
        <div style={{ width: "295px", height: "959px", paddingTop: "30px" }}>
            {/* role이 STORE인 경우에만 직원 게시판 메뉴를 표시하지 않음 */}
            {role !== "STORE" && (
                <div>
                    <button className="writing-button">
                        <NavLink to="/board/writing">
                        글쓰기
                    </NavLink></button>
                    <div className={StockCSS.menuHeader}>직원 게시판</div>
                    <div className={StockCSS.menuContents}>
                        <NavLink to="/board/notieE" style={{ textDecoration: "none", color: "black" }}>
                            공지사항
                        </NavLink>
                    </div>
                    <div className={StockCSS.menuContents}>
                        <NavLink to="/board/rule" style={{ textDecoration: "none", color: "black" }}>
                            업무규정 및 규칙
                        </NavLink>
                    </div>
                    <div className={StockCSS.menuContents}>
                        <NavLink to="/board/news" style={{ textDecoration: "none", color: "black" }}>
                            인사소식
                        </NavLink>
                    </div>
                    <div className={StockCSS.menuContents}>
                        <NavLink to="/board/departmentNews" style={{ textDecoration: "none", color: "black" }}>
                            부서별소식
                        </NavLink>
                    </div>
                    <div className={StockCSS.menuContents}>
                        <NavLink to="/board/suggestionE" style={{ textDecoration: "none", color: "black" }}>
                            건의 및 의견
                        </NavLink>
                    </div>
                    <div className={StockCSS.menuContents}>
                        <NavLink to="/board/freeE" style={{ textDecoration: "none", color: "black" }}>
                            자유게시판
                        </NavLink>
                    </div>

                    {/*영업점 관리 게시판도 나중에 부서랑 직급별로 화면에 뜨는거 다르게 보이게 해야함..*/}
                    <div className={StockCSS.menuHeader}>영업점 관리 게시판</div>
                    <div className={StockCSS.menuContents}>
                        <NavLink to="/board/notieM" style={{ textDecoration: "none", color: "black" }}>
                            공지사항
                        </NavLink>
                    </div>
                    <div className={StockCSS.menuContents}>
                        <NavLink to="/board/suggestionM" style={{ textDecoration: "none", color: "black" }}>
                            건의 및 의견
                        </NavLink>
                    </div>
                </div>
            )}

            {role !== "EMPLOYEE" && (
                <div>
                    <button className="writing-button">
                        <NavLink to="/board/writing">
                            글쓰기
                        </NavLink></button>
            <div className={StockCSS.menuHeader}>게시판</div>
            <div className={StockCSS.menuContents}>
                <NavLink to="/board/notieM" style={{ textDecoration: "none", color: "black" }}>
                    공지사항
                </NavLink>
            </div>
            <div className={StockCSS.menuContents}>
                <NavLink to="/board/suggestionM" style={{ textDecoration: "none", color: "black" }}>
                    건의 및 의견
                </NavLink>
            </div>
            <div className={StockCSS.menuContents}>
                <NavLink to="/board/freeM" style={{ textDecoration: "none", color: "black" }}>
                    자유게시판
                </NavLink>
            </div>
                </div>)}
        </div>
)
}

export default BoardMenubar;