import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../shop/services/category/category.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  parentCategories = [];


  name: string;
  parentCategoryId: number;
  searchResultName: string = "";
  state: boolean = true;
  isVertical: boolean = false;

  constructor(private categoryService: CategoryService,
              private router: Router) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getAll().subscribe(response => {
      console.log(response);
      this.parentCategories = response;
    });
  }

  submitForm(){
    console.log(this.name, this.parentCategoryId, this.searchResultName, this.state, this.isVertical);

    const requestBody = {
      id: -1,
      name: this.name,
      parentId: this.parentCategoryId,
      searchResultName: this.searchResultName,
      state: !!this.state ? 1 : 0,
      isVertical: !!this.isVertical ? 1 : 0
    };

    this.categoryService.add(requestBody).subscribe(response => {
      console.log(response);
      this.router.navigate(['/admin']);
    });

  }

}
