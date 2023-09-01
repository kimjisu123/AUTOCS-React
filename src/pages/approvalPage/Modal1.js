import TreeviewContent1 from './TreeviewContent1'
import modal from './Modal.module.css'

function Modal1({setAddReceive}) {

    const onClickHandler = () => {
        setAddReceive(false);
    }

    return (
        <div className={modal.background}>
            <div className={modal.modal}>
                <div className={modal.top}>
                    <div className={modal.text}>수신자 추가</div>
                    <div className={modal.x} onClick={onClickHandler}>X</div>
                </div>
                <div className={modal.middle}>
                    <div className={modal.left}>
                        <TreeviewContent1 setAddReceive={setAddReceive}/>
                    </div>
                    {/*<div className={modal.right}>*/}

                    {/*</div>*/}
                </div>
                {/*<div className={modal.bottom}>*/}
                {/*    <div className={modal.goBtn}>확인</div>*/}
                {/*    <div className={modal.okBtn}>추가하기</div>*/}
                {/*</div>*/}
            </div>
        </div>
    )
}

export default Modal1