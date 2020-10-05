export class Booking
{
  userName:string;
  bookingId:number;
  movieId:number;
  showId:number;
  bookingDate:Date;
  transactionId:String;
  noOfSeats:number;
  totalCost:number;

constructor(userName:string,bookingId:number,movieId:number,showId:number,bookingDate:Date,transactionId:String,noOfSeats:number,totalCost:number)
{
this.userName=userName;
this.bookingId=bookingId;
this.movieId=movieId;
this.showId=showId;
this.bookingDate=bookingDate;
this.transactionId=transactionId;
this.noOfSeats=noOfSeats;
this.totalCost=totalCost;
}
}


