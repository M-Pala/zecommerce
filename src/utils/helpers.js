export const formatPrice = (number) =>{
    const newNumber = Intl.NumberFormat('em-US',{
        style: 'currency',
        currency: 'USD'
    }).format(number/100)
    return newNumber
}

export const getUniqueValues = (data, type) => {
    let unique = data.map((item)=>item[type])
    console.log(unique)
    if(type === 'colors'){
        console.log('here')
        unique = unique.flat()
    }
    return ['all',...new Set(unique)]
}