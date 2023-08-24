import { NavLink } from 'react-router-dom';
import StockCSS from './Stock.module.css'

function showPopup() { window.open('/ListPopup', "a", "width=400, height=600, left=100, top=50"); }

function MyOrderList() {

    return (
        <div>
            <div className={StockCSS.headLine}>신청내역관리</div>
            <div className={StockCSS.contentsHeader}>
                <div className={StockCSS.datebox}>
                    <div>조회기간</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                    <div>~</div>
                    <input className={StockCSS.dateSelectbox} type="date"/>
                </div>

                <div className={StockCSS.contentsHeader}>
                    <div>종로점</div>
                </div>
            </div>

            <div style={{marginTop: "1%"}}>
                <table className={StockCSS.stockTable}>
                    <tr>
                        <th>NO</th>
                        <th>거래번호</th>
                        <th>발주일</th>
                        <th>발주상태</th>
                        <th>세금계산서발행</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td><NavLink to="/main/stock/myorderlist/detail">20201234</NavLink></td>
                        <td>2023-08-01</td>
                        <td>진행중</td>
                        <td><button>발행</button></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td><NavLink to="/main/stock/myorderlist/detail">20201234</NavLink></td>
                        <td>2023-08-01</td>
                        <td>완료</td>
                        <td><button>발행</button></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default MyOrderList;
