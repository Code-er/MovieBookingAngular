import { Component, OnInit } from '@angular/core';
import { BookingServiceService } from '../booking-service.service';
import { Seats } from '../Seats';

@Component({
  selector: 'app-choose-seats',
  templateUrl: './choose-seats.component.html',
  styleUrls: ['./choose-seats.component.css']
})
export class ChooseSeatsComponent implements OnInit {



  constructor(private _bookingservice: BookingServiceService) { }

  ngOnInit(): void {

  }



}
