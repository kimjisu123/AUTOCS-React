import MypageCSS from './MypageEmp.module.css';
import emp from './emp.jpg'
import {MdAccountCircle} from "react-icons/md";
import DatePicker from "react-datepicker";
import React, {useState} from "react";
import { ko } from 'date-fns/esm/locale';
import Modal from "react-modal";
import UpdatePwApp from "./UpdatePwApp";
import UpdatePW from "./UpdatePW";


function MypageEmp() {

    // 비구조화 할당 문법을 활용한 css내부 값 추출하기 이렇게 쓰면 MypageCSS.mainContatiner를 안써도된다. )
    const { mainContainer, rightContainer, content, wrap , empInfoTitle, infoTitle,empInfoImg
            ,imgButton , empDepDate ,infoInput, sections, section1,section2 ,pwButton
            ,empAddress,addressButton,adButton, inputAddress, baseAddress, detailAddress
            ,udButton,updateButton,empImg
    } = MypageCSS;

    // 생일입력 (Date에 현재 값 가지고 와야함.
    const [birthDate,setBirthDate] =useState(new Date("1994/02/01"));

    // TodoList 모달 값
    const [modalIsOpen, setModalIsOpen] = useState(false);

    return (
        <>
            <div className={ mainContainer }>
                <div className={rightContainer}>
                    <div className={content}>
                        <div className={wrap}>
                            <div className={empInfoTitle}>
                                <div className={infoTitle}>
                                    <h1>사원 정보</h1>
                                </div>
                                <div>
                                    <img src={ emp } alt="" className={empInfoImg}/>
                                    {/*<MdAccountCircle className={ empImg }><button className={imgButton} type="submit"/></MdAccountCircle>*/}
                                    <div className={ empImg }>
                                        <input type="file"/><MdAccountCircle/>
                                    </div>
                                </div>
                                <br/>
                                    <span style={{color: "white", textAlign:"center"}}>가로200 세로 200<br/>이미지를 넣어주세요</span>
                                    <div className={empDepDate}>
                                        <h3>입사일</h3>
                                        <h1>23.01.01</h1>
                                    </div>
                            </div>
                            <div className={infoInput}>
                                <form id="infoform" action="" method="post">
                                    <div className={sections}>
                                        <div className={section1}>
                                            <div className="empId">
                                                <label htmlFor="empId">사원ID</label>
                                                <input type="text" id="empId" name="empId" maxLength="20" value="emp01"
                                                       readOnly style={{border: "none"}}/>
                                            </div>
                                            <div className=" empInfo empName kor">
                                                <label htmlFor="empNameKor">이름(한글)</label>
                                                <input type="text" id="empNameKor" name="empNameKor" maxLength="20"
                                                       value="김사원" readOnly style={{border: "none"}}/>
                                            </div>
                                            <div className=" empInfo empName Eng">
                                                <label htmlFor="empNameEng">이름(영문)</label>
                                                <input type="text" id="empNameEng" name="empNameEng" maxLength="20"
                                                       value="KIM SA WON" style={{border: "none"}}/>
                                            </div>
                                            <div className=" empInfo empEmail">
                                                <label htmlFor="empEmail">이메일</label>
                                                <input type="email" id="empEmail" name="empEmail" maxLength="20"
                                                       value="kim@gmail.com" style={{border: "none"}}/>
                                            </div>
                                            <div className=" empInfo empDuty">
                                                <label htmlFor="empDuty">직책</label>
                                                <input type="text" id="empDuty" name="empDuty" maxLength="20" value="사원"
                                                       style={{border: "none"}}/>
                                            </div>
                                            <div className=" empInfo empDep">
                                                <label htmlFor="empDep">부서명</label>
                                                <input type="text" id="empDep" name="empDep" maxLength="20" value="영업1팀"
                                                       style={{border: "none"}}/>
                                            </div>
                                        </div>
                                        <div className={section2}>
                                            <div className="button">
                                                <label htmlFor="changepw">비밀번호</label>
                                                <button className={pwButton} type="button" onClick={()=> setModalIsOpen(true)}>비밀번호 변경</button>
                                            </div>
                                            <div className=" empInfo empDep">
                                                <label htmlFor="empDep">휴대 전화</label>
                                                <input type="tel" id="empDep" name="empDep" maxLength="20"
                                                       value="010-1234-1234" style={{border: "none"}}/>
                                            </div>
                                            <div className=" empInfo empDep">
                                                <label htmlFor="empDep">내선 번호</label>
                                                <input type="tel" id="empDep" name="empDep" maxLength="20"
                                                       value="02-123-1234~5" style={{border: "none"}}/>
                                            </div>
                                            <div className=" empInfo empDep">
                                                <label htmlFor="empDep">생일</label>
                                                <DatePicker
                                                    locale={ko}
                                                    dateFormat="yyyy년 MM월 dd일"
                                                    selected={ birthDate }
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
                                                <input type="text" id="empDep" name="empDep" maxLength="20" value="정직원"
                                                       style={{border: "none"}}/>
                                            </div>
                                        </div>
                                    </div>
                                    {/*<fieldset id="adress" style={{border: "none"}}>*/}
                                    <div className={empAddress}>
                                        <div className="">
                                            <div className={addressButton}>
                                                <label htmlFor="postcode">주소</label>
                                                <div>
                                                    <button className={adButton} type="button"
                                                            onClick="sample6_execDaumPostcode()" value="우편번호 찾기">
                                                        <span><i
                                                            className="fa-solid fa-magnifying-glass"></i>주소검색</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={inputAddress}>
                                                <div className="postCode">
                                                    <input type="text" name="zipcode" id="postcode" placeholder="우편번호"
                                                           required style={{border: "none"}}/>
                                                </div>
                                                <div className={baseAddress}>
                                                    <input type="text" name="baseAddress" id="aseAddress"
                                                           placeholder="기본주소" required style={{border: "none"}}/>
                                                </div>
                                            </div>
                                            <div className={detailAddress}>
                                                <input type="text" name="detailAddress" id="detailAddress"
                                                       placeholder="상세주소" required style={{border: "none"}}/>
                                            </div>
                                        </div>
                                    </div>
                                    {/*</fieldset>*/}
                                    <div className={udButton}>
                                        <div>
                                            <button className={updateButton} type="submit">
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

            {/*비밀번호 변경 모달창 띄우기 */}
            {modalIsOpen && (
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={() => setModalIsOpen(false)}
                    className={`customModalStyle ${modalIsOpen? 'isOpen':''}`}
                >
                    <UpdatePwApp/>
                </Modal>
            )}
        </>
    )




}
export default MypageEmp;