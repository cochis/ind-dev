import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { CoreModule } from './core/core.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { ZXingScannerModule } from "@zxing/ngx-scanner";
import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';
import { DataTablesModule } from 'angular-datatables/src/angular-datatables.module';
import { WebcamModule } from 'ngx-webcam';
import { UnauthorizedInterceptorService } from './interceptors/unauthorized-interceptor.service';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ModalModule } from './_modal';
 
@NgModule({
  declarations: [
    AppComponent,
      
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,AuthModule,
    HttpClientModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    DataTablesModule,
    NgbModalModule,
    ModalModule,
    CoreModule,
    WebcamModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      // Register the ServiceWorker as soon as the application is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: UnauthorizedInterceptorService,
    multi: true
  }],
  
  
  bootstrap: [AppComponent]
})
export class AppModule { }
