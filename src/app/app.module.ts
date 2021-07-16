import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatModalModule } from 'mat-modal';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ResultComponent } from './result/result.component';
import { NgxMaskModule } from 'ngx-mask';

@NgModule({
  declarations: [AppComponent, HomeComponent, ResultComponent],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,

    NgxMaskModule.forRoot(),

    BrowserModule,
    AppRoutingModule,

    MatModalModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
