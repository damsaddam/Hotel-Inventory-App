import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  FormArray,
  Validators,
} from '@angular/forms';
import { ConfigService } from '../services/config.service';
import { BookingService } from './booking.service';
import { exhaustMap, map, mergeMap, switchMap } from 'rxjs';
import { CustomValidator } from './validators/custom-validator';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'hiapp-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {
  /* Use Reactive Forms */
  bookingForm!: FormGroup;
  get guests() {
    return this.bookingForm.get('guests') as FormArray;
  }
  constructor(private configService: ConfigService, private fb: FormBuilder, private bookingService: BookingService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    const roomNumber = this.router.snapshot.paramMap.get('roomnumber');
    this.bookingForm = this.fb.group({
      /* new FormControl('') and [''] are the same thing namely creating a form control. */
      roomNumber: new FormControl(
        { value: roomNumber, disabled: true },
        { validators: [Validators.required] },
      ),
      guestEmail: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.email],
        }],
      checkinDate: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required]
        }],
      checkoutDate: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required]
        }],
      bookingStatus: [
        '',
        {
          updateOn: 'blur',
        }],
      bookingAmount: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required]
        }],
      bookingDate: [
        '',
        {
          updateOn: 'blur',
        }],
      mobileNumber: [
        '',
        {
          updateOn: 'blur',
        }],
      guestName: [
        '',
        {
          updateOn: 'blur',
          validators: [Validators.required, Validators.minLength(3), CustomValidator.ValidateName, CustomValidator.ValidateSpecialChar('*'), CustomValidator.ValidateSpecialChar('!')]
        }],
      guestAddress: this.fb.group({
        address: [
          '',
          {
            updateOn: 'blur',
            validators: [Validators.required]
          }],
        city: [
          '',
          {
            updateOn: 'blur',
            validators: [Validators.required]
          }],
        province: [
          '',
          {
            updateOn: 'blur',
            validators: [Validators.required]
          }],
        country: [
          '',
          {
            updateOn: 'blur',
            validators: [Validators.required]
          }],
        zipCode: [
          '',
          {
            updateOn: 'blur',
            validators: [Validators.required]
          }],
      }),
      guests: this.fb.array([
        this.fb.group({
          guestsName: new FormControl(
            '',
            {
              updateOn: 'blur',
            }),
          // guestsName: new FormControl('', { validators: [Validators.required] }),  /* If you wanna add the validators */
          age: [
            '',
            {
              updateOn: 'blur',
            }],
        }),
      ]),
    });

    this.getBookingData();

    // this.bookingForm.valueChanges.subscribe((data) => {
    //   this.bookingService.bookRoom(data).subscribe((data) => { })
    // });

    this.bookingForm.valueChanges.pipe(
      /* mergeMap doesn't care about the sequence. It subscribes to the data as soon as the data is provided. The sequence doesn't matter. */
      /* switchMap will cancel any existing request if it receives new data. In case you care about whoever has subscribed to your stream, should get the latest data only and the previous data that is raised should be canceled */
      /* exhaustMap care about the sequence. It is useful in case the previous request/data that you made must completed before it can make a new request. */
      exhaustMap((data) => this.bookingService.bookRoom(data)))
      .subscribe((data) => console.log(data))
  }

  addBooking() {
    console.log(this.bookingForm.getRawValue());
    // this.bookingService
    //   .bookRoom(this.bookingForm.getRawValue())
    //   .subscribe((data) => {
    //     console.log(data);
    //   })

    this.bookingForm.reset({
      roomNumber: '',
      guestEmail: '',
      checkinDate: '',
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      guestAddress: {
        address: '',
        city: '',
        province: '',
        country: '',
        zipCode: '',
      },
      guests: [],
    });
  }

  addGuests() {
    this.guests.push(
      this.fb.group({
        guestsName: new FormControl(
          '',
          {
            updateOn: 'blur',
          }),
        // guestsName: new FormControl('', { validators: [Validators.required] }),  /* If you wanna add the validators */
        age: [
          '',
          {
            updateOn: 'blur',
          }],
      }),
    );
  }

  removeGuests(i: number) {
    this.guests.removeAt(i);
  }

  addPassport() {
    this.bookingForm.addControl('passport', new FormControl(''));
  }

  deletePassport() {
    if (this.bookingForm.get('passport')) {
      this.bookingForm.removeControl('passport');
    }
  }

  getBookingData() {
    this.bookingForm.patchValue({
      /* patchValue allows to skip some values. Whereas setValue must enter values */
      guestEmail: 'someone@gmail.com',
      checkinDate: new Date(),
      checkoutDate: '',
      bookingStatus: '',
      bookingAmount: '1',
      bookingDate: '',
      mobileNumber: '',
      guestName: '',
      guestAddress: {
        address: '',
        city: '',
        province: '',
        country: '',
        zipCode: '',
      },
      guests: [],
    });
  }
}
