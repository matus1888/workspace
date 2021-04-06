import './Add.css'
import {useState} from "react";
import axios from "axios";

const AddNewString = () => {
    const [state, setState] = useState(null)
    let addStr = () => {
        axios.post('http://localhost:3000/add',state ).catch(e=>{
            console.log(e)})
    }

    let getText = (event) => {
        setState({...state, [event.target.name]: event.target.value})
    }
    return (<div className={'div'}>
    <input name={'input'} type="text" onChange={getText}/>

    <button onClick={() => {
        addStr()
        console.log(state)
    }}>добавить строчку в мой файл
    </button>
</div>
)
}

export default AddNewString