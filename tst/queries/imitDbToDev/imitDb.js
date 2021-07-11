const {Hasher}=require('../../ubuntuDeploy/sha')


const tableUsers=[
    {id: 1, name: "matus" ,avatar :"https://e7.pngegg.com/pngimages/199/296/png-clipart-creative-zebra-avatar-art-colored-glasses.png", password:"7ca0a0ecb3ad6ac8d82337e88e4586735c7846af0e7216c65b4007c8c9b4115f"},
    {id: 2, name: "atus" ,avatar :"https://cs4.pikabu.ru/images/big_size_comm/2016-01_3/145262076912685629.gif", password:"cryptedPass"},
    {id: 3, name: "patus" ,avatar :"https://cs4.pikabu.ru/images/big_size_comm/2016-01_3/145262076912685629.gif", password:"cryptedPass"},
    {id: 4, name: "batus" ,avatar :null, password:"cryptedPass"}
]
const tableArticles=[
    {id:1, heading:"head of my article",body: 'Links\n' +
            '-----\n' +
            '\n' +
            '- You can insert links in text like [this](/tutorial.md)\n' +
            '\n' +
            '- You may add a [title](https://agea.github.io/tutorial.md "Markdown Tutorial") to your link (can you see the tooltip?)\n' +
            '\n' +
            '- If your link contains spaces you have to write the [link](<http://example.com/a space>) between `<>`\n' +
            '\n' +
            '- You can use spaces and markup inside the [link **text**](https://agea.github.io/tutorial.md)\n' +
            '\n' +
            '- Long links may decrease source readability, so it\'s posible to define all links somewhere in the document (the end is a good place) and just reference the [link][tutorial.md], you may also collapse the reference if it matches the link text (example:  [tutorial.md][])\n' +
            '\n' +
            '- You may also write directly the link: <https://agea.github.io/tutorial.md>\n' +
            '\n' +
            '- It will work also for email addresses: <email@example.com> (you may write vaild email links also using [mailto](mailto:email@example.com) as protocol)\n' +
            '\n' +
            '\n' +
            '[tutorial.md]: https://agea.githu', userID: 1},
    {id:2, heading:"Руководство по созданию MarkDown разметки",body: '# GitHub-Flavored Markdown\n' +
            '\n' +
            '## Краткое руководство\n' +
            '\n' +
            'Абзацы создаются при помощи пустой строки. Если вокруг текста сверху и снизу есть пустые строки, то текст превращается в абзац.\n' +
            '\n' +
            'Чтобы сделать перенос строки вместо абзаца,  \n' +
            'нужно поставить два пробела в конце предыдущей строки.\n' +
            '\n' +
            'Заголовки отмечаются диезом `#` в начале строки, от одного до шести. Например:\n' +
            '\n' +
            '# Заголовок первого уровня #\n' +
            '## Заголовок h2\n' +
            '### Заголовок h3\n' +
            '#### Заголовок h4\n' +
            '##### Заголовок h5\n' +
            '###### Заголовок h6\n' +
            '\n' +
            'В декоративных целях заголовки можно «закрывать» с обратной стороны.\n' +
            '\n' +
            '### Списки\n' +
            '\n' +
            'Для разметки неупорядоченных списков можно использовать или `*`, или `-`, или `+`:\n' +
            '\n' +
            '- элемент 1\n' +
            '- элемент 2\n' +
            '- элемент ...\n' +
            '\n' +
            'Вложенные пункты создаются четырьмя пробелами перед маркером пункта:\n' +
            '\n' +
            '* элемент 1\n' +
            '* элемент 2\n' +
            '    * вложенный элемент 2.1\n' +
            '    * вложенный элемент 2.2\n' +
            '* элемент ...\n' +
            '\n' +
            'Упорядоченный список:\n' +
            '\n' +
            '1. элемент 1\n' +
            '2. элемент 2\n' +
            '    1. вложенный\n' +
            '    2. вложенный\n' +
            '3. элемент 3\n' +
            '4. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.\n' +
            '\n' +
            'На самом деле не важно как в коде пронумерованы пункты, главное, чтобы перед элементом списка стояла цифра (любая) с точкой. Можно сделать и так:\n' +
            '\n' +
            '0. элемент 1\n' +
            '0. элемент 2\n' +
            '0. элемент 3\n' +
            '0. элемент 4\n' +
            '\n' +
            'Список с абзацами:\n' +
            '\n' +
            '* Раз абзац. Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
            '\n' +
            '* Два абзац. Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse id sem consectetuer libero luctus adipiscing.\n' +
            '\n' +
            '* Три абзац. Ea, quis, alias nobis porro quos laborum minus sed fuga odio dolore natus quas cum enim necessitatibus magni provident non saepe sequi?\n' +
            '\n' +
            '    Четыре абзац (Четыре пробела в начале или один tab).\n' +
            '\n' +
            '### Цитаты\n' +
            '\n' +
            'Цитаты оформляются как в емейлах, с помощью символа `>`.\n' +
            '\n' +
            '> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\n' +
            '> consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\n' +
            '> Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n' +
            '>\n' +
            '> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\n' +
            '> id sem consectetuer libero luctus adipiscing.\n' +
            '\n' +
            'Или более ленивым способом, когда знак `>` ставится перед каждым элементом цитаты, будь то абзац, заголовок или пустая строка:\n' +
            '\n' +
            '> This is a blockquote with two paragraphs. Lorem ipsum dolor sit amet,\n' +
            'consectetuer adipiscing elit. Aliquam hendrerit mi posuere lectus.\n' +
            'Vestibulum enim wisi, viverra nec, fringilla in, laoreet vitae, risus.\n' +
            '>\n' +
            '> Donec sit amet nisl. Aliquam semper ipsum sit amet velit. Suspendisse\n' +
            'id sem consectetuer libero luctus adipiscing.\n' +
            '\n' +
            'В цитаты можно помещать всё что угодно, в том числе вложенные цитаты:\n' +
            '\n' +
            '> ## This is a header.\n' +
            '>\n' +
            '> 1.   This is the first list item.\n' +
            '> 2.   This is the second list item.\n' +
            '>\n' +
            '> > Вложенная цитата.\n' +
            '>\n' +
            '> Here\'s some example code:\n' +
            '>\n' +
            '>     return shell_exec("echo $input | $markdown_script");\n' +
            '\n' +
            '### Исходный код\n' +
            '\n' +
            'В чистом Маркдауне блоки кода отбиваются 4 пробелами в начале каждой строки.\n' +
            '\n' +
            'Но в GitHub-Flavored Markdown (сокращенно GFM) есть более удобный способ: ставим по три апострофа (на букве Ё) до и после кода. Также можно указать язык исходного кода.\n' +
            '\n' +
            '```html\n' +
            '<nav class="nav nav-primary">\n' +
            '  <ul>\n' +
            '    <li class="tab-conversation active">\n' +
            '      <a href="#" data-role="post-count" class="publisher-nav-color" data-nav="conversation">\n' +
            '        <span class="comment-count">0 комментариев</span>\n' +
            '        <span class="comment-count-placeholder">Комментарии</span>\n' +
            '      </a>\n' +
            '    </li>\n' +
            '    <li class="dropdown user-menu" data-role="logout">\n' +
            '      <a href="#" class="dropdown-toggle" data-toggle="dropdown">\n' +
            '        <span class="dropdown-toggle-wrapper">\n' +
            '          <span>\n' +
            '            Войти\n' +
            '          </span>\n' +
            '        </span>\n' +
            '        <span class="caret"></span>\n' +
            '      </a>\n' +
            '    </li>\n' +
            '  </ul>\n' +
            '</nav>\n' +
            '```\n' +
            '\n' +
            'Самое приятное, что в коде не нужно заменять угловые скобки `< >` и амперсанд `&` на их html-сущности.\n' +
            '\n' +
            '### Инлайн код\n' +
            '\n' +
            'Для вставки кода внутри предложений нужно заключать этот код в апострофы (на букве Ё). Пример: `<html class="ie no-js">`.\n' +
            '\n' +
            'Если внутри кода есть апостроф, то код надо обрамить двойными апострофами: ``There is a literal backtick (`) here.``\n' +
            '\n' +
            '### Горизонтальная черта\n' +
            '\n' +
            '`hr` создается тремя звездочками или тремя дефисами.\n' +
            '\n' +
            '***\n' +
            '\n' +
            '### Ссылки\n' +
            '\n' +
            'Это встроенная [ссылка с title элементом](http://example.com/link "Я ссылка"). Это — [без title](http://example.com/link).\n' +
            '\n' +
            'А вот [пример][1] [нескольких][2] [ссылок][id] с разметкой как у сносок. Прокатит и [короткая запись][] без указания id.\n' +
            '\n' +
            '[1]: http://example.com/ "Optional Title Here"\n' +
            '[2]: http://example.com/some\n' +
            '[id]: http://example.com/links (Optional Title Here)\n' +
            '[короткая запись]: http://example.com/short\n' +
            '\n' +
            'Вынос длинных урлов из предложения способствует сохранению читабельности исходника. Сноски можно располагать в любом месте документа.\n' +
            '\n' +
            '### Emphasis\n' +
            '\n' +
            'Выделять слова можно при помощи `*` и `_`. Одним символ для наклонного текста, два символа для жирного текста, три — для наклонного и жирного одновременно.\n' +
            '\n' +
            'Например, это _italic_ и это тоже *italic*. А вот так уже __strong__, и так тоже **strong**. А так ***жирный и наклонный*** одновременно.\n' +
            '\n' +
            '### Зачеркивание\n' +
            '\n' +
            'В GFM добавлено зачеркивание текста: две тильды `~` до и после текста.\n' +
            '\n' +
            '~~Зачеркнуто~~\n' +
            '\n' +
            '## Картинки\n' +
            '\n' +
            'Картинка без `alt` текста\n' +
            '\n' +
            '![](//placehold.it/150x100)\n' +
            '\n' +
            'Картинка с альтом и тайтлом:\n' +
            '\n' +
            '![Alt text](//placehold.it/150x100 "Можно задать title")\n' +
            '\n' +
            'Запомнить просто: синтаксис как у ссылок, только перед открывающей квадратной скобкой ставится восклицательный знак.\n' +
            '\n' +
            'Картинки «сноски»:\n' +
            '\n' +
            '![Картинка][image1]\n' +
            '![Картинка][image2]\n' +
            '![Картинка][image3]\n' +
            '\n' +
            '[image1]: //placehold.it/250x100\n' +
            '[image2]: //placehold.it/200x100\n' +
            '[image3]: //placehold.it/150x100\n' +
            '\n' +
            'Картинки-ссылки:\n' +
            '\n' +
            '[![Alt text](//placehold.it/150x100)](http://example.com/)\n' +
            '\n' +
            '\n' +
            '## Использование HTML внутри Markdown\n' +
            '\n' +
            'Mожно смешивать Markdown и HTML. Если на какие-то элементы нужно поставить классы или атрибуты, смело используем HTML:\n' +
            '\n' +
            '> Выделять слова можно при помощи * и _ . Например, это <em class="a1">italic</em> и это тоже <i class="a1">italic</i>. А вот так уже <b>strong</b>, и так тоже <strong>strong</strong>.\n' +
            '\n' +
            'Можно и наоборот, внутри HTML-тегов использовать Маркдаун.\n' +
            '\n' +
            '<section class="someclass">\n' +
            '\n' +
            '### Пример Маркдауна внутри HTML\n' +
            '\n' +
            'Выделять слова можно при помощи `*` и `_` . Например, это _italic_ и это тоже *italic*. А вот так уже __strong__, и так тоже **strong**.\n' +
            '\n' +
            '</section>\n' +
            '\n' +
            '### Таблицы\n' +
            '\n' +
            'В чистом Маркдауне нет синтаксиса для таблиц, а в GFM есть.\n' +
            '\n' +
            'First Header  | Second Header\n' +
            '------------- | -------------\n' +
            'Content Cell  | Content Cell\n' +
            'Content Cell  | Content Cell\n' +
            '\n' +
            'Для красоты можно и по бокам линии нарисовать:\n' +
            '\n' +
            '| First Header  | Second Header |\n' +
            '| ------------- | ------------- |\n' +
            '| Content Cell  | Content Cell  |\n' +
            '| Content Cell  | Content Cell  |\n' +
            '\n' +
            'Можно управлять выравниванием столбцов при помощи двоеточия.\n' +
            '\n' +
            '| Left-Aligned  | Center Aligned  | Right Aligned |\n' +
            '|:------------- |:---------------:| -------------:|\n' +
            '| col 3 is      | some wordy text |     **$1600** |\n' +
            '| col 2 is      | centered        |         $12   |\n' +
            '| zebra stripes | are neat        |        ~~$1~~ |\n' +
            '\n' +
            'Внутри таблиц можно использовать ссылки, наклонный, жирный или зачеркнутый текст.\n' +
            '\n' +
            'Для всего остального есть обычный HTML.\n', userID: 1},
    {id:3, heading:"head of my article",body: 'text of my article', userID: 2},
    {id:4, heading:"head of my article",body: 'text of my article', userID: 2},
    {id:6, heading:"head of my article",body: 'text of my article', userID: 3},
    {id:7, heading:"head of my article",body: 'text of my article', userID: 3},
    {id:8, heading:"head of my article",body: 'text of my article', userID: 3},
    {id:9, heading:"head of my article",body: 'text of my article', userID: 1},
    {id:10, heading:"head of my article",body: 'text of my article', userID: 3},
]
const getUsers = (request,response) => {
   response.status(200).json(tableUsers)
}
const getUserByName = (req, res) => {
    const name = String(req.params.name)
    const result=tableUsers.filter(el=>el.name===name)
    res.status(200).json(result)
}
const getUserByNameWithPass = (req, res) => {
    const name = String(req.params.name)
    const pass= String(req.params.pass)
    const hashedPass=Hasher(pass)
    const result=tableUsers.filter(el=>el.name===name)
    if(result[0].password===hashedPass){
        let respon=result[0]
        respon.password='ok'
        res.status(200).json([respon])
    }else{
        res.status(500)
    }
}
const getUserById=(req, res)=>{
    const id = Number(req.params.id)
    const result=tableUsers.filter(el=>el.id===id)
    res.status(200).json(result)
}
const createUser = (request, response) => {
    const name=String(request.params.name)
    const pass=String(request.body.password)
    const cryptoPass=Hasher(pass)
    response.status(200).json(cryptoPass)
}

const getArticles = (request, response) => {
        response.status(200).json(tableArticles)
}
//todo
const getArticlesByUserID = (request, response) => {
    const id = Number(request.params.id)
    const result=tableArticles.filter(el=>el.userID===id)
        response.status(200).json(result)
}
//todo
const getArticleByID = (request, response) => {
    const id = Number(request.params.id)
    let filter = tableArticles.filter(el=>el.id===id);
        response.status(200).json(filter)
}
// const createArticle = (request, response) => {
//     const heading=String(request.body.heading)
//     const userId=String(request.params.id)
//     const text=String(request.body.text)
//     // console.log(userId,',heading:',heading, ',text:',text)
//
//     pool.query('INSERT INTO articles (heading, userid, body) VALUES ($1, $2, $3)', [heading,  userId, text], (error, results) => {
//         if (error) {
//             response.status(500).send(error)
//             throw error
//         }
//         response.status(201).send({text:'you added Article:'+text})
//     })
// }
// const updateArticle = (request, response) => {
//     const heading=String(request.body.heading)
//     const userId=String(request.params.id)
//     const text=String(request.body.text)
//
//     pool.query(
//         'UPDATE articles SET userid=$2, body=$3 WHERE heading = $1',
//         [heading,  userId, text],
//         (error, results) => {
//             if (error) {
//                 response.status(500).send(error)
//                 throw error
//             }
//             response.status(203).send({text: 'you update article with heading:'+heading+' and text:'+text})
//         }
//     )
// }
// const deleteArticle = (request, response) => {
//     const heading=String(request.body.heading)
//     const userId=String(request.params.id)
//
//     pool.query('DELETE FROM articles WHERE heading = $1 AND userid=$2', [heading, userId], (error, results) => {
//         if (error) {
//             response.status(500).send(error)
//             throw error
//         }
//         response.status(200).send({text:'you delete article with heading:'+heading})
//     })
// }
module.exports = {
    getUsers,
    getUserByName,
    getArticlesByUserID,
    getArticleByID,
    getArticles,
    getUserById,
    createUser,
    getUserByNameWithPass

}