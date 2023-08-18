import StockCSS from './Stock.module.css'

function Standard() {

    const onClickRegistHadler= () => {
        alert('등록하시겠습니까?');
    }

    const onClickUseHadler= () => {
        alert('사용 등록하시겠습니까?');
    }

    const onClickUnuseHadler= () => {
        alert('미사용 등록하시겠습니까?');
    }

    return(
        <div>
            <div className={StockCSS.headLine}>규격 관리</div>
            <table>
                <tr>
                    <td>
                        규격명
                    </td>
                    <td>
                        <input type="text" placeholder="규격명을 입력하세요"/>
                    </td>
                    <td>
                        <button onClick={ onClickRegistHadler }>등록</button>
                    </td>
                </tr>
            </table>
            <div style={{marginTop: "5%"}}>
                <div className={StockCSS.middleLine}>
                    규격 목록
                    <div>
                        <button onClick={ onClickUseHadler }>사용</button>
                        <button onClick={ onClickUnuseHadler }>미사용</button>
                    </div>

                </div>

                <table>
                    <tr>
                        <th>NO</th>
                        <th>규격명</th>
                        <th>사용여부</th>
                        <th>상태변경</th>

                    </tr>
                    <tr>
                        <td>1</td>
                        <td>500ml</td>
                        <td>사용</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>100m</td>
                        <td>미사용</td>
                        <td><input type="checkbox"/></td>
                    </tr>
                </table>
            </div>
        </div>
    )
}

export default Standard;