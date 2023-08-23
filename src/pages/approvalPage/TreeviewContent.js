import { useState } from "react";
import {
    Tree,
    getBackendOptions,
    MultiBackend,
} from "@minoru/react-dnd-treeview";
import { DndProvider } from "react-dnd";
import initialData from "./sample-default.json";
import './Treeview.css'

function TreeviewContent() {
    const [treeData, setTreeData] = useState(initialData);
    const handleDrop = (newTreeData) => setTreeData(newTreeData);

    return (
        <DndProvider backend={MultiBackend} options={getBackendOptions()}>
            <Tree
                tree={treeData}
                rootId={0}
                onDrop={handleDrop}
                canDrop={()=>false}
                sort={() => false}
                render={(node, { depth, isOpen, onToggle }) => (
                    <div style={{ marginLeft: depth * 6 }}>
                        {node.parent === 0 && (
                            <span onClick={onToggle}>{isOpen ? "◁ " : "▷ "}</span>
                        )}
                        {node.text} {node.parent !== 0 && (<span className="plus">[+]</span>)}
                    </div>
                )}
            />
        </DndProvider>
    );
}

export default TreeviewContent