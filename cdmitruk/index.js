let data = prompt(' введи первую ячейку данных например G8', 'G8')
let outputData = prompt('введи первую ячейку выходных данных  например G45', 'G45')
let dataEnd = prompt('введи последнюю ячейку входных данных  например M36', 'M36')
let sdfsd=outputData.split('')
sdfsd.shift()
let rowProces=Number(sdfsd.join(''))-1
let varriables = 'G'+rowProces+ ' H'+rowProces +' I'+rowProces
let mVar = varriables.split(' ')
let proc1 = mVar[0]
let proc2 = mVar[1]
let delevery = mVar[2]
const alphabet = 'A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
let masA = alphabet.split(' ')
let generateFormula = (indexIn, indexOut, percentOne, percentTwo, delivery) => {
    let base = indexIn + '+' + indexIn + '*' + percentOne + "+" + delivery
    let result = '=' + base + "+(" + base + ")*" + percentTwo
    return result
}
let getRows = () => {
    let x = data.split('')
    x.shift()
    let y = dataEnd.split('')
    y.shift()
    let xx = Number(x.join(''))
    let yy = Number(y.join(''))
    return yy - xx
    //28 строк в  примере
}
let getOutColumns = () => {
    let x = data.split('')[0]
    let y = dataEnd.split('')[0]
    let masB = []
    let job = false
    for (i in masA) {
        // console.log(job, '  i='+i,' x='+x, ' y='+y )
        if (masA[i] === x) {
            job = true
        }
        if (job) {
            masB.push(masA[i])
        }
        if (masA[i] === y) {
            job = false
        }
    }
    return masB
    //     ["G", "H", "I", "J", "K", "L", "M"] returned
}
let getStaticRows = () => {
    let stRow = data.split('')
    stRow.shift()
    let startRow = Number(stRow.join(''))
    let stpRow = outputData.split('')
    stpRow.shift()
    let stopRow = Number(stpRow.join(''))
    let result = stopRow - startRow
    return result
}
let generateAllformulas = () => {
    let str = ''
    let columns = getOutColumns()
    let rows = getRows()
    let st = outputData.split('')
    let s = getStaticRows()
    st.shift()
    let startRow = Number(st.join(''))
    for (let k = startRow; k <= startRow + rows; k++) {
        for (j in columns) {
            let indexIn = columns[j] + '' + (k - s)
            let indexOut = columns[j] + '' + k
            // console.log('indexIn='+indexIn,' indexOut='+ indexOut )
            str = str + generateFormula(indexIn, indexOut, proc1, proc2, delevery)
            str = str + '\t'
        }
        str = str + '\n'
    }
    return str
}
navigator.clipboard.writeText(generateAllformulas())
    .then(() => {
        alert('текст скоирован в буфер обмена')
    })
    .catch(err => {
        console.log('Что то пошло не так...', err);
    });
// console.log(generateAllformulas())
