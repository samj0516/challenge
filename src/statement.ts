// import { MovieId } from "./Movie";
import { rentalAmount, calculatePoints } from "./MovieTypes";


export const statement = (customer: any, movies: any, movieTypes: any): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `Rental Record for ${customer.name}\n`;
  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let movieType = movieTypes[movie.code]
    let thisAmount = 0;
    thisAmount = rentalAmount(movieType, r.days)
    
    frequentRenterPoints += calculatePoints(movieType.bonus)
   
    result += `\t${movie.title}\t${thisAmount}\n`;
    totalAmount += thisAmount;
  }
  result += `Amount owed is ${totalAmount}\n`;
  result += `You earned ${frequentRenterPoints} frequent renter points\n`;

  return result;
};


export const htmlStatement = (customer: any, movies: any, movieTypes: any): string => {
  let totalAmount = 0;
  let frequentRenterPoints = 0;
  let result = `<h1>Rental Record for <em>${customer.name}</em></h1>\n`;
  if (customer.rentals.length > 0){
    result += '<ul>\n'
  }

  for (let r of customer.rentals) {
    let movie = movies[r.movieID];
    let movieType = movieTypes[movie.code]
    let thisAmount = 0;
    thisAmount = rentalAmount(movieType, r.days)
    
    frequentRenterPoints += calculatePoints(movieType.bonus)
   
    result += `\t<li>${movie.title} - ${thisAmount}</li>\n`;
    totalAmount += thisAmount;
    
  }
  result += '</ul>\n'
  result += `<p>Amount owed is <em>${totalAmount}</em></p>\n`;
  result += `<p>You earned <em>${frequentRenterPoints}</em> frequent renter points\n`;

  return result;
};