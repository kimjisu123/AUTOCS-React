import { useState } from "react";
import {
    Tree,
    getBackendOptions,
    MultiBackend,
} from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import initialData from "./sample-default.json";
import './Treeview.css'
import { AiFillCaretRight } from "react-icons/ai";
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useRef } from "react";
import { AiFillCaretLeft } from "react-icons/ai";
import { AiOutlineCheck } from "react-icons/ai";

import {
    callGetAppLineAPI
} from '../../apis/ApprovalAPICalls';

function TreeviewContent() {

    const dispatch = useDispatch();

    useEffect(
        () => {
            dispatch(callGetAppLineAPI());
        },
        []
    )

    const list = useSelector(state => state.approvalReducer);

    console.log("list : " + list)

    const [treeData, setTreeData] = useState(list);
    const handleDrop = (newTreeData) => setTreeData(newTreeData);

    return (
        <DndProvider backend={MultiBackend} options={getBackendOptions()}>
            <Tree
                tree={treeData}
                rootId={0}
                onDrop={handleDrop}
                canDrop={()=>false}
                render={(node, { depth, isOpen, onToggle }) => (
                    <div style={{ marginLeft: depth * 6 }}>
                        {node.parent === 0 && (
                            <span onClick={onToggle}>{isOpen ? <AiFillCaretLeft color="#8d8a6d"/> : <AiFillCaretRight color="#8d8a6d"/>}</span>
                        )}
                        {node.parent !== 0 && (<input type="checkbox" name="addLine" id="addLine"/>)} {node.text}
                    </div>
                )}
            />
        </DndProvider>
    );
}

export default TreeviewContent