import axios from 'axios';
import React, {useState} from 'react';
import {withRouter} from "react-router";
import {URL} from './Register/RegisterPage'
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";


const Upload =(props)=>{
    const [state, setState] = useState({selectedFile: null})
    const [image,setImage]= useState(null)

    // On file select (from the pop up)
    const onFileChange = event => {
        // Update the state
        setState({ selectedFile: event.target.files[0] });
    };

    // On file upload (click the upload button)
    const onFileUpload = () => {
        // Create an object of formData
        const formData = new FormData();

        // Update the formData object
        formData.append(
            "avatar",
            state.selectedFile,
            state.selectedFile.name
        );

        // Details of the uploaded file
        console.log(state.selectedFile);

        // Request made to the backend api
        // Send formData object
        axios.post(`${URL}/upload`, formData).then(res=> {
            props.getter(`${URL}/`+res.data)
            setImage(`${URL}/`+res.data)
            console.log(res.data)
        }).catch(e=>{console.log(e)});
    };

    // File content to be displayed after
    // file upload is complete
    const fileData = () => {
        if (state.selectedFile) {

            return (
                <div>
                    <Typography variant="h5">File INFO:</Typography>
                    <p>File Name: {state.selectedFile.name}</p>
                    <p>File Type: {state.selectedFile.type}</p>
                    <p>
                        Last Modified:{" "}
                        {state.selectedFile.lastModifiedDate.toDateString()}
                    </p>
                </div>
            );
        } else {
            return (
                <div>
                    <br />
                    <Typography variant="h5">Выбери перед тем как нажимать Загрузить</Typography>
                </div>
            );
        }
    };

        return (
            <div>
                <Typography variant="h5">
                    Загрузка Аватарки
                </Typography>
                <div>
                    {image&& <img style={{"width":"100px"}} src={image} alt='avatar'/>}
                    <input type="file" onChange={onFileChange} />
                    <Button variant="contained"
                        onClick={onFileUpload}>
                        Загрузить!
                    </Button>
                </div>
                {fileData()}
            </div>
        );
}

export default withRouter(Upload);