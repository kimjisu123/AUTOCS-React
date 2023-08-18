import MypageCSS from './MypageEmp.module.css';
import emp from './emp.jpg'
function MypageEmp() {

    return (
        <>
            <div className={MypageCSS.mainContainer}>
                <div className={MypageCSS.rightContainer}>
                    <div className={MypageCSS.content}>
                        <div className={MypageCSS.wrap}>
                            <div className={MypageCSS.empInfoTitle}>
                                <div className={MypageCSS.infoTitle}>
                                    <h1>사원 정보</h1>
                                </div>
                                <div>
                                    <img src={ emp } alt="" className={MypageCSS.empInfoImg}/>
                                    <button className={MypageCSS.imgButton} type="submit">바꾸기</button>
                                </div>
                                <br/>
                                    <span style={{color: "white", textAlign:"center"}}>가로200 세로 200<br/>이미지를 넣어주세요</span>
                                    <div className={MypageCSS.empDepDate}>
                                        <h3>입사일</h3>
                                        <h1>23.01.01</h1>
                                    </div>
                            </div>
                            <div className={MypageCSS.infoInput}>
                                <form id="infoform" action="" method="post">
                                    <div className={MypageCSS.sections}>
                                        <div className={MypageCSS.section1}>
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
                                        <div className={MypageCSS.section2}>
                                            <div className={MypageCSS.button}>
                                                <label htmlFor="changepw">비밀번호</label>
                                                <button className={MypageCSS.pwButton} type="button" onClick="">비밀번호 변경</button>
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
                                                <input type="date" id="empDep" name="empDep" maxLength="20"
                                                       value="94.02.01" style={{border: "none"}}/>
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
                                    <div className={MypageCSS.empAddress}>
                                        <div className="">
                                            <div className={MypageCSS.addressButton}>
                                                <label htmlFor="postcode">주소</label>
                                                <div>
                                                    <button className={MypageCSS.adButton} type="button"
                                                            onClick="sample6_execDaumPostcode()" value="우편번호 찾기">
                                                        <span><i
                                                            className="fa-solid fa-magnifying-glass"></i>주소검색</span>
                                                    </button>
                                                </div>
                                            </div>
                                            <div className={MypageCSS.inputAddress}>
                                                <div className={MypageCSS.postCode}>
                                                    <input type="text" name="zipcode" id="postcode" placeholder="우편번호"
                                                           required style={{border: "none"}}/>
                                                </div>
                                                <div className={MypageCSS.baseAddress}>
                                                    <input type="text" name="baseAddress" id="aseAddress"
                                                           placeholder="기본주소" required style={{border: "none"}}/>
                                                </div>
                                            </div>
                                            <div className={MypageCSS.detailAddress}>
                                                <input type="text" name="detailAddress" id="detailAddress"
                                                       placeholder="상세주소" required style={{border: "none"}}/>
                                            </div>
                                        </div>
                                    </div>
                                    {/*</fieldset>*/}
                                    <div className={MypageCSS.udButton}>
                                        <div>
                                            <button className={MypageCSS.updateButton} type="submit">
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
        </>
    )
}
export default MypageEmp;