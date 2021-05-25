export const percentageCalculationObject = (obj, max = 100, defaultElement = 0) => {
    if (Object.entries(obj).length === 0) return {}
    const sumValueObject = obj => Object.values(obj).reduce((acc, value) =>  acc + Number(value))
    const output = {}
    const sum = sumValueObject(obj) || 100
    Object.entries(obj).forEach(item => {
        const key = 0, value = 1
        output[item[key]] = Math.round((item[value] * max) / sum)
    })
    const outputSum = sumValueObject(output)
    if(output[defaultElement]) output[defaultElement] += max - outputSum
    else output[Object.entries(output)[0][0]] += max - outputSum
    return output
}

export const createMetaMenu = obj => {
    return {
        type: obj.type || false,
        name: obj.name || 'name error',
        title: obj.title || 'title error',
        icon: obj.icon || 'exclamation-triangle',
        position: obj.position || 0,
        parent: obj.parent || ''
    }
}