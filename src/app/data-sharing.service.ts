import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataSharingService {

  private cardData: any[] = [];

  getCardData(): any[] {
    return this.cardData;
  }

  setCardData(data: any): void {
    this.cardData.push(data);
  }

  constructor() { }
}
