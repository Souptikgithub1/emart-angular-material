import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

    name: string;
    email: string;
    password: string;
    phone: string;


    constructor(private userService: UserService) { }

    ngOnInit() {
    }

    register(){

        const user = {
          id: -1,
          name: this.name,
          email: this.email,
          password: this.password,
          phone: this.phone
        };

        this.userService.add(user).subscribe(response => {

        });
    }

    @Output('openLogin') openLogin: EventEmitter<any> = new EventEmitter<any>();

    goToLogin(){
        this.openLogin.emit(true);
    }

}
