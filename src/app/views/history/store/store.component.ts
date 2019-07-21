import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Offer } from '../../model/offer/offer';
import { OfferService } from '../../model/offer/offer.service';

/** Constants used to fill up our data base. */
const COLORS: string[] = [
  'maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple', 'fuchsia', 'lime', 'teal',
  'aqua', 'blue', 'navy', 'black', 'gray'
];
const NAMES: string[] = [
  'Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack', 'Charlotte', 'Theodore', 'Isla', 'Oliver',
  'Isabella', 'Jasper', 'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'
];

/**
 * @title Data table with sorting, pagination, and filtering.
 */
@Component({
  styleUrls: ['store.component.scss'],
  templateUrl: 'store.component.html',
})
export class StoreComponent implements OnInit {

  loading = true;
  resultAvailable = false;
  offers; 

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
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
           this.offers = data;
         }
    );
}

  displayedColumns: string[] = ['id', 'name', 'progress', 'color'];
  displayedColumns2: string[] = ['offerId',
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
  'shareShift']
  dataSource: MatTableDataSource<Offer>;

  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private offerService: OfferService) {

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(this.offers);
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}