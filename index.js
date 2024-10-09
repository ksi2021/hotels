const getComputersCountString = (count)=>{
    let decimalPlace = count >= 10 ? count % 10 : Math.abs(count)

    if(decimalPlace === 0 || decimalPlace >= 5)
        return `${count} компьютеров`
    else if(decimalPlace === 1)
         return `${count} компьютер`
    
    else if(decimalPlace > 1 && decimalPlace < 5)
         return `${count} компьютера`

    return -1
}


const getArrayDivisors = (arr)=>{
    if(!Array.isArray(arr) || arr.length == 0 ) return []
    const minValueInArray = Math.min(...arr)
    let divisors = []
    for(let i = 2 ; i < minValueInArray ; i++){
        if(minValueInArray % i == 0) divisors.push(i);
    }

    for(let i = 0; i < arr.length ; i++){
        divisors = divisors.filter((divisor) => arr[i] % divisor == 0)
    }

    return divisors
}


const isPrime = (num) => {
    if (num < 2) return false
    if (num >=2 && num < 4) return true;
    for(let i = 2; i < num; i+=1)
        if(num % i == 0)return false
    return true
}
const getPrimeNumbers = (start , end)=>{
    let result = []
    for(let i = start ; i < end ; i++){
        isPrime(i) && result.push(i)
    }

    return result
}

const printMultiplicationTable = (value) =>{
    if (!value && value < 2) {
        console.log('invalid value')
        return
    }

    let result = "\t"
    for(let i = 1; i <= value ; i ++)
        result += i + "\t"

    for(let i = 1; i <= value; i++){
        result +='\n'+ i + "\t"
        for(let j = 1; j <= value; j++)
            result += (i * j) + "\t"
    }
    console.log(result)
}


