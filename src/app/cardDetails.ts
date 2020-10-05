export class cardDetails{
  cardNumber:String;
  cvv:String;
  expiryDate:Date;

  constructor( cardNumber:String,cvv:String, expiryDate:Date)
  {
    this.cardNumber=cardNumber;
    this.cvv=cvv;
    this.expiryDate=expiryDate;
  }
}


