import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {Booking} from './Booking';
import { cardDetails } from './cardDetails';
import { Ticket } from './Ticket';
import {Seats} from './Seats';

@Injectable({
  providedIn: 'root'
})
export class BookingServiceService {

  private _url:string="http://localhost:1112/getAllBookingsByCustomerId/ashish" ;

  private _urlCancel:string="http://localhost:1112/cancelBooking" ;

  private _urlAddBooking:string="http://localhost:1112/addBooking";

  private _urlgetSeats="/assets/seatsList.json";

  constructor(private _http:HttpClient) { }

  getBookings():Observable<Booking[]>
  {
    return this._http.get<Booking[]>(this._url);
  }

  addBooking(booking:Booking,carddetails:cardDetails):Observable<Ticket>
  {
    return this._http.post<Ticket>(this._urlAddBooking, {'booking':booking,'carddetails':carddetails  })
  }

  cancelBooking(bookingId:number)
  {
    return this._http.delete(this._urlCancel +'/'+ bookingId);
  }

  getSeats():Observable<Seats[]>
  {
    return this._http.get<Seats[]>(this._urlgetSeats);
  }
}
