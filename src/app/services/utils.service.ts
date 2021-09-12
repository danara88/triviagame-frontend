import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  constructor() { }

  /**
   * Get the first letter of the username
   */
  firstLetter(term: string): string {
    return term[0].toUpperCase();
  }

}
