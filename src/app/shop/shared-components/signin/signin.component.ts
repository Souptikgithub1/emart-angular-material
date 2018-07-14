import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {UserService} from "../../services/user.service";
import { AuthService } from "angular4-social-login";
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  email: string;
  password: string;
  provider: string;

  constructor(private userService: UserService,
              private authService: AuthService) { }

  ngOnInit() {
  }

  login(){
    this.userService.login(this.email, this.password).subscribe(response => {
        if(!!response){
            localStorage.setItem('uc', btoa(this.email + '|' + this.password));
        }
    });
  }

    signInWithGoogle(): void {
        this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);

        this.authService.authState.subscribe((user) => {
            console.log(user);
            this.provider = user.provider;
        });
    }

    signInWithFB(): void {
        this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
        this.authService.authState.subscribe((user) => {
            console.log(user);
            this.provider = user.provider;
        });
    }

    @Output('openSignupForm')
    openSignupForm: EventEmitter<any> = new EventEmitter<any>()

    goToSignup(){
        this.openSignupForm.emit(true);
    }

}
