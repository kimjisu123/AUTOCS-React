import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

class MyEditor extends Component {

    render() {
        const { editorState } = this.props;
        return (
            <Editor
                editorState={editorState}
                readOnly={true}
                toolbarHidden={true}
            />
        );
    }
}

export default MyEditor;