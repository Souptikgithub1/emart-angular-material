import { Component, OnInit } from '@angular/core';
import {BrandService} from "../../../shop/services/brand/brand.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-add-brand',
  templateUrl: './add-brand.component.html',
  styleUrls: ['./add-brand.component.css']
})
export class AddBrandComponent implements OnInit {

  brandName: string;
  brandDisplayName: string;

  constructor(private brandService: BrandService,
              private router: Router) { }

  ngOnInit() {
  }


  addBrand(){
    const requestBody = {
      brandName: this.brandName,
      brandDisplayName: this.brandDisplayName
    };
    this.brandService.add(requestBody).subscribe(response => {
      this.router.navigate(['/admin']);
    });
  }
}
