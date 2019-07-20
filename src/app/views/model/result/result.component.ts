import { Component, OnInit } from '@angular/core';
import { OfferService } from '../offer/offer.service';

@Component({
  templateUrl: './result.component.html',
    styleUrls: ['result.component.scss'],
})
export class ResultComponent implements OnInit {

  loading = true;
  resultAvailable = false;

  constructor(private offerService: OfferService) {
   }

  ngOnInit() {
    this.delay(1500).then(any=>{
     this.fetchResult();
 });
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

  fetchResult() {
    console.log('fetching result.');
    this.loading = true;
    this.offerService.findAll()
    .subscribe(
        data => {
            console.log(data);
           this.loading = false;
           this.resultAvailable = true;
         }
    );
}

}
