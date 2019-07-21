import {Component, OnInit, ViewChild, ChangeDetectorRef} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Offer } from '../../model/offer/offer';
import { OfferService } from '../../model/offer/offer.service';

@Component({
  styleUrls: ['store.component.scss'],
  templateUrl: 'store.component.html',
})
export class StoreComponent implements OnInit {

  loading = true;
  resultAvailable = false;
  tableLoaded: Promise<boolean>;
  displayedColumns: string[] = ['offerId',
  'channel',
  'customer',
  'segment',
  'brandOrManufacturer',
  'tier',
  'placement',
  'formulary',
  'restriction',
  'product',
  'startDate',
  'endDate',
  'rebate',
  'priceProtectionType',
  'priceProtectionThreshold',
  'priceProtectionLookbackDate',
  'shareShift', 'result']
  
  dataSource: MatTableDataSource<Offer>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private offerService: OfferService) {
    this.delay(1500).then(any=>{
      this.fetchResult();
    });
  }

  ngOnInit() {
  }

  async delay(ms: number) {
    await new Promise(resolve => setTimeout(()=>resolve(), ms)).then(()=>console.log("fired"));
}

  fetchResult() {
    console.log('fetching result.');
    this.loading = true;
    this.offerService.findAll().subscribe(
        data => {
           this.loading = false;
           this.resultAvailable = true;
           this.dataSource = new MatTableDataSource(data);
           this.dataSource.paginator = this.paginator;
           this.dataSource.sort = this.sort;
           this.tableLoaded = Promise.resolve(true);
         }
    );
}

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}