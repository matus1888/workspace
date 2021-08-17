import React, {useContext, useEffect, useState} from 'react';
import LinearProgress from "@material-ui/core/LinearProgress"
import {withRouter} from "react-router";
import Box from "@material-ui/core/Box"
import {instance} from "../../Register/RegisterPage";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {Grid, makeStyles} from "@material-ui/core";
import red from "@material-ui/core/colors/red";
import clsx from "clsx";
import Button from "@material-ui/core/Button";
import {Context} from "../../../App";
import Parser from "../../../LogicComponents/ParserDate";
import MarkdownView from "react-showdown";
import Likes from "../../Likes/Variant/Likes";
import Typography from "@material-ui/core/Typography";

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
        height: "50px",
        width: "50px",
        backgroundColor: red[500],
    },
    gridItem: {
        display: "flex",
        justifyContent: "center"
    },
    linear:{
        position:"fixed",
        top:"65px",
        width:"100vw"
    }
}));

const Home = ({history}) => {
    const [state, setState] = useState(null)
    const [users, setUsers] = useState(null)
    const [paginate, setPaginate] = useState(1)
    const [limit, setLimit] = useState(false)
    const [enable, setEnable] = useState(false)
    const classes = useStyles()
    const [expanded, setExpanded] = useState(false)
    const small = useContext(Context)

    const getUserAvatar = (userId) => {
        let hasAvatar = users.filter(el => el.id === userId)[0].avatar !== undefined
        return hasAvatar ? users.filter(el => el.id === userId)[0].avatar : ""
    }
    const handleExpandClick = (id) => {
        setExpanded(!expanded)
        history.push(`/one_article/${id}`)
        window.scroll(0, 0)
    }
    useEffect(() => {
        let TO = setTimeout(() => {
            setEnable(true)
        }, 3000)
        instance(`/users`).then(res => {
            setUsers(res.data)
        }).catch((e) => console.log(e))
        instance.get(`/articles/${paginate}`).then((res) => {
            setState(res.data)
            clearTimeout(TO)
            setEnable(false)
            if (res.data.length === 0) {
                setLimit(true)
                setPaginate(paginate - 1)
            } else if (res.data.length < 9) {
                setLimit(true)
            }
        }).catch((error) => console.log(error))
    }, [paginate])

    return (
        <> <Typography variant={"h5"} paragraph>Главная страница</Typography>
            <Grid container spacing={2}>
                {state && users ? state.map(x =>
                    <Grid key={x.id.toString()+x.heading}
                          className={classes.gridItem}
                          item xs={small ? 12 : 4}>
                        <Card elevation={5} className={classes.root}>
                            {/*{console.log(x)}*/}
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        {/*Todo letterAvatar*/}
                                        <img className={classes.avatar} src={getUserAvatar(x.userid)} alt=""/>
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title={x.heading}
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
                                        aria-expanded={expanded}
                                        aria-label="show more"
                                    >
                                        <ExpandMoreIcon  onClick={() => handleExpandClick(x.id)} />
                                    </IconButton>
                            </CardActions>
                        </Card>
                    </Grid>) : (<div>
                        <LinearProgress  className={classes.linear} />
                        {enable && <Box m={3}>
                            <Typography>
                                К сожалению удалённый сервер не прислал ответа
                            </Typography>
                        </Box>}
                    </div>
                )}
            </Grid>
            {!limit &&<Box m={2}>
                <Button variant={"contained"}
                        color={"primary"}
                        onClick={() => setPaginate(paginate + 1)}
                >Показать еще
                </Button>
            </Box>}
            {paginate >= 2 && <Box m={2}>
                <Button variant={"contained"} color={"primary"} onClick={() => {
                setPaginate(paginate - 1)
                setLimit(false)
            }}>Показать предидущие</Button>
            </Box>}
        </>

    );
};

export default withRouter(Home);