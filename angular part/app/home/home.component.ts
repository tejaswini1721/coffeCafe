import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';

import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogoutModalComponent } from '../logout-modal/logout-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public faCoffee = faCoffee;
  constructor(private router: Router, private modalService: NgbModal) {}

  ngOnInit(): void {
    if (!sessionStorage.getItem('sid')) {
      this.router.navigate(['login']);
    }
  }

  processLogout() {
    // sessionStorage.removeItem('sid');
    // this.router.navigate(['login']);

    // open modal
    this.modalService.open(LogoutModalComponent, {
      centered: true,
    });
  }
}
