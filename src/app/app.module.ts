import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaymentValidationComponent } from './payment-validation/payment-validation.component';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AllBookingsComponent } from './all-bookings/all-bookings.component';
import { BookingServiceService } from './booking-service.service';
import {HttpClientModule} from '@angular/common/http';
import { ChooseSeatsComponent } from './choose-seats/choose-seats.component';

@NgModule({
  declarations: [
    AppComponent,
    PaymentValidationComponent,
    AllBookingsComponent,
    ChooseSeatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,BookingServiceService]
})
export class AppModule { }
