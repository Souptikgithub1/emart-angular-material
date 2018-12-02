import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import {Utils} from "../../utils/utils";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

    email: string;
    password: string;
    provider: string;

    msg: string;
    isMsgVisible: boolean = false;

    constructor(private userService: UserService,
                private authService: AuthService) { }

    ngOnInit() {
    }

    login(user: object = null){
        let userPayload = {};
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
        }else{
            userPayload = {
                email: this.email,
                password: this.password,
                provider: Utils.SELF_PROVIDER
            }
        }
        this.userService.login(userPayload).subscribe(response => {
            if(response['status'].toString() === 'SUCCESS'){
                Utils.setUserToLocalStorage(response['data']);
                location.reload();
            }else {
                this.msg = response['msg'];
                this.isMsgVisible = true;
                setTimeout(() => {
                    this.isMsgVisible = false;
                }, 5000);
            }
        });
    }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

        this.authService.authState.subscribe((user) => {
            console.log(user);
            this.login(user);
            this.provider = user.provider;
        });
    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        this.authService.authState.subscribe((user) => {
            console.log(user);
            this.login(user);
            this.provider = user.provider;
        });
    }

    @Output('openSignupForm')
    openSignupForm: EventEmitter<any> = new EventEmitter<any>()

    goToSignup(){
        this.openSignupForm.emit(true);
    }

}
