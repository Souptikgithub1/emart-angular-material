import { Component, OnInit } from '@angular/core';
import {Utils} from "../../utils/utils";

@Component({
    selector: 'app-rvp',
    templateUrl: './rvp.component.html',
    styleUrls: ['./rvp.component.scss']
})
export class RvpComponent implements OnInit {

    public rvpProducts: object;

    constructor() { }

    ngOnInit() {
        this.getRvp();
    }

    getRvp(){
        this.rvpProducts = Utils.getRvp().reverse();
    }

}
