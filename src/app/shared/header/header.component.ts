import { Component, OnInit } from '@angular/core';
import {CategoryService} from "../../shop/services/category/category.service";
import {Utils} from "../../shop/utils/utils";
import {BsModalRef, BsModalService} from "ngx-bootstrap";
import {RegisterSigninModalComponent} from "../../shop/register-signin-modal/register-signin-modal.component";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  categories = [];

  modalRef: BsModalRef;
  constructor(private categoryService: CategoryService,
              private bsModalService: BsModalService) { }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories(){
    this.categoryService.getCategories().subscribe(response => {
      this.categories = response;
    });
  }

    openModal(){
      this.modalRef = this.bsModalService.show(RegisterSigninModalComponent);
    }
}
