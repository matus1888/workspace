import React, {useContext, useEffect, useState} from 'react';
import {withRouter} from "react-router";
import {instance} from "../../Register/RegisterPage";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Grid, makeStyles} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import clsx from "clsx";
import {Context} from "../../../App";
import Parser from "../../../LogicComponents/ParserDate";
import MarkdownView from "react-showdown";
import Likes from "../../Likes/Variant/Likes";

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        height:"50px",
        width: "50px",
        backgroundColor: red[500],
    },
    gridItem:{
        display:"flex",
        justifyContent:"center"
    }
}));

const Home = ({history}) => {
    const [state, setState] = useState(null)
    const [users, setUsers] = useState(null)
    const [paginate, setPaginate] = useState(1)
    const [limit, setLimit]= useState(false)
    const [enable, setEnable]= useState(false)
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const small=useContext(Context)

    const getUserAvatar=(userId)=>{
        let hasAvatar=users.filter(el=>el.id===userId)[0].avatar!==undefined
        return  hasAvatar? users.filter(el=>el.id===userId)[0].avatar:""
    }
    const handleExpandClick = (id) => {
        setExpanded(!expanded)
        history.push(`/one_article/${id}`)
        window.scroll(0,0)
    }
    useEffect(() => {
        let TO=setTimeout(()=> {
            setEnable(true)
        },3000)
        instance(`/users`).then(res => {
            setUsers(res.data)
        }).catch((e) => console.log(e))
        instance.get(`/articles/${paginate}`).then((res) => {
            setState(res.data)
            clearTimeout(TO)
            setEnable(false)
            if(res.data.length===0){
                setLimit(true)
                setPaginate(paginate-1)
            }else if(res.data.length<9){
                setLimit(true)
            }
        }).catch((error) => console.log(error))
    }, [paginate])

    return (
        <> <Grid container spacing={2}>
            {state && users ? state.map(x =>
                <Grid className={classes.gridItem} item xs={small?12:4}>
                    <Card elevation={5} className={classes.root}>
                        <CardHeader
                            avatar={
                                <Avatar aria-label="recipe" className={classes.avatar}>
                                    {/*Todo letterAvatar*/}
                                    <img className={classes.avatar} src={getUserAvatar(x.userid)} alt="" />
                                </Avatar>
                            }
                            action={
                                <IconButton aria-label="settings">
                                    <MoreVertIcon />
                                </IconButton>
                            }
                            title="Shrimp and Chorizo Paella"
                            subheader={Parser(x.date)}
                        />
                        <CardContent>
                            <MarkdownView className="card-text"
                                          style={{"height": "40vmin", "overflow": "auto"}}
                                          id={'output'}
                                          markdown={x.body}
                                          options={{emoji: true}}/>
                        </CardContent>
                        <CardActions disableSpacing>
                            {/*Todo валит сервак*/}
                            <Likes articleID={x.id} userID={x.userid}></Likes>
                            <IconButton
                                className={clsx(classes.expand, {
                                    [classes.expandOpen]: expanded,
                                })}
                                onClick={()=>handleExpandClick(x.id)}
                                aria-expanded={expanded}
                                aria-label="show more"
                            >
                                <ExpandMoreIcon />
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>):(<div>обработка исключительной ситуации</div>)}

            </Grid>
                </>

    );
};

export default withRouter(Home);