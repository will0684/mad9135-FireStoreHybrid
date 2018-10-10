import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  categories: any;

  constructor(private dataSrvc: DataServiceService) { }

  ngOnInit() {
    this.fetchCategories();
  }

  fetchCategories() {
    this.dataSrvc.getCategories().subscribe((collection) => {
      this.categories = collection;
      console.log(this.categories);
    });
  }
}
