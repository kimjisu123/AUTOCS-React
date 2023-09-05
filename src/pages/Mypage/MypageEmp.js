import MypageCSS from './MypageEmp.module.css';
import emp from './emp.jpg'
import {MdAccountCircle} from "react-icons/md";
import DatePicker from "react-datepicker";
import React, {useEffect, useState} from "react";
import { ko } from 'date-fns/esm/locale';
import Modal from "react-modal";
import UpdatePwApp from "./UpdatePwApp";
import {useDispatch, useSelector} from "react-redux";
import {callGetEmployeeAPI} from "../../apis/MemberAPICalls";
import {decodeJwt} from "../../util/tokenUtils";
import {callGetMemberTodoAPI} from "../../apis/TodoAPICalls";
import {callGetMemberInfoAPI} from "../../apis/MypageAPICalls";
import myPageReducer from "../../modules/MypageModule";
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
    // const employeeList = employees.data;
    const accessToken = window.localStorage.getItem('accessToken');
    // console.log("employeeList : " , employeeList);
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;
    const role = decodedToken ? decodedToken.auth : null;


    useEffect(() => {

        console.log("callGetMemberInfoAPI : {} " + callGetMemberInfoAPI(decodedToken.MemberNo))
        dispatch(callGetMemberInfoAPI(decodedToken.MemberNo));
        // console.log("employees : {} ", employees);

        if (employees.data && employees.data.name) {
            // 'name' 속성에 접근할 수 있습니다.
            console.log("employeeList.name {}" ,employees.data.name);
            // 이제 name을 사용할 수 있습니다.
        } else {
            // 객체나 'name' 속성이 없는 경우에 대한 처리를 여기에 추가합니다.
        }


    }, []);

    // 생일입력 (Date에 현재 값 가지고 와야함.
    const [birthDate,setBirthDate] =useState(new Date("1994/02/01"));
    //  모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);

    // 사진 파일 전달
    const [ selectedImage, setSelectedImage ] = useState(emp);
    // 사진 url 전달 함수 ========================================================
    const handleImageChange = (event) => {
        const image = event.target.files[0];
        if(image) {
            const imageUrl = URL.createObjectURL(image);
            setSelectedImage(imageUrl);
            console.log("imgURL {}" ,imageUrl);


        }
    };





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
                                                   accept='image/jpg,image/png,image/jpeg,image/gif'
                                                   onChange={handleImageChange}/><MdAccountCircle/>
                                            {selectedImage && (
                                                <img
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
                                    <form id="infoform" action="" method="post">
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
                                                    <label htmlFor="empNameEng">사원번호</label>
                                                    <input type="text" id="empNameEng" name="empNameEng" maxLength="20"
                                                           value={employees.data.employeeNo} style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empEmail">
                                                    <label htmlFor="empEmail">이메일</label>
                                                    <input type="email" id="empEmail" name="empEmail" maxLength="20"
                                                           value={employees.data.employeeEmail} style={{border: "none"}}/>
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
                                                           style={{border: "none"}}/>
                                                </div>
                                            </div>
                                            <div className={section2}>
                                                <div className="button">
                                                    <label htmlFor="changepw">비밀번호</label>
                                                    <button className={pwButton} type="button"
                                                            onClick={() => setModalIsOpen(true)}>비밀번호 변경
                                                    </button>
                                                </div>
                                                <div className=" empInfo empDep">
                                                    <label htmlFor="empDep">휴대 전화</label>
                                                    <input type="tel" id="empDep" name="empDep" maxLength="20"
                                                           value={employees.data.employeePhone} style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empDep">
                                                    <label htmlFor="empDep">내선 번호</label>
                                                    <input type="tel" id="empDep" name="empDep" maxLength="20"
                                                           value={employees.data.employeePhone} style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empDep">
                                                    <label htmlFor="empDep">생일</label>
                                                        <DatePicker
                                                            locale={ko}
                                                            dateFormat="yyyy년 MM월 dd일"
                                                            selected={birthDate}
                                                            onChange={date => setBirthDate(date)}
                                                        />
                                                </div>
                                                <div className=" empInfo empDep">
                                                    <label htmlFor="empDep">근무지</label>
                                                    <input type="text" id="empDep" name="empDep" maxLength="20"
                                                           value="서울 본사" style={{border: "none"}}/>
                                                </div>
                                                <div className=" empInfo empDep">
                                                    <label htmlFor="empDep">고용 형태</label>
                                                    <input type="text" id="empDep" name="empDep" maxLength="20"
                                                           value="정직원"
                                                           style={{border: "none"}}/>
                                                </div>
                                            </div>
                                        </div>
                                        {/*<fieldset id="adress" style={{border: "none"}}>*/}
                                        {/*<div className={empAddress}>*/}
                                        {/*    <div className="">*/}
                                        {/*        <div className={addressButton}>*/}
                                        {/*            <label htmlFor="postcode">주소</label>*/}
                                        {/*            <div>*/}
                                        {/*                <button className={adButton} type="button"*/}
                                        {/*                        onClick="sample6_execDaumPostcode()" value="우편번호 찾기">*/}
                                        {/*                <span><i*/}
                                        {/*                    className="fa-solid fa-magnifying-glass"></i>주소검색</span>*/}
                                        {/*                </button>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className={inputAddress}>*/}
                                        {/*            <div className="postCode">*/}
                                        {/*                <input type="text" name="zipcode" id="postcode"*/}
                                        {/*                       placeholder="우편번호"*/}
                                        {/*                       required style={{border: "none"}}/>*/}
                                        {/*            </div>*/}
                                        {/*            <div className={baseAddress}>*/}
                                        {/*                <input type="text" name="baseAddress" id="aseAddress"*/}
                                        {/*                       placeholder="기본주소" required style={{border: "none"}}/>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*        <div className={detailAddress}>*/}
                                        {/*            <input type="text" name="detailAddress" id="detailAddress"*/}
                                        {/*                   placeholder="상세주소" required style={{border: "none"}}/>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*</fieldset>*/}
                                        <div className={udButton}>
                                            <div>
                                                <button className={updateButton} type="submit"
                                                        onClick={() => {
                                                            const confirmResult = window.confirm('정말로 수정하시겠습니까?');
                                                            if (confirmResult) {
                                                                // 예 버튼이 클릭된 경우에 실행할 코드
                                                                // 예를 들어 회원정보 수정 함수 호출 등
                                                            } else {
                                                                // 아니오 버튼이 클릭된 경우에 실행할 코드
                                                            }
                                                        }}
                                                >
                                                    회원정보 수정
                                                </button>
                                            </div>
                                        </div>
                                    </form>
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