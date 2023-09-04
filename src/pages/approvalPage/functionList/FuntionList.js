import Swal from 'sweetalert2';
import { useSelector, useDispatch } from 'react-redux';
import {
    callPostBusinessAPI,
    callPostPurchaseAPI,
    callPostTrafficAPI,
    callPostVacationAPI
} from '../../../apis/ApprovalAPICalls';
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

export const TrafficCheck = (keys, values, formdata, dispatch, navigate) => {

    if(!keys.includes('allow')) {

        Swal.fire({
            icon: 'info',
            title: '결재 라인 없음',
            text: '결재 라인을 추가해주세요',
        })
        return;
    }

    if(!keys.includes('trafficDate')) {

        Swal.fire({
            icon: 'info',
            title: '입력값 없음',
            text: '적어도 하나의 열을 추가해주세요',
        })
        return;
    }


    for(let i = 0; i < keys.length; i++) {

        if(keys[i] == 'trafficDate' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '날짜 없음',
                text: '날짜를 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'trafficTime' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '출발시간 없음',
                text: '출발시간을 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'from' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '출발지 없음',
                text: '출발지를 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'to' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '도착지 없음',
                text: '도착지를 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'distance' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '거리 없음',
                text: '거리를 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'business' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '용무 없음',
                text: '용무를 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'trafficPrice' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '금액 없음',
                text: '금액을 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'vehicle' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '교통편 없음',
                text: '교통편을 입력해주세요',
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

                        dispatch(callPostTrafficAPI(formdata));

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

                dispatch(callPostTrafficAPI(formdata));

                Swal.fire('제출이 완료되었습니다.', '전자결재 홈으로 돌아갑니다', 'success');
                navigate('/approval', {replace: true});
            }
        })
    }
}

export const BusinessCheck = (formdata, keys, values, dispatch, navigate) => {

    if(!keys.includes('allow')) {

        Swal.fire({
            icon: 'info',
            title: '결재 라인 없음',
            text: '결재 라인을 추가해주세요',
        })
        return;
    }

    for(let i = 0; i < keys.length; i++) {

        if(keys[i] == 'businessTitle' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '제목 없음',
                text: '제목을 입력해주세요',
            })
            return;
        }

        if(keys[i] == 'business' && values[i].length < 20) {

            Swal.fire({
                icon: 'info',
                title: '글자 수 부족',
                text: '20자 이상 입력해주세요',
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

                        dispatch(callPostBusinessAPI(formdata));

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

                dispatch(callPostBusinessAPI(formdata));

                Swal.fire('제출이 완료되었습니다.', '전자결재 홈으로 돌아갑니다', 'success');
                navigate('/approval', {replace: true});
            }
        })
    }
}

export const VacationCheck = (keys, values, formdata, dispatch, navigate, result) => {

    if(!keys.includes('allow')) {

        Swal.fire({
            icon: 'info',
            title: '결재 라인 없음',
            text: '결재 라인을 추가해주세요',
        })
        return;
    }

    if(!keys.includes('vacationType') && formdata.get('half') === 'none') {

        Swal.fire({
            icon: 'info',
            title: '휴가 종류 없음',
            text: '휴가 종류나 반차를 선택해주세요',
        })
        return;
    }

    let yyyyMMdd = String()

    const sd = new Date(formdata.get('startDate'));
    const ed = new Date(formdata.get('endDate'));
    const gap = (ed.getTime() - sd.getTime())/(1000 * 60 * 60 * 24);
    console.log(gap)

    if(formdata.get('startDate') == '' || formdata.get('endDate') == '') {

        Swal.fire({
            icon: 'info',
            title: '날짜 없음',
            text: '날짜를 선택해주세요',
        })
        return;
    }

    if(gap < 0) {

        Swal.fire({
            icon: 'info',
            title: '날짜 오류',
            text: '종료날짜가 시작날짜보다 빠를 수 없습니다',
        })
        return;
    }

    if(result.data < gap + 1) {

        Swal.fire({
            icon: 'info',
            title: '잔여 휴가 부족',
            text: '가지고 있는 휴가가 부족합니다',
        })
        return;
    }

    for(let i = 0; i < keys.length; i++) {

        if (keys[i] == 'vacationReason' && values[i] == '') {

            Swal.fire({
                icon: 'info',
                title: '휴가 사유 없음',
                text: '휴가 사유를 입력해주세요',
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

                        dispatch(callPostBusinessAPI(formdata));

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

                dispatch(callPostBusinessAPI(formdata));

                Swal.fire('제출이 완료되었습니다.', '전자결재 홈으로 돌아갑니다', 'success');
                navigate('/approval', {replace: true});
            }
        })
    }
}
