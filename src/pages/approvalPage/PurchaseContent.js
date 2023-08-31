import styles from './approval.module.css';
import { useState, useEffect,useRef } from 'react';
import NewApproval from './NewApproval';
import Swal from 'sweetalert2';
import Modal from './Modal'
import { useSelector, useDispatch } from 'react-redux';
import {
    callGetAppLineAPI
} from '../../apis/ApprovalAPICalls';
import { FileUpload } from 'primereact/fileupload';
import './input.css'
import { usePurchaseContext } from './appContext/PurchaseContext';
import { decodeJwt } from '../../util/tokenUtils';
import AppLine from './AppLine';




function PurchaseContent() {

    // 로그인 사용자 가져올 토큰
    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;


    // 추가 버튼 눌렀을 때 열 추가
    const onClickAddHandler = () => {

        if(input.productName && input.productSize && input.price && input.amount) {

            setValues([...values, input]);

            console.log(values)

            setInput({
                productName: '',
                productSize: '',
                amount: 0,
                price: 0,
                note: ''
            })

            let inputRow = document.getElementsByClassName(styles.inputRow)[0];
            let table2 = document.getElementsByClassName(styles.table2)[0].children[0];
            let clone = inputRow.cloneNode(true);
            for(let i = 0; i <= 5; i++) {
                if(i !== 4) {
                    clone.children[i].children[0].value = '';

                } else if(i === 4) {
                    clone.children[i].text = ''
                    console.log(clone.children[i].text)

                }
                clone.addEventListener('change', (e) => onChangeInputHandler(e));
            }
            table2.append(clone);
        } else {
            Swal.fire({
                icon: 'error',
                title: '입력값 부족',
                text: '입력란을 모두 작성해주세요',
            })
        }


    }


    // 삭제 버튼 눌렀을 때 열 삭제
    const onClickDelHandler = () => {
        let table2 = document.getElementsByClassName(styles.table2)[0].children[0];
        console.log(table2.lastElementChild);
        if(table2.childElementCount === 2) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: '더 이상 삭제하실 수 없어요',
            })
        } else {
            table2.lastElementChild.remove();
        }
    }

    // 오늘 날짜
    const now = new Date();
    let year = now.getFullYear();
    let month = now.getMonth() + 1 < 10 ? "0"+(now.getMonth() + 1) : now.getMonth();
    let date = now.getDate();
    let today = year + "-" + month + "-" + date;

    const {data, setData} = usePurchaseContext();

    const dispatch = useDispatch();

    const [input, setInput] = useState({
        productName: '',
        productSize: '',
        amount: 0,
        price: 0,
        note: ''
    });


    // input에 들어가는 값 data에 넣어주기

    const [values, setValues] = useState([]);
    const totalPrice = useRef();
    const onChangeInputHandler = (e) => {
        console.log(e.target);
        setInput({...input, [e.target.name] : e.target.value});

    }


    useEffect(
        () => {
            dispatch(callGetAppLineAPI());
        },
        []
    )

    const list = useSelector(state => state.approvalReducer);

    const [addPeople, setAddPeople] = useState(false);

    const [file, setFile] = useState(null);
    const [fileName, setFileName] = useState([]);

    const onClickSendHandler = () => {
        console.log(data);
    }

    const showPeople = () => {
        setAddPeople(true);
    }

    return (
        <div className={styles.content}>
            <div className={styles.modify} onClick={showPeople}>
                결재선 추가
            </div>
            <div className={styles.area1}>구 매 요 청</div>
            <br/><br/>
            <div className={styles.area2}>
                <div className={styles.area3}>
                    <table className={styles.table3}>
                        <tbody>
                        <tr>
                            <td className={styles.td2}>작 성 자</td>
                            <td className={styles.td1}>{decodedToken.Name}</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>소 속 부 서</td>
                            <td className={styles.td1}>{decodedToken.Department}</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>작 성 날 짜</td>
                            <td className={styles.td1}>{today}</td>
                        </tr>
                        <tr>
                            <td className={styles.td2}>문 서 번 호</td>
                            <td className={styles.td1}></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div style={{display: "flex"}}>
                    <div className={styles.approve}>
                        <span className={styles.area4}>요청</span>
                        <span className={styles.area5} style={{marginRight: 20}}>
                            <div className={styles.area6}>{decodedToken.Position}</div>
                            <div className={styles.area7}>{decodedToken.Name}</div>
                            <div className={styles.area8}></div>
                        </span>
                        <span className={styles.area4}>승인</span>
                        <AppLine data={data}/>
                    </div>
                </div>
            </div>
            <br/><br/>
            <div className={styles.docTitle}>
                <div className={styles.area9}>제목</div>
                <input type="text" name="docTitle" id={styles.docTitle}/>
            </div>
            <br/><br/>
            <div className={styles.addDelBtn}>
                <div className={styles.add} onClick={ onClickAddHandler }>추가</div>
                <div className={styles.delete} onClick={ onClickDelHandler }>삭제</div>
            </div>
            <div className={styles.area10}>
                <table className={styles.table2}>
                    <tbody>
                        <tr className={styles.tr}>
                            <td className={styles.productName}>품명</td>
                            <td className={styles.productSize}>규격</td>
                            <td className={styles.amount}>수량</td>
                            <td className={styles.price}>단가</td>
                            <td className={styles.totalPrice}>금액</td>
                            <td className={styles.note}>비고</td>
                        </tr>
                        <tr className={styles.inputRow}>
                            <td className={styles.td3}><input type="text" name="productName" onChange={(e) => onChangeInputHandler(e)}/></td>
                            <td className={styles.td3}><input type="text" name="productSize" onChange={(e) => onChangeInputHandler(e)}/></td>
                            <td className={styles.td3}><input type="number" name="amount" onChange={(e) => onChangeInputHandler(e)}/></td>
                            <td className={styles.td3}><input type="number" name="price" onChange={(e) => onChangeInputHandler(e)}/></td>
                            <td className={styles.td3}>{input.price * input.amount}원</td>
                            <td className={styles.td3}><input type="text" name="note" onChange={(e) => onChangeInputHandler(e)}/></td>
                        </tr>
                    </tbody>
                </table>
                <div className={styles.area11}>
                    <div className={styles.area12}>합계</div>
                    <div className={styles.allPrice}>1,000,000</div>
                </div>
            </div>
            <br/><br/><br/>
            <div className={styles.file}>
                <div style={{width: "100%", textAlign:"center", margin:"20px 0px"}}>
                    <FileUpload name="demo[]" url={'/api/upload'} multiple emptyTemplate={<p className="m-0">파일을 첨부하세요</p>} />
                </div>
            </div>
            { addPeople && <Modal setAddPeople={setAddPeople}/>}
            <br/><br/><br/>
            <div style={{display:"flex", justifyContent:"right", marginRight:"40px"}}>
                <div className={styles.sendApp} onClick={onClickSendHandler}>결재요청</div>
            </div>
        </div>
    )
}

export default PurchaseContent;
