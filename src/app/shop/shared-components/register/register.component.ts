import {Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import {AuthService, FacebookLoginProvider, GoogleLoginProvider} from "angular4-social-login";
import {Utils} from "../../utils/utils";
import 'rxjs/add/operator/toPromise';


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

    register(user: object = null){

        let userPayload;
        if(!!user){
            userPayload = {
                id: -1,
                name: user['name'],
                email: user['email'],
                password: '',
                phone: '',
                authToken: user['authToken'],
                provider: user['provider']
            };
        }else {
            userPayload = {
                id: -1,
                name: this.name,
                email: this.email,
                password: this.password,
                phone: this.phone,
                authToken: '',
                provider: Utils.SELF_PROVIDER
            };
        }

        this.userService.add(userPayload).subscribe(response => {

        });
    }

    signUpWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
        this.socialSignUp();
    }

    signUpWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        this.socialSignUp();
    }

    @Output('openLogin') openLogin: EventEmitter<any> = new EventEmitter<any>();
    goToLogin(){
        this.openLogin.emit(true);
    }

    socialSignUp(){
        this.authService.authState.subscribe(user => {
            console.log(user);
            /*this.register(user);
            window.location.reload();*/
        }).unsubscribe();
    }

}
