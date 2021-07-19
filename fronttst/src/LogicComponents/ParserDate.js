const ParserDate = (date) => {
    if (date) {
        let newDate=date.replace("T", "   Время: ")
        let array = newDate.split('.')
        let result = array[0]
        return result
    }
    return 'нет данных о дате и времени'
}
export default ParserDate