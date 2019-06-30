import { Component } from '@angular/core';
import { Offer } from './offer';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: 'input.component.html'
})
export class InputComponent {

  public model = new Offer();
  public submitted = false;

  constructor(
) { 
  this.model.channel = "aaa"
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
    this.submitted = true;
    console.log(form.value);
    this.model.channel = form.value;
    console.log(JSON.stringify(this.model.channel));
  }

}
