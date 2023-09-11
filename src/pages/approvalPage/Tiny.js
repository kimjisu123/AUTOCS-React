import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

function Tiny({setData}) {

    const onChangeHandler = (e) => {
        console.log(e.target.contentDocument.activeElement.innerText);
        const text= e.target.contentDocument.activeElement.innerText;
        setData(prev => ({...prev, ["business"]: text? text : ''}));
    }

    const editorRef = useRef(null);
    const log = () => {
        if (editorRef.current) {
            console.log(editorRef.current.getContent());
        }
    };

    return (
        <>
            <Editor
                onChange={e => onChangeHandler(e)}
                apiKey='5dx70iqy6vq5omb4hc0pdrajzqupigj8rlvhi3jzlie3gjl7'
                init={{
                    height: 500,
                    menubar: false,
                    plugins: [
                        'advlist autolink lists link image charmap print preview anchor',
                        'searchreplace visualblocks code fullscreen',
                        'insertdatetime media table paste code help wordcount'
                    ],
                    toolbar: 'undo redo | formatselect | ' +
                        'bold italic backcolor | alignleft aligncenter ' +
                        'alignright alignjustify | bullist numlist outdent indent | ' +
                        'removeformat | help',
                    content_style: `body { font-family:JetBrains Mono,Arial,sans-serif; font-size:16px }`
                }}
            />
        </>
    );
}

export default Tiny;
