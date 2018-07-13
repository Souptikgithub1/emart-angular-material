import { Component, OnInit } from '@angular/core';
import {BsModalRef} from "ngx-bootstrap";

@Component({
    selector: 'app-register-signin-modal',
    templateUrl: './register-signin-modal.component.html',
    styleUrls: ['./register-signin-modal.component.scss']
})
export class RegisterSigninModalComponent implements OnInit {

    isSignupVisible: boolean = false;

    constructor(public modalRef: BsModalRef) { }

    ngOnInit() {
    }

    openSignup(event){
        this.isSignupVisible = event;
    }

    openLogin(event){
        this.isSignupVisible = !event;
    }

}
