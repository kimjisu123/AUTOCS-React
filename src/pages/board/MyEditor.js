import React, { Component } from 'react';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { EditorState } from 'draft-js';

class MyEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            editorState: EditorState.createEmpty(),
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
        console.log("uploadedImages: " + uploadedImages);
        for (const entry of uploadedImages.entries()) {
            console.log(entry[0], entry[1]);
        }
        console.log("uploadedImages==============");

        this.setState({
            uploadedImages,
        });
        this.props.onUploadFileChange(uploadedImages);

        // 파일 객체와 URL을 함께 반환
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
                onUploadFileChange={this.onUploadFileChange}
                toolbar={{
                    image: { uploadCallback: this.uploadImageCallBack },
                }}
            />
        );
    }
}

export default MyEditor;