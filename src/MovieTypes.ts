export interface MovieType {
    rate: number,
    rateDays: number,
    extra: number,
    bonus: number
}

// calculates the price of each movie rental
export function rentalAmount(movieType:any, days:number):number {
    let {rate, rateDays, extra} = movieType
     rate += (days - rateDays) * extra 
     return rate
}

// calculates the frequentRenterPoints earned for each movie rental
export function calculatePoints(bonus:number){
    let points = 1
    points += bonus
    return points
}