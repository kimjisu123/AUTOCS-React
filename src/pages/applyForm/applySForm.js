import img from './loginMain.png'
import './applySForm.css'
import {Link, Navigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import React, { useState, useEffect } from 'react';
import {callApplyMarketAPI} from "../../apis/MarketAPICalls";

const ApplySForm = () => {
    const dispatch = useDispatch();

    const [address, setAddress] = useState('');
    const [detailAddress, setDetailAddress] = useState('');
    const [postcode, setPostcode] = useState('');
    const [guide, setGuide] = useState('');
    const [name, setName] = useState('');
    const [license, setLicense] = useState('');
    const [email, setEmail] = useState('');
    const [image, setImage] = useState(null);
    const isFormValid = () => {
        return address !== '' && name !== '' && license !== '' && email !== '';
    };

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
        script.async = true;
        document.body.appendChild(script);

    }, []);

    // 로그인 상태일 시 영업점 신청폼 페이지로 접근 방지
    const Token = localStorage.getItem('accessToken');
    if (Token) {
        return <Navigate to="/main" replace />;
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


    const handleApply = () => {
        try {
            if (!isFormValid()) {
                window.alert('모든 필드를 입력해주세요.');
                window.location="/applyS"
            }

            const formData = new FormData();
            formData.append('address', address);
            formData.append('detailAddress', detailAddress);
            formData.append('name', name);
            formData.append('license', license);
            formData.append('email', email);

            if(image){
                formData.append("fileImage", image);
            }

            callApplyMarketAPI({ formData, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleLicenseChange = (event) => {
        setLicense(event.target.value);
    };

    const handleFileChange = (event) => {

        const image = event.target.files[0];

        setImage(image);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main style={{paddingTop: "60px"}}>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>계정 생성 신청</h1>
                    <div className="separator" style={{width: "40%"}}></div>

                    <button className="address-button" onClick={handlePostcodeSearch} style={{marginTop: "10px"}} >
                        주소 검색
                    </button>
                    <div className="address-section">
                        <input
                            className="lo"
                            type="text"
                            value={address}
                            placeholder="주소"
                            readOnly
                        />
                    </div>

                    <h4 style={{ marginBottom: '10px', marginTop: '-10px', background: 'white' }}>상세주소</h4>
                    <input
                        className="lo"
                        type="text"
                        id="sample4_detailAddress"
                        value={detailAddress}
                        placeholder="상세주소"
                        onChange={(e) => setDetailAddress(e.target.value)}
                    />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>대표자명</h4>
                    <input className="lo" type="text" id="name" name="name" value={name}
                           onChange={handleNameChange} required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>사업자등록번호</h4>
                    <input className="lo" type="text" id="license" name="license" value={license}
                           onChange={handleLicenseChange} required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>표준가맹계약서</h4>
                    <input className="lo" type="file" id="file" name="file" accept='image/jpg,image/png,image/jpeg,image/gif'
                           onChange={handleFileChange} required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>이메일</h4>
                    <input className="lo" type="text" id="email" name="email" value={email}
                           onChange={handleEmailChange} required />

                    <Link to="/ApplyOk">
                        <button type="button" className="regist" onClick={handleApply}>
                            신청하기
                        </button>
                    </Link>

                    <h6 style={{color: "red"}}>생성된 계정은 2영업일 내 이메일로 발송됩니다.</h6>
                </main>
            </div>
        </div>
    )
}

export default ApplySForm;