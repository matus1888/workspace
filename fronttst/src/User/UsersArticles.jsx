import {useParams} from "react-router";

const UserArticles = () => {
    let {id}= useParams()
    return (<div><h2>Здесь находится список статей пользователя {id}</h2></div>)
}
export default UserArticles