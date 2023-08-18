import style from './MypageEmp.module.css';
import empimg from './emp.jpg';
function MypageEmpMenubar(){

    return (
        <div className={style.leftContainer}>
        <div className={style.paddingContainer}>
            <div className={style.profile}>
                {/*<img src={ empimg } alt=""/>*/}
            </div>
            <div className={style.name}>사이드바</div>
            <div className={style.dept}>영업 1부</div>
            <div className={style.workHours}>
                <div className={style.work}>근태관리</div>
                <div className={style.date}>2023-08-08</div>
                <div className={style.hour}>8H 17M</div>
            </div>
            <div className={style.workBtn}>
                <div className={style.attendence}>출근하기</div>
                <div className={style.leaveWork}>퇴근하기</div>
            </div>
            <div className={style.memo}></div>
        </div>
    </div>

    )
}
export default MypageEmpMenubar;