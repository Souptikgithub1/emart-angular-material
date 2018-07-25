import {Component, OnChanges, OnInit} from '@angular/core';
import {Utils} from "../../utils/utils";
import {RvpEventService} from "../../services/rvpEvent/rvp-event.service";

@Component({
    selector: 'app-rvp',
    templateUrl: './rvp.component.html',
    styleUrls: ['./rvp.component.scss']
})
export class RvpComponent implements OnInit {

    public rvpProducts: Array<object>;
    isVisible: boolean = false;

    constructor(private rvpEventService: RvpEventService) { }

    ngOnInit() {
        this.getRvp();
        this.rvpEventService.data.subscribe(response => {
            this.getRvp();
        });
    }

    getRvp(){
        this.rvpProducts = Utils.getRvp().reverse();
        if(this.rvpProducts.length > 0) this.isVisible = true;
    }

}
