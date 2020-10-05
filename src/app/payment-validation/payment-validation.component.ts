import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl, FormGroup} from '@angular/forms';
import { Observable } from 'rxjs';
import { Booking } from '../Booking';
import { BookingServiceService } from '../booking-service.service';
import { cardDetails } from '../cardDetails';
import {Ticket} from '../Ticket';

@Component({
  selector: 'app-payment-validation',
  templateUrl: './payment-validation.component.html',
  styleUrls: ['./payment-validation.component.css']
})
export class PaymentValidationComponent implements OnInit {
  //name=new FormControl('');
  myForm:FormGroup;
   ticket:Ticket;


  constructor(private _formbuild:FormBuilder, public _bookingservice: BookingServiceService) { }

  onSubmit()
  {
   let card:cardDetails= new cardDetails(this.myForm.get('cardNumber').value ,
    this.myForm.get('cvv').value,
    this.myForm.get('expiry').value)
let booking:Booking=new Booking('shubham',null,1234,1,null,null,4,800);

this._bookingservice.addBooking(booking,card).subscribe(data=>{this.ticket=data;
  console.log(this.ticket);});

  }

  ngOnInit(): void {
this.myForm=this._formbuild.group({
  cardNumber:'',
  cvv:'',
  expiry:''

})
//this.myForm.valueChanges.subscribe(console.log)

  }

}
