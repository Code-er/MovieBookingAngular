export class Seats
{
  name:string;
  value:string;
  checked:boolean;
  seatPrice:number;

  constructor(name:string, value:string, checked:boolean, seatPrice:number)
  {
    this.name=name;
    this.value=value;
    this.checked=checked;
    this.seatPrice=seatPrice;
  }
}
