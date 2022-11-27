import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './Component/login/login.component';
import { RegisterComponent } from './Component/register/register.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './Services/user.service';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AuthGuard } from './auth.guard';
import { DBoardComponent } from './Component/d-board/d-board.component';
import { HeaderComponent } from './Component/header/header.component';
import { UpdateUserComponent } from './Component/update-user/update-user.component';
import { TokenInterceptorService } from './Services/token-interceptor.service';
@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent,
        DBoardComponent,
        HeaderComponent,
        UpdateUserComponent
    ],
    providers: [UserService, AuthGuard, {
        provide: HTTP_INTERCEPTORS,
        useClass: TokenInterceptorService,
        multi: true
    }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        FormsModule,
        ReactiveFormsModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        AppRoutingModule,

    ]
})
export class AppModule { }
