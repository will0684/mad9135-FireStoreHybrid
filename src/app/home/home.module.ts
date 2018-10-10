import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ListComponent } from '../list/list.component';
import { AddCategoryFormComponent } from '../add-category-form/add-category-form.component';
import { AddItemRemoveCategoryFormComponent } from '../add-item-remove-category-form/add-item-remove-category-form.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, ListComponent, AddCategoryFormComponent, AddItemRemoveCategoryFormComponent]
})
export class HomePageModule {}
