import EditorJS from "@editorjs/editorjs";
import NullEditor from "./null-editor";


const editorjs = new EditorJS({
    autofocus: false,
    initialBlock: 'nullBlock',
    tools: {
        nullBlock: {
            class: NullEditor
        },
    },
    data: {}
});

document.getElementById('save').onclick = function () {
    editorjs.save().then((outputData) => {
        console.log('Output: ', outputData)
    }).catch((error) => {
        console.log('Error: ', error);
    });
};