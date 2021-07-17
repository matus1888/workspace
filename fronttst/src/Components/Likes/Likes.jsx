import React from 'react'
import {withRouter} from "react-router";

const Likes = (props) => {
    // const[state,setState]=useState(null)
    // useEffect(()=> {
    //     instance.get(`/likes/${props.articleID}`).then(res =>
    //         {}
    //     ).catch(e => console.log(e))
    // })
    return (<div>
            <span className='container ma-3'>Like
            <span className="container ma-3">Dislike</span>
            <span>  counter</span>
    </span>
    </div>)
}

export default withRouter(Likes)