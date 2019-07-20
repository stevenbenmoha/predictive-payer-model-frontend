import { Component } from '@angular/core';
import { Offer } from './offer';
import { NgForm } from '@angular/forms';
import * as moment from 'moment';
import { OfferService } from './offer.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  templateUrl: 'offer.component.html',
  styleUrls: ['offer.component.scss'],
})
export class OfferComponent {

  public model = new Offer();
  public submitted = false;

  constructor(private offerService: OfferService,
              private route: ActivatedRoute,
              private router: Router,) {

  }

  isCollapsed: boolean = false;
  iconCollapse: string = 'icon-arrow-up';

  collapsed(event: any): void {
    // console.log(event);
  }

  expanded(event: any): void {
    // console.log(event);
  }

  toggleCollapse(): void {
    this.isCollapsed = !this.isCollapsed;
    this.iconCollapse = this.isCollapsed ? 'icon-arrow-down' : 'icon-arrow-up';
  }

  onSubmit(form: NgForm): void {

    // if (this.validDateFormat()) {
        this.submitted = true;
        console.log(form.value);
        this.model = form.value;
        this.offerService.save(this.model);
        this.router.navigateByUrl("/model/result");
    // }
    // else {
    //   alert('invalid date');
    // }
  }


  validDateFormat(): any {
    if (moment(this.model.startDate, 'YYYY-MM-DD', true).isValid() &&
      moment(this.model.startDate, 'YYYY-MM-DD', true).isValid() && 
      moment(this.model.priceProtectionLookbackDate, 'YYYY-MM-DD', true).isValid) {
      return true;
    }
  }
}
