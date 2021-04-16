import {useParams} from "react-router";

const UserArticles = () => {
    let {id} = useParams()
    return (<div><h2>{console.log({id})}UserArticles {id}</h2></div>)
}
export default UserArticles