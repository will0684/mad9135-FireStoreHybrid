import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-category-form',
  templateUrl: './add-category-form.component.html',
  styleUrls: ['./add-category-form.component.scss']
})
export class AddCategoryFormComponent implements OnInit {

  category: String = '';

  constructor(private dataSrvc: DataServiceService) { }

  ngOnInit() {
  }

  addCategory(category) {
    console.log(category);
    this.dataSrvc.addCategory(category);
  }

}
