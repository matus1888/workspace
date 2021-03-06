import React, {useContext} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import {withRouter} from "react-router/";
import HomeIcon from '@material-ui/icons/Home';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import {Context} from "../../../App";

const useStyles = makeStyles((theme) => ({
    root: {
        height : "65px",
        flexDirection:"row",
        alignItems:"center"
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },

    button: {
        margin: "8px",
        backgroundColor: "yellow",
        color: "blue",
        "&:hover": {
            backgroundColor: "rgb(204,204,0)"
        }
    },
    menuIcon: {
        color: "yellow",

    },
    title: {
        color: "yellow",
        flexGrow: 1,
    },
    appBar: {
        backgroundColor: "brown"
    },
    blockButton:{
        left:"0"
    },
    toolBar:{
        width:"100%"
    }
}));

function ButtonAppBar({history}) {
    const smallLarge = useContext(Context)
    const classes = useStyles();
    let cookie = ''
    document.cookie === '' ? cookie = '{"authorized":false}' : cookie = JSON.parse(document.cookie)

    let loginOrOut = () => {
        return cookie.authorized ?
            (history.push(''),
                document.cookie = `{authorized:false,"userId":1}; max-age=0; secure`)
            : (history.push("/login"))
    }

    let blockButton = () => {
        return !smallLarge ?
            (<div className={classes.blockButton}>
                <Button variant={"contained"}
                        className={classes.button}
                        onClick={() => history.push("/")}
                >??????????</Button>
                <Button variant={"contained"}
                        className={classes.button}
                        onClick={() => history.push("/register")}
                >??????????????????????</Button>
                <Button variant={"contained"}
                        onClick={loginOrOut}
                        className={classes.button}>{cookie.authorized ? "??????????" : "??????????"}</Button>
            </div>) : (
                <div className={classes.blockButton}>
                    <IconButton size={"small"} variant={"contained"}
                                className={classes.button}
                                onClick={() => history.push("/")}
                    >
                        <HomeIcon/>
                    </IconButton>
                    <IconButton size={"small"} variant={"contained"}
                                className={classes.button}
                                onClick={() => history.push("/register")}
                    >
                        <PersonAddIcon/>
                    </IconButton>
                    <IconButton size={"small"} variant={"contained"}
                                onClick={loginOrOut}
                                className={classes.button}>
                        {cookie.authorized ? <MeetingRoomIcon fontSize={"small"}/> :
                            <ExitToAppIcon fontSize={"small"}/>}
                    </IconButton>
                </div>
            )
    }

    return (
        <AppBar className={classes.root}>
            <Toolbar className={classes.toolBar}>
                <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                    <MenuIcon className={classes.menuIcon}/>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    IT ???? ????????
                </Typography>
                {blockButton()}
            </Toolbar>
        </AppBar>
    );
}

export default withRouter(ButtonAppBar)