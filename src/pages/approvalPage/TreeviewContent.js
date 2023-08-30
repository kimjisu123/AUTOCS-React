import { useState } from "react";
import {
    Tree,
    getBackendOptions,
    MultiBackend,
} from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import './Treeview.css'
import { AiFillCaretRight } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useCallback } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";
import Name from './Name'
import modal from './Modal.module.css'

import {
    callGetAppLineAPI
} from '../../apis/ApprovalAPICalls';

function TreeviewContent() {

    const dispatch = useDispatch();

    const [name, setName] = useState([]);

    const checkList = [];
    useEffect(
        () => {
            dispatch(callGetAppLineAPI());
        },
        []
    )

    const list = useSelector(state => state.approvalReducer);

    // 체크된 값을 배열에 담기
    const onChangeHandler = (e) => {

        if(!checkList.includes(e.target.nextSibling.wholeText)) {
            checkList.push(e.target.nextSibling.wholeText)
        } else {

            for(let i = 0; i < checkList.length; i++) {

                if(checkList[i] === e.target.nextSibling.wholeText) {
                    checkList.splice(i, 1);
                    i--
                }
            }
        }
        console.log(checkList)
    }


    // console.log("list : " + list)

    const [treeData, setTreeData] = useState(list);
    const handleDrop = (newTreeData) => setTreeData(newTreeData);

    return (
        <>
            <div style={{display:"flex"}}>
                <DndProvider backend={MultiBackend} options={getBackendOptions()}>
                    <div style={{overflow:"auto", height:"240px", width:"300px"}}>
                        <Tree
                            tree={treeData}
                            rootId={0}
                            onDrop={handleDrop}
                            canDrop={()=>false}
                            initialOpen={true}
                            render={(node, { depth, isOpen, onToggle }) => (
                                <div style={{ marginLeft: depth * 6 }}>
                                    {node.parent === 0 && (
                                        <span onClick={onToggle}>{isOpen ? <AiFillCaretLeft color="#8d8a6d"/> : <AiFillCaretRight color="#8d8a6d"/>}</span>
                                    )}
                                    {node.parent !== 0 && (<input type="checkbox" name="addLine" id="addLine" onChange={onChangeHandler}/>)} {node.text}
                                </div>
                            )}
                        />
                    </div>
                </DndProvider>
                <Name name={name}/>
            </div>
            <div className={modal.bottom}>
                <div className={modal.okBtn}>추가하기</div>
            </div>
        </>
    );
}

export default TreeviewContent