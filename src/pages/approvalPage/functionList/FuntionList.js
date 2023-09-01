import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import {callPostPurchaseAPI} from '../../../apis/ApprovalAPICalls';
import approvalReducer from "../../../modules/ApprovalModule";
import { useNavigate } from "react-router-dom";


export const NoArg = (keys, values, formdata, dispatch, navigate) => {

    if(!keys.includes('allow')) {

        Swal.fire({
            icon: 'info',
            title: '결재 라인 없음',
            text: '결재 라인을 추가해주세요',
        })
        return;
    }

    for(let i = 0; i < keys.length; i++) {

        if(keys[i] == 'docTitle' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '제목 없음',
                text: '제목을 입력해주세요',
            })
            return;
        }
    }

    if(!keys.includes('productName')) {

        Swal.fire({
            icon: 'info',
            title: '제품 없음',
            text: '적어도 하나의 제품을 추가해주세요',
        })
        return;
    }

    for(let i = 0; i < keys.length; i++) {

        if(keys[i] == 'productName' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '품명 없음',
                text: '품명을 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'productSize' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '규격 없음',
                text: '규격을 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'amount' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '수량 없음',
                text: '수량을 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'price' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '단가 없음',
                text: '단가를 입력해주세요',
            })
            return;
        }
    }

    if(!keys.includes('files')) {

        Swal.fire({
            title: '첨부파일이 없습니다.',
            text: '이대로 계속 진행하시겠습니까?',
            icon: 'question',

            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: 'rgba(0,125,0,0.5)', // confrim 버튼 색깔 지정
            cancelButtonColor: 'rgba(125,0,0,0.5)', // cancel 버튼 색깔 지정
            confirmButtonText: '승인', // confirm 버튼 텍스트 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정

            reverseButtons: false, // 버튼 순서 거꾸로

        }).then(result => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면

                Swal.fire({
                    title: '제출 확인',
                    text: '제출하시겠습니까?',
                    icon: 'question',

                    showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
                    confirmButtonColor: 'rgba(0,125,0,0.5)', // confrim 버튼 색깔 지정
                    cancelButtonColor: 'rgba(125,0,0,0.5)', // cancel 버튼 색깔 지정
                    confirmButtonText: '승인', // confirm 버튼 텍스트 지정
                    cancelButtonText: '취소', // cancel 버튼 텍스트 지정

                    reverseButtons: false, // 버튼 순서 거꾸로

                }).then(result => {
                    // 만약 Promise리턴을 받으면,
                    if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면

                        dispatch(callPostPurchaseAPI(formdata));

                            Swal.fire('제출이 완료되었습니다.', '전자결재 홈으로 돌아갑니다', 'success');
                            navigate('/approval', {replace: true});
                    }
                })

            }
        });
    }

    if(keys.includes('files')) {

        Swal.fire({
            title: '제출 확인',
            text: '제출하시겠습니까?',
            icon: 'question',

            showCancelButton: true, // cancel버튼 보이기. 기본은 원래 없음
            confirmButtonColor: 'rgba(0,125,0,0.5)', // confrim 버튼 색깔 지정
            cancelButtonColor: 'rgba(125,0,0,0.5)', // cancel 버튼 색깔 지정
            confirmButtonText: '승인', // confirm 버튼 텍스트 지정
            cancelButtonText: '취소', // cancel 버튼 텍스트 지정

            reverseButtons: false, // 버튼 순서 거꾸로

        }).then(result => {
            // 만약 Promise리턴을 받으면,
            if (result.isConfirmed) { // 만약 모달창에서 confirm 버튼을 눌렀다면

                dispatch(callPostPurchaseAPI(formdata));

                    Swal.fire('제출이 완료되었습니다.', '전자결재 홈으로 돌아갑니다', 'success');
                    navigate('/approval', {replace: true});
            }
        })
    }

    // Swal.fire('제출이 완료되었습니다.', '전자결재 홈으로 돌아갑니다', 'success');
}
