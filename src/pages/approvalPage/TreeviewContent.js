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
import { usePurchaseContext } from './appContext/PurchaseContext';
import Swal from 'sweetalert2';


import {
    callGetAppLineAPI
} from '../../apis/ApprovalAPICalls';

function TreeviewContent() {

    const {data, setData} = usePurchaseContext();

    const dispatch = useDispatch();

    const [checkList, setCheckList] = useState([]);

    useEffect(
        () => {
            dispatch(callGetAppLineAPI());
        },
        []
    )

    // 체크된 인원 추가하기
    const onChangeHandler = (node, e) => {

        // if(checkList.length == 4 ) {
        //     Swal.fire({
        //         icon: 'error',
        //         title: '이미 4명이 추가되었어요',
        //         text: '더 이상 추가하실 수 없어요',
        //     })
        //     setCheckList(checkList.filter(item => item !== node));
        // } else {
        //     if(e.target.checked) {
        //
        //         setCheckList([...checkList, node]);
        //     } else {
        //
        //         setCheckList(checkList.filter(item => item !== node));
        //     }
        // }

        if(e.target.checked) {

            if(checkList.length > 3) {
                Swal.fire({
                    icon: 'error',
                    title: '이미 4명이 추가되었어요',
                    text: '더 이상 추가하실 수 없어요',
                })
                e.target.checked=false;
            } else {
                setCheckList([...checkList, node]);
            }
        } else {
            setCheckList(checkList.filter(item => item !== node));
        }
    }

    const list = useSelector(state => state.approvalReducer);

    // console.log("list : " + list)

    const [treeData, setTreeData] = useState(list);
    // const handleDrop = (newTreeData) => setTreeData(newTreeData);

    return (
        <>
            <div style={{display:"flex"}}>
                <DndProvider backend={MultiBackend} options={getBackendOptions()}>
                    <div style={{overflow:"auto", height:"240px", width:"300px"}}>
                        <Tree
                            tree={treeData}
                            rootId={0}
                            // onDrop={handleDrop}
                            canDrop={()=>false}
                            initialOpen={true}
                            render={(node, { depth, isOpen, onToggle }) => (
                                <div style={{ marginLeft: depth * 6 }}>
                                    {node.parent === 0 && (
                                        <span onClick={onToggle}>{isOpen ? <AiFillCaretLeft color="#8d8a6d"/> : <AiFillCaretRight color="#8d8a6d"/>}</span>
                                    )}
                                    {node.parent !== 0 && (<input type="checkbox" name="addLine" id="addLine" onChange={e => onChangeHandler(node, e)}/>)} {node.text}
                                </div>
                            )}
                        />
                    </div>
                </DndProvider>
                <Name checkList={checkList}/>
            </div>
            <div className={modal.bottom}>
                <div className={modal.okBtn}>추가하기</div>
            </div>
        </>
    );
}

export default TreeviewContent