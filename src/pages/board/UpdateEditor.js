import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

class UpdateEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: props.editorState || EditorState.createEmpty(),
            uploadedImages: [],
        };
    }

    onEditorStateChange = (editorState) => {
        this.setState({
            editorState,
        });
        this.props.onEditorStateChange(editorState);
    };

    uploadImageCallBack = (file) => {
        let uploadedImages = this.state.uploadedImages;
        const imageObject = {
            file: file,
            localSrc: URL.createObjectURL(file),
        };
        uploadedImages.push(imageObject.file);

        this.setState({
            uploadedImages,
        });
        this.props.onUploadFileChange(uploadedImages);

        return new Promise(
            (resolve, reject) => {
                resolve({
                    data: { link: imageObject.localSrc }
                });
            }
        );
    };

    render() {
        const { editorState } = this.state;
        return (
            <Editor
                editorState={editorState}
                onEditorStateChange={this.onEditorStateChange}
                onUploadFileChange={this.uploadImageCallBack}
                toolbar={{
                    image: { uploadCallback: this.uploadImageCallBack },
                }}
            />
        );
    }
}

export default UpdateEditor;