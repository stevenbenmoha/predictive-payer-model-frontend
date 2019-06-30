import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Offer } from './offer';
import { Observable } from 'rxjs';
 
@Injectable()
export class InputService {
 
  private offerUrl: string;
 
  constructor(private http: HttpClient) {
    this.offerUrl = 'http://localhost:8080/offer/';
  }
 
  public findAll(): Observable<Offer[]> {
    return this.http.get<Offer[]>(this.offerUrl);
  }
 
  public save(offer: Offer) {
    console.log('saved');
    return this.http.post<Offer>(this.offerUrl, offer);
  }
}