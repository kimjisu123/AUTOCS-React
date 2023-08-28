import img from './loginMain.png'
import './applySForm.css'
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {callApplyMarketAPI} from "../../apis/MarketAPICalls";

const ApplySForm = () => {
    const dispatch = useDispatch();

    const [address, setAddress] = useState('');
    const [name, setName] = useState('');
    const [license, setLicense] = useState('');
    const [file, setFile] = useState(null);
    const [email, setEmail] = useState('');
    const isFormValid = () => {
        return address !== '' && name !== '' && license !== '' && file !== null && email !== '';
    };


    const handleApply = () => {
        try {
            if (!isFormValid()) {
                window.alert('모든 필드를 입력해주세요.');
                window.location="/applyS"
            }

            const formData = new FormData();
            formData.append('address', address);
            formData.append('name', name);
            formData.append('license', license);
            formData.append('email', email);
            formData.append('file', file);

            console.log('formData:', formData);

            callApplyMarketAPI({ formData, dispatch });

        } catch (error) {
            console.error('Error:', error);
        }
    };


    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleLicenseChange = (event) => {
        setLicense(event.target.value);
    };

    const handleFileChange = (event) => {
        const selectedFile = event.target.files[0];
        setFile(selectedFile);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    return (
        <div style={{backgroundColor: "#1C2C10"}}>
            <div className="border">
                <main>
                    <img src={img} style={{ width: "145px", height: "200px", marginTop: "-150px", marginBottom: "-35px" }} />

                    <h1 style={{ color: "#1C2C10" }}>계정 생성 신청</h1>
                    <div className="separator" style={{width: "40%"}}></div>

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>영업점 주소</h4>
                    <input className="lo" type="text" id="address" name="address" value={address}
                           onChange={handleAddressChange} required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>대표자명</h4>
                    <input className="lo" type="text" id="name" name="name" value={name}
                           onChange={handleNameChange} required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>사업자등록번호</h4>
                    <input className="lo" type="text" id="license" name="license" value={license}
                           onChange={handleLicenseChange} required />

                    <h4 style={{ marginBottom: "10px", marginTop: "10px", background: "white" }}>표준가맹계약서</h4>
                    <input className="lo" type="file" id="file" name="file"
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