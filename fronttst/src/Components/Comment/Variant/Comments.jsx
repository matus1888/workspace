import CreateIcon from '@material-ui/icons/Create';
import React, {useEffect, useState} from 'react'
import {instance} from "../../Register/RegisterPage";
import Parse from '../../../LogicComponents/ParserDate'
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar"
import IconButton from "@material-ui/core/IconButton";
import {makeStyles} from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    comments:{
        display:"flex",
        height:"65px",
        justifyContent:"space-between",
        alignItems:"center"
    },
    userInfo:{
        display:"flex",
        height:"50px",
        justifyContent:"flex-start",
        alignItems:"center"
    }
}))
const Comments = (props) => {
    const classes=useStyles()
    const [state, setState] = useState(undefined)
    const [enable, setEnable] = useState(false)
    const [text, setText] = useState({})
    const [update,setUpdate] = useState(false)
    const [showComment,setShowComment]=useState(false)
    let cookie =document.cookie === '' ? '{"authorized":false}' : JSON.parse(document.cookie)

    const setNewComment = () => {
        instance.post(`/comments/${props.articleID}`,{userID:cookie.userId,comment:text.text}).then(res=>{
            // console.log(res.data)
            //reset text value
            setText('')
            setUpdate(!update)
        }).catch(e=>console.log(e))
    }
    const getCommentsOfArticle = () => {
        instance.get(`/commentsMitUsers/${props.articleID}`).then(res => setState(res.data)).catch(e => console.log(e))
    }
    useEffect(getCommentsOfArticle, [props.articleID,update])
    let getText = (event) => {
        setText({...text, [event.target.name]: event.target.value.toString()})
    }
    return (<div>
            <Box m={2}>
                <Button color={"primary"}
                        variant={"contained"}
                        onClick={()=>setShowComment(!showComment)}>
                    {showComment?'Скрыть комментарии':"Показать комментарии"}
                </Button>
            </Box>
            {showComment&&
            <div> Комментарии
                {state && state.map(x => <div key={x.name + Math.random() * 90}>
                    <Box m={2} className={classes.userInfo}>
                        <Avatar  src={x.avatar} alt=""/>
                        <div>
                            <Typography>{x.name}</Typography>
                            <Typography variant={"caption"} >{Parse(x.date)}</Typography>
                        </div>
                    </Box>
                    <Paper elevation={2}>
                        <Typography variant={"caption"}>{x.comment}</Typography>
                    </Paper>
                </div>)}
                {cookie.authorized &&
                <Box m={2} className={classes.comments}>
                    <IconButton  color={"primary"}
                             onClick={() => setEnable(!enable)}
                             variant={"contained"}
                    ><CreateIcon/>
                    </IconButton>{enable && <><Box m={2}>
                        <TextField name="text"
                                   label={"Комментарий"}
                                   id="input"
                                   className="inputArea"
                                   onChange={getText}
                                   value={text ? text.text : ''}>
                        </TextField>
                        </Box>
                        <Box m={2}>
                            <Button variant={"contained"}
                                    color={"primary"}
                                    onClick={setNewComment}>Отослать</Button>
                        </Box>
                        </>

                    }
                </Box>}

            </div>}
        </div>
    )
}
export default Comments