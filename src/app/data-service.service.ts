import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  collection: String = 'categories';
  category: any;
  categoryDoc: AngularFirestoreDocument<Object>;

  constructor(private http: HttpClient, private db: AngularFirestore) { }

  getCategories() {
    return this.db.collection(`${this.collection}`).valueChanges();
  }

  getCategory(id) {
    this.categoryDoc = this.db.collection(`${this.collection}`).doc(id);
    return this.categoryDoc.valueChanges();
  }

  addCategory(category) {
    const newIssueRef = this.db.collection(`${this.collection}`).ref.doc();
    const id = newIssueRef.id;
    return newIssueRef.set({
      id: id,
      category: category,
      items: []
    });
  }

  addItem(categoryId, item) {
    const chosenCategory = this.db.collection(`${this.collection}`).doc(categoryId);
    let categoryUpdateObject: any;
    chosenCategory.get().toPromise().then((doc) => {
      categoryUpdateObject = doc.data();
      console.log(categoryUpdateObject);
      categoryUpdateObject.items.push(item);
      return this.db.collection(`${this.collection}`).doc(`${categoryId}`).update(categoryUpdateObject);
    });
  }

  deleteCategory(categoryId) {
    return this.db.collection(`${this.collection}`).doc(`${categoryId}`).delete();
  }
}
