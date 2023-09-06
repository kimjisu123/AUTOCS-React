import MypageCSS from './MypageEmp.module.css';
import emp from './emp.jpg'
import {MdAccountCircle} from "react-icons/md";
import React, {useCallback, useEffect, useState} from "react";
import Modal from "react-modal";
import UpdatePwApp from "./UpdatePwApp";
import {useDispatch, useSelector} from "react-redux";
import {decodeJwt} from "../../util/tokenUtils";
import {callChangeInfoAPI, callGetMemberInfoAPI, callGetPofileAPI} from "../../apis/MypageAPICalls";
import {format} from "date-fns";




function MypageEmp() {




    // 비구조화 할당 문법을 활용한 css내부 값 추출하기 이렇게 쓰면 MypageCSS.mainContatiner를 안써도된다. )
    const { mainContainer, rightContainer, content, wrap , empInfoTitle, infoTitle,empInfoImg
            ,imgButton , empDepDate ,infoInput, sections, section1,section2 ,pwButton
            ,empAddress,addressButton,adButton, inputAddress, baseAddress, detailAddress
            ,udButton,updateButton,empImg,labelbox ,
    } = MypageCSS;


    // 회원정보 가지고 오기
    const dispatch = useDispatch();
    const employees = useSelector(state => state.myPageReducer);
    const accessToken = window.localStorage.getItem('accessToken');
    // console.log("employeeList : " , employeeList);
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;

    const [memberNo , setMemberNo] = useState(0);
    const [image, setImage] = useState(null);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');


    useEffect(() => {

        async function fetchData() {
            try {

                console.log("callGetMemberInfoAPI : {} " + callGetMemberInfoAPI(decodedToken.MemberNo))
                const memeberInfo = await dispatch(callGetMemberInfoAPI(decodedToken.MemberNo));
                // const profileInfo = await dispatch(callGetPofileAPI(decodedToken.MemberNo));

                if (employees.data && employees.data.name) {
                    // 'name' 속성에 접근할 수 있습니다.
                    console.log("employeeList.name {}" ,employees.data.name);
                    setMemberNo(employees.data.memberNo);
                    console.log("employeeList.name {}" ,memberNo);
                    // 이제 name을 사용할 수 있습니다.
                }


            } catch (error) {
                console.error('API 호출 오류:', error);
            }
        }
        fetchData();
    }, []);

    // 생일입력 (Date에 현재 값 가지고 와야함.
    const [birthDate,setBirthDate] =useState(new Date("1994/02/01"));
    //  모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // 사진 파일 전달
    const [ selectedImage, setSelectedImage ] = useState(emp);


    const onChangeInfo = () => {
        try {

            const formData = new FormData();
            formData.append('employeePhone', phone);
            formData.append('employeeEmail', email);
            console.log("회원번호 {}" ,memberNo);
            console.log("전화 {}" ,phone);
            console.log("이메일 {}" ,email);
            formData.append('memberNo', memberNo);

            if(image){
                formData.append("fileImage", image);
            }

            callChangeInfoAPI({ formData, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };


    // 사진 url 전달 함수 ========================================================
    const handleImageChange = (event) => {
        const image = event.target.files[0];
        setImage(image);
        console.log('image :', image);
        if(image) {
            const imageUrl = URL.createObjectURL(image);
            setSelectedImage(imageUrl);
            console.log("imgURL {}" ,imageUrl);


        }

    };
    const handlePhoneChange = (e) => {
        if(e !== ''){
            setPhone(e.target.value);
            console.log("phone",e.target.value);
        }

    }
    const handleEmailChange= (e) => {
        if(e !== ''){
        setEmail(e.target.value);
        console.log("email",e.target.value);
        }
    }

    return (
            <>
            { employees.data && employees.data ? (
                <div className={mainContainer} >
                    <div className={rightContainer}>
                        <div className={content}>
                            <div className={wrap}>
                                <div className={empInfoTitle}>
                                    <div className={infoTitle}>
                                        <h1>사원 정보</h1>
                                    </div>
                                    <div>

                                        {/* 회원 사진  */}
                                        <div className={empImg}>
                                            <input type="file"
                                                   id="file"
                                                   name="file"
                                                   accept='image/jpg,image/png,image/jpeg,image/gif'
                                                   onChange={handleImageChange}/><MdAccountCircle/>
                                            {selectedImage && (
                                                <img
                                                    id="file"
                                                    name="file"
                                                    // src={ emp }
                                                    className={empInfoImg}
                                                    src={ selectedImage }
                                                    alt="Selected"
                                                />)}
                                        </div>
                                    </div>
                                    {/*<br/>*/}
                                    <small
                                        style={{color: "white", textAlign: "center"}}>가로200 세로 200<br/>이미지를 넣어주세요</small>
                                    <div className={empDepDate}>
                                        <br/>
                                        <br/>
                                        <h3>입사일</h3>
                                        <br/>
                                        <h1 >{format(new Date(employees.data.employeeJoin), 'yyyy/MM/dd')}</h1>
                                    </div>
                                </div>
                                <div className={infoInput}>
                                    {/*<form id="infoform" action="" method="post" onClick={ () => onChangeInfo(employees.data) }>*/}
                                        <div className={sections}>
                                            <div className={section1}>
                                                <div className="empId">
                                                        <label htmlFor="empId">아이디</label>
                                                    <input type="text" id="empId" name="empId" maxLength="20"
                                                           value={employees.data.memberId}
                                                           readOnly style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empName kor">
                                                    <label htmlFor="empNameKor">이름</label>
                                                    <input type="text" id="empNameKor" name="empNameKor" maxLength="20"
                                                           value={employees.data.name} readOnly style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empName Eng">
                                                    <label htmlFor="memberNo">사원번호</label>
                                                    <input type="text" id="memberNo" name="memberNo" maxLength="20"
                                                           value={memberNo} style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empEmail">
                                                    <label htmlFor="empEmail">이메일</label>
                                                    <input type="email" id="empEmail" name="empEmail" maxLength="20"
                                                           onChange={handleEmailChange} value={employees.data.employeeEmail} style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empDuty">
                                                    <label htmlFor="empDuty">직책</label>
                                                    <input type="text" id="empDuty" name="empDuty" maxLength="20"
                                                           value={employees.data.position}
                                                           style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empDep">
                                                    <label htmlFor="empDep">부서명</label>
                                                    <input type="text" id="empDep" name="empDep" maxLength="20"
                                                           value={employees.data.department}
                                                           style={{border: "none"}} readOnly/>

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
                                                    <input type="tel" id="empPhone" name="empPhone" maxLength="20"
                                                           onChange={handlePhoneChange} value={employees.data.employeePhone} style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empnum">
                                                    <label htmlFor="empnum">내선 번호</label>
                                                    <input type="tel" id="empnum" name="empnum" maxLength="20"
                                                           value="112~1" style={{border: "none"}}/>
                                                </div>
                                                {/*<div className=" empInfo empDep">*/}
                                                {/*    <label htmlFor="empDep">생일</label>*/}
                                                {/*        <DatePicker*/}
                                                {/*            locale={ko}*/}
                                                {/*            dateFormat="yyyy년 MM월 dd일"*/}
                                                {/*            selected={birthDate}*/}
                                                {/*            onChange={date => setBirthDate(date)}*/}
                                                {/*        />*/}
                                                {/*</div>*/}
                                                <div className=" empInfo empwhere">
                                                    <label htmlFor="empwhere">근무지</label>
                                                    <input type="text" id="empwhere" name="empwhere" maxLength="20"
                                                           value="서울 본사" style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empstate">
                                                    <label htmlFor="empstate">고용 형태</label>
                                                    <input type="text" id="empstate" name="empstate" maxLength="20"
                                                           value="정직원"
                                                           style={{border: "none"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        <div className={udButton}>
                                            <div>
                                                <button className={updateButton} type="button"
                                                        onClick={onChangeInfo}
                                                        // onClick={() => {
                                                        //     const confirmResult = window.confirm('정말로 수정하시겠습니까?');
                                                        //     if (confirmResult) {
                                                        //         {changeInfo}
                                                        //     } else {
                                                        //         // 아니오 버튼이 클릭된 경우에 실행할 코드
                                                        //     }
                                                        // }}
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
            ):(<h1>값이 없습니다.</h1>) }
                {/*비밀번호 변경 모달창 띄우기 */}
                {modalIsOpen && (
                    <Modal
                        isOpen={modalIsOpen}
                        onRequestClose={() => setModalIsOpen(false)}
                        className={`customModalStyle ${modalIsOpen ? 'isOpen' : ''}`}
                    >
                        <UpdatePwApp/>
                    </Modal>
                )}

            </>
        )
}
export default MypageEmp;