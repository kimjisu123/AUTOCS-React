import MypageCSS from './MypageEmp.module.css';
import {MdAccountCircle} from "react-icons/md";
import React, {useCallback, useEffect, useState} from "react";
import Modal from "react-modal";
import UpdatePwApp from "./UpdatePwApp";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {
    callChangeInfoAPI,
    callGetSToreInfoAPI, callPutSToreInfoAPI
} from "../../apis/MypageAPICalls";

import swal from "sweetalert";
import logo from "../compoments/LOGO.png";
import MypageEmpMenubar from "./components/MypageEmpMenubar";
import mainstyle from "../mainpage/MainContent.module.css";
import Spinner from "../mainpage/Spinner-1s-200px.gif";
import {NavLink} from "react-router-dom";



function MypageStore() {




    // 비구조화 할당 문법을 활용한 css내부 값 추출하기 이렇게 쓰면 MypageCSS.mainContatiner를 안써도된다. )
    const { mainContainer, rightContainer, content, wrap , empInfoTitle, infoTitle,empInfoImg
            ,imgButton , empDepDate ,infoInput, sections, section1,section2 ,pwButton
            ,empAddress,addressButton,adButton, inputAddress, baseAddress, detailAddress2
            ,udButton,updateButton,empImg,labelbox , ousSButton
    } = MypageCSS;


    // 회원정보 가지고 오기
    const dispatch = useDispatch();
    const employees = useSelector(state => state.myPageReducer);
    const accessToken = window.localStorage.getItem('accessToken');
    // console.log("employeeList : " , employeeList);
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;

    const [memberNo , setMemberNo] = useState(0);
    const [storeNo , setStoreNo] = useState(0);

    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(0);
    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [guide, setGuide] = useState('');

    // 사진 파일 전달
    const [ selectedImage, setSelectedImage ] = useState('');
    // 이메일 유효성 검사
    const [isEmail, setIsEmail] = useState(false);
    const [emailMessage, setEmailMessage] = useState('')

    // 폰 유효성 검사
    const [isPhone, setIsPhone] = useState(false);
    const [phoneMessage, setPhoneMessage] = useState('')

    useEffect(() => {
        function fetchData() {
            try {


                dispatch(callGetSToreInfoAPI(decodedToken.MemberNo));
                // const profileInfo = await dispatch(callGetPofileAPI(decodedToken.MemberNo));

                if (employees.data && employees.data.name) {
                    // 'name' 속성에 접근할 수 있습니다.
                    console.log("employeeList.name {}" ,employees.data.name);
                    setMemberNo(employees.data.memberNo);
                    setStoreNo(employees.data.storeNo);
                    console.log("employeeList.name {}" ,employees.data.memberNo);
                    console.log("employeeList.name {}" ,employees.data.storeNo);
                    // 이제 name을 사용할 수 있습니다.
                }


            } catch (error) {
                console.error('API 호출 오류:', error);
            }
        }


        const script = document.createElement('script');
        script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);

        fetchData();
    }, []);


    //  모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);




    const onChangeInfo = () => {
        try {

            const formData = new FormData();
            formData.append('phone', phone);
            formData.append('email', email);
            formData.append('address', address);
            formData.append('detailAddress',detailAddress);
            console.log("회원번호 {}" ,memberNo);
            console.log("전화 {}" ,phone);
            console.log("이메일 {}" ,email);
            console.log("baseAddress {}" ,address);
            console.log("detailAddress) {}" ,detailAddress);
            formData.append('memberNo', memberNo);
            formData.append('storeNo', storeNo)

            callPutSToreInfoAPI({ formData, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };



    // 휴대전화 유효성 검사 및 전달
    const handlePhoneChange = useCallback((e) => {
        const phoneExp = /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/
        const phoneCurrent = e.target.value
        setPhone(phoneCurrent);

        if (!phoneExp.test(phoneCurrent)) {
            setPhoneMessage('"000-0000-0000" 형식으로 입력해주세요.')
            setIsPhone(false)
        } else {
            setPhoneMessage('바른 형식으로 입력하셨습니다.')
            setIsPhone(true)
        }
    }, [])


    // 이메일 유효성 검사 및 전달
    const handleEmailChange= useCallback((e) => {
        const emailRegex =
            /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/
        const emailCurrent = e.target.value;
        setEmail(emailCurrent);

        if (!emailRegex.test(emailCurrent)) {
            setEmailMessage('이메일 형식이 틀렸습니다.')
            setIsEmail(false)
        } else {
            setEmailMessage('바른 형식으로 입력하셨습니다.')
            setIsEmail(true)
        }
    }, [])


    const [isInputEnabled, setInputEnabled] = useState(false);
    const toggleInput = () => {
        setInputEnabled(!isInputEnabled);
    };


    if (!employees) {
        return <div className={mainstyle.loading}>
            Loading...
            <img src={Spinner} alt="로딩중" width="5%" />
        </div>;
    }

    //주소 API
    const handlePostcodeSearch = () => {
        if (window.daum && window.daum.Postcode) {
            new window.daum.Postcode({
                oncomplete: (data) => {
                    const roadAddr = data.roadAddress;
                    const jibunAddr = data.jibunAddress;

                    const combinedAddress = `${roadAddr} ${jibunAddr}`;

                    setAddress(combinedAddress);
                    console.log("주소 값 확인하기 : {} ", address)
                    setPostcode(data.zonecode);
                    setDetailAddress('');

                    let guideText = '';
                    if (data.autoRoadAddress) {
                        const expRoadAddr = data.autoRoadAddress;
                        guideText = `(예상 도로명 주소: ${expRoadAddr})`;
                    } else if (data.autoJibunAddress) {
                        const expJibunAddr = data.autoJibunAddress;
                        guideText = `(예상 지번 주소: ${expJibunAddr})`;
                    } else {
                        guideText = '';
                    }

                    setGuide(guideText);
                },
            }).open();
        } else {
            console.error('Daum Postcode library is not loaded.');
        }
    };

    return (
            <>
                <div style={{display:"flex"}}>
                    <MypageEmpMenubar />
                    { employees.data && employees.data ? (
                        <div className={mainContainer} >
                            <div className={rightContainer}>
                                <div className={content}>
                                    <div className={wrap}>
                                        <div className={empInfoTitle}>
                                            <div className={infoTitle}>
                                                <h1>매장 정보</h1>
                                            </div>
                                            <div>

                                                {/* 회원 사진  */}
                                                <div className={empImg}>
                                                    {/*<input*/}
                                                    {/*       style={{top:"40%"}}*/}
                                                    {/*       type="file"*/}
                                                    {/*       id="file"*/}
                                                    {/*       name="file"*/}
                                                    {/*       accept='image/jpg,image/png,image/jpeg,image/gif'*/}
                                                    {/*       onChange={handleImageChange}/><MdAccountCircle/>*/}
                                                    {selectedImage? (
                                                        <img
                                                            id="file"
                                                            name="file"
                                                            className={empInfoImg}
                                                            src={ selectedImage }
                                                            alt="Selected"
                                                        />):(<img
                                                        id="file"
                                                        name="file"
                                                        className={empInfoImg}
                                                        src={ logo }
                                                        alt="Selected"
                                                    />)}
                                                </div>
                                            </div>
                                            {/*<br/>*/}
                                            {/*<small*/}
                                            {/*    style={{color: "white", textAlign: "center"}}>가로200 세로 200<br/>이미지를 넣어주세요</small>*/}
                                            {/*<div className={empDepDate}>*/}
                                            {/*    <br/>*/}
                                            {/*    <br/>*/}
                                            {/*    <h3>사업자등록번호</h3>*/}
                                            {/*    <br/>*/}
                                            {/*    <h1 >{employees.data.license}</h1>*/}
                                            {/*</div>*/}
                                            <div className={ousSButton}>
                                                <NavLink to="outS"><button>계정 비활성화</button></NavLink>
                                            </div>
                                        </div>
                                        <div className={infoInput}>
                                            {/*<form id="infoform" action="" method="post" onClick={ () => onChangeInfo(employees.data) }>*/}
                                                <div className={sections}>
                                                    <div className={section1}>
                                                        <div className="empId">
                                                                <label htmlFor="empId">아이디</label>
                                                            <input type="text" id="empId" name="empId" maxLength="20"
                                                                   value={employees.data.id}
                                                                   readOnly style={{border: "none"}}/>
                                                        </div>
                                                        <div className=" empInfo empName kor">
                                                            <label htmlFor="empNameKor">대표자명</label>
                                                            <input type="text" id="empNameKor" name="empNameKor" maxLength="20"
                                                                   value={employees.data.name} readOnly style={{border: "none"}}/>
                                                        </div>
                                                        <div className=" empInfo empName Eng">
                                                            <label htmlFor="memberNo">매장번호</label>
                                                            <input type="text" id="memberNo" name="memberNo" maxLength="20"
                                                                   readOnly value={employees.data.storeNo} style={{border: "none"}}/>
                                                        </div>
                                                        <div className=" empInfo empEmail">
                                                            <label htmlFor="empEmail">이메일</label>
                                                            <input type="email" id="empEmail" name="empEmail" maxLength="20"
                                                                   onChange={handleEmailChange} placeholder={employees.data.email} style={{border: "none"}}/>
                                                            {email.length > 0 && <p className={`message ${isEmail ? 'success' : 'error'}`}style={isEmail? {fontSize:"0.7em",color:"green",fontWeight:"500" ,marginTop:"5px"} : {fontSize:"0.7em",color:"red",fontWeight:"500",marginTop:"5px"}}>{emailMessage}</p>}
                                                        </div>
                                                    </div>
                                                    <div className={section2}>
                                                        <div className="button">
                                                            <label htmlFor="changepw">비밀번호</label>
                                                            <button className={pwButton} type="button"
                                                                    onClick={() => setModalIsOpen(true)}>비밀번호 변경
                                                            </button>
                                                        </div>
                                                        <div className=" empInfo empPhone">
                                                            <label htmlFor="empPhone">휴대 전화</label>
                                                            <input type="tel" id="empPhone" name="phone" maxLength="20"
                                                                   onChange={handlePhoneChange} placeholder={employees.data.phone} style={{border: "none"}}/>
                                                            {phone.length > 0 && <p className={`message ${isPhone ? 'success' : 'error'}`}style={isPhone? {fontSize:"0.7em",color:"green",fontWeight:"500", marginTop:"5px"} : {fontSize:"0.7em",color:"red",fontWeight:"500",marginTop:"5px"}}>{phoneMessage}</p>}
                                                        </div>
                                                        <div className=" empInfo empnum">
                                                            <label htmlFor="empnum">매장 전화</label>
                                                            <input type="tel" id="empnum" name="empnum" maxLength="20"
                                                                   readOnly value="02-123-1234" style={{border: "none"}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={empAddress}>
                                                    <div className="">
                                                        <div className={addressButton}>
                                                            <label htmlFor="postcode">주소</label>
                                                            <div>
                                                                <button className={adButton} type="button"
                                                                        style={{marginLeft:"132px"}}
                                                                        onClick={handlePostcodeSearch} value="우편번호 찾기">
                                                                    <span><i
                                                                        className="fa-solid fa-magnifying-glass"></i>주소검색</span>
                                                                </button>
                                                            </div>
                                                        </div>
                                                        <div className={inputAddress}>
                                                            <div className={baseAddress}>
                                                                <input className="lo" type="text" name="baseAddress" id="aseAddress" placeholder={employees.data.address}
                                                                        value={address} style={{border: "none"}}/>
                                                            </div>
                                                        </div>
                                                        <div className={detailAddress2}>
                                                            <input className="lo" type="text" name="detailAddress" id="sample4_detailAddress"
                                                                   onChange={(e) => setDetailAddress(e.target.value)}
                                                                   placeholder={employees.data.detailAddress} required style={{border: "none",marginTop:"-20px", marginLeft:"-10px"}}/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className={udButton}>
                                                    <div>
                                                        <button className={updateButton} type="button"
                                                                onClick={() => {
                                                                    // 필요한 입력 필드의 값을 확인
                                                                    // if (!phone || !email || !baseAddress || !detailAddress) {
                                                                    //     swal("필수 정보를 입력하세요.");
                                                                    //     return; // 필수 정보가 누락된 경우 함수를 중단
                                                                    // }
                                                                    onChangeInfo(); // 필수 정보가 모두 입력된 경우에만 변경 요청 보내기
                                                                }}
                                                        >
                                                            회원정보 수정
                                                        </button>
                                                    </div>
                                                </div>
                                            {/*</form>*/}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ):<div className={mainstyle.loading}>
                        Loading...
                        <img src={Spinner} alt="로딩중" width="5%" />
                    </div> }
                        {/*비밀번호 변경 모달창 띄우기 */}
                        {modalIsOpen && (
                            <Modal
                                isOpen={modalIsOpen}
                                onRequestClose={() => setModalIsOpen(false)}
                                className={`customModalStyle ${modalIsOpen ? 'isOpen' : ''}`}
                                overlayClassName="ReactModal__Overlay"
                            >
                                <UpdatePwApp memberNo={memberNo}/>
                            </Modal>
                        )}
                </div>
            </>
        )
}
export default MypageStore;