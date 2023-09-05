import img from './loginMain.png';
import './outMForm.css';
import React, { useState, useEffect } from 'react';
import { decodeJwt } from '../../util/tokenUtils';
import DaumPostcode from 'react-daum-postcode';
import {useDispatch} from "react-redux";
import {callStoreOutAPI} from "../../apis/MarketAPICalls";

const OutSForm = () => {

    const [guide, setGuide] = useState('');
    const dispatch = useDispatch();

    const accessToken = window.localStorage.getItem('accessToken');
    const decodedToken = accessToken ? decodeJwt(accessToken) : null;

    //console.log("토큰값>>>>>>>>>>>>>>>>>" + accessToken);

    const [image, setImage] = useState(null);

    //신청
    const handleEOut = async () => {
        if (!image) {
            window.alert('주소와 파일을 입력해주세요.');
            return;
        }

        try {
            const formData = new FormData();
            formData.append('storeNo', decodedToken.StoreNo);
            formData.append('name', decodedToken.Name);
            formData.append("fileImage", image);

            console.log('Info to Pass:', formData);

            callStoreOutAPI({ formData, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleFileChange = (event) => {
        const image = event.target.files[0];
        setImage(image);
    };

    return (
        <div className="border">
            <main>
                <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                <h1 style={{ color: '#1C2C10' }}>계정 비활성화 신청</h1>
                <div className="separator" style={{ width: '50%' }}></div>

                <h4 style={{ marginBottom: '10px', marginTop: '10px', background: 'white' }}>주소</h4>
                <div className="address-section">
                    <input
                        className="lo"
                        type="text"
                        value={decodedToken.address}
                        placeholder="주소"
                        readOnly
                    />
                </div>

                <h4 style={{ marginBottom: '10px', marginTop: '-10px', background: 'white' }}>상세주소</h4>
                <input
                    className="lo"
                    type="text"
                    id="sample4_detailAddress"
                    value={decodedToken.detailAddress}
                    placeholder="상세주소"
                    readOnly
                />

                <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>대표자명</h4>
                <input className="lo" type="text" id="name" name="name" value={decodedToken.Name} readOnly required />

                <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>계약 종료/해지 확인서</h4>
                <input className="lo" type="file" id="file" name="file"
                       accept='image/jpg,image/png,image/jpeg,image/gif'
                       onChange={handleFileChange} required />

                <button type="button" className="regist" onClick={handleEOut}>
                    신청하기
                </button>
            </main>
        </div>
    );
};

export default OutSForm;