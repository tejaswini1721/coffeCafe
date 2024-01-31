import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-order-here',
  templateUrl: './order-here.component.html',
  styleUrls: ['./order-here.component.css'],
})
export class OrderHereComponent implements OnInit {
  public uiInvalidCredential = false;

  public fbFormGroup = this.fb.group({
    coffeeType: ['', Validators.required],
    quantity: ['', Validators.required],
    name: ['', Validators.required],
    email: ['', Validators.required],
    phoneNumber: ['', Validators.required],
    deliveryAddress: ['', Validators.required],
    city: ['', Validators.required],
    zipCode: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {}

  async orderHere() {
    const data = this.fbFormGroup.value;
    const url = 'http://localhost:3000/adduser';

    await this.http.post(url, data).toPromise();

    this.router.navigate(['home']);
  }
}
