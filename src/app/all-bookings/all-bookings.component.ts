import { Component, OnInit } from '@angular/core';
import {Booking} from '../Booking';
import { BookingServiceService } from '../booking-service.service';

@Component({
  selector: 'app-all-bookings',
  templateUrl: './all-bookings.component.html',
  styleUrls: ['./all-bookings.component.css']
})
export class AllBookingsComponent implements OnInit {

  public bookings:Booking[]=[];

  constructor(private _bookingservice:BookingServiceService) { }

  ngOnInit(): void {
    this._bookingservice.getBookings().subscribe(data=> this.bookings=data);
  }

  onCancel(bookingId:number)
  {
    for(let i=0;i<this.bookings.length;i++)
    {
      if(this.bookings[i].bookingId==bookingId){
        if(confirm('Are you sure to Cancel your ticket??')){
           this.bookings.splice(i,1);
           this._bookingservice.cancelBooking(bookingId).subscribe();
        }
      }
      }

    }

  }


