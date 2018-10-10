import { Component, OnInit } from '@angular/core';
import { DataServiceService } from '../data-service.service';

@Component({
  selector: 'app-add-item-remove-category-form',
  templateUrl: './add-item-remove-category-form.component.html',
  styleUrls: ['./add-item-remove-category-form.component.scss']
})
export class AddItemRemoveCategoryFormComponent implements OnInit {

  categories: Array<any> = [];

  selectedCategory: String;

  newItem: String;

  constructor(private dataSrvc: DataServiceService) { }

  ngOnInit() {
    this.fetchCategorieNames();
  }

  addItem(selectedCategory, newItem) {
    this.dataSrvc.addItem(selectedCategory, newItem);
    console.log(this.categories);
  }

  deleteCategory(categoryId) {
    this.dataSrvc.deleteCategory(categoryId);
    console.log(this.categories);
  }

  fetchCategorieNames() {
    this.dataSrvc.getCategories().subscribe((collection) => {
      collection.forEach((doc: any) => {
        this.categories = [];
        this.categories.push({category: doc.category, id: doc.id});
      });
    });
    console.log(this.categories);
  }

}
