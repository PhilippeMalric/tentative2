import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { premiereActions } from 'src/app/Ngrx/main-actions.actions';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {

  constructor(private dataService:DataService,private store:Store) { }

  ngOnInit(): void {
  }


test1(){

  this.store.dispatch(premiereActions())

}

}
