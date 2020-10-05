export class Ticket
{
  ticketId:number;
  noOfSeats:number;
	seatName:string;
  bookingId:number;
  ticketStatus:boolean;
  screenName:string;

  constructor(ticketId:number, noOfSeats:number,seatName:string, bookingId:number,ticketStatus:boolean,screenName:string)
  {
this.ticketId=ticketId;
this.noOfSeats=noOfSeats;
this.seatName=seatName;
this.bookingId=bookingId;
this.ticketStatus=ticketStatus;
this.screenName=screenName;

  }
}
