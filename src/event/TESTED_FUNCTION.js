function tableConstruct(headers, data){
    let keySet = new Set()
    data.forEach((value, key) => {
         Object.keys(value).forEach(k => {
             keySet.add(k)
         })
    })
    let table = new Map()
    keySet.forEach((kSet) => {
        data.forEach((value, key) => {
            const element = table.get(kSet) || []
            const addValue = value[kSet] || ''
            table.set(kSet, [...element, addValue])
        })
    })
    table
    let tables = []
    table = [...table]
    table.forEach((value, key) => {
        let obj = {
            header: headers[key] || '',
            data: value[1]
        } //?
        tables.push(obj)
    })
    return tables
}

const head = ['Колонка 1','Колонка 2','Колонка 3','Колонка 4']//,'Колонка 5','Колонка 6','Колонка 7', 'Колонка 8','Колонка 9','Колонка 10']
const data = [{a: 1, b:2, c:3, d:4},{a: 1, c:3, d:4, f:5},{a: 1, b:2, c:3, d:4},{a: 1, b:2, c:3, d:4}]

//console.log(tableConstruct(head, data))
console.log(tableConstruct(head, data)) //?.