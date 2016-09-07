import { Component, OnInit } from '@angular/core';
import { NameListService } from '../shared/index';
import {Store, Action} from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

/**
 * This class represents the lazy loaded HomeComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-home',
  templateUrl: 'home.component.html',
  styleUrls: ['home.component.css'],
})

export class HomeComponent implements OnInit {

  newName: string = '';
  errorMessage: string;
  names: any[] = [];

  /**
   * Creates an instance of the HomeComponent with the injected
   * NameListService.
   *
   * @param {NameListService} nameListService - The injected NameListService.
   */
  constructor(public nameListService: NameListService, private _store: Store<any>) {
    //CHANGE TDH
    this.nameListService.getnamesNgrx();
    this._store.select('names')
    .subscribe(names=>{
        this.names = names;
      });
  }

  /**
   * Get the names OnInit
   */
  ngOnInit() {
    //CHANGE TDH
    //this.getNames();
  }

  /**
   * Handle the nameListService observable
   */
  /*getNames() {
    this.nameListService.get()
                     .subscribe(
                       names => this.names = names,
                       error =>  this.errorMessage = <any>error
                       );
  }*/

  /**
   * Pushes a new name onto the names array
   * @return {boolean} false to prevent default form submit behavior to refresh the page.
   */
  addName(): boolean {
    // TODO: implement nameListService.post
    // this.names.push(this.newName);
    this._store.dispatch(<Action>{type: 'ADD_NAME', payload: this.newName});
    this.newName = '';
    return false;
  }

}
