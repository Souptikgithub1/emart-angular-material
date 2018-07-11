import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../shop/services/category/category.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories = [];

  constructor(private categoryService: CategoryService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    });
  }
}
