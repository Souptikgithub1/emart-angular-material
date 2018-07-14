import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from "angular4-social-login";

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
    provider: string;

    constructor(private userService: UserService,
                private authService: AuthService) { }

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

    signUpWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

        this.authService.authState.subscribe((user) => {
            console.log(user);
            this.provider = user.provider;
        });
    }

    signUpWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        this.authService.authState.subscribe((user) => {
            console.log(user);
            this.provider = user.provider;
        });
    }

    @Output('openLogin') openLogin: EventEmitter<any> = new EventEmitter<any>();

    goToLogin(){
        this.openLogin.emit(true);
    }

}
