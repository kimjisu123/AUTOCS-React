import emp from "../Mypage/emp.jpg";
import {MdAccountCircle} from "react-icons/md";
import MainCSS from './MainContent.module.css';

// 비구조화 할당 문법을 활용한 css내부 값 추출하기 이렇게 쓰면 MypageCSS.mainContatiner를 안써도된다. )
const { homeContainer, tempBox, empInfoImg, empImg,
} = MainCSS;

const MainContent = () => {

    return (
        <>
            <div className={homeContainer}>
                <div className={tempBox}>
                        <img src={ emp } alt="" className={empInfoImg}/>
                    <div className="maintitle">
                        <h1>안녕하세요 김사원님</h1>
                        <h3>오늘 하루도 힘내세요</h3>
                    </div>
                </div>
                <div className={tempBox}>2</div>
                <div className={tempBox}>3</div>
                <div className={tempBox}>4</div>
                <div className={tempBox}>5</div>
                <div className={tempBox}>6</div>
            </div>


        </>
    )
}
export default MainContent;