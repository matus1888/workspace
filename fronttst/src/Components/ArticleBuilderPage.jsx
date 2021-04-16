import './builder.css'
import TextEditor from "./BulderFields/TextEditor";


const ArticleBuilderPage =(props)=>{
    return (<div id={'wrapper'}>
        <div id={'header'}>Напиши свою статью для блога</div>
        <div id={'body'}>
            <span  id={'a'}>
                <TextEditor/>
            </span>
        </div>

    </div>)

}
export default ArticleBuilderPage