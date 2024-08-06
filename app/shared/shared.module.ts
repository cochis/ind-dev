import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NopagefoundComponent } from './pages/nopagefound/nopagefound.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AsideComponent } from './components/aside/aside.component';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoadingComponent } from './components/loading/loading.component';
import { MessageComponent } from './components/message/message.component';
import { NavComponent } from './components/nav/nav.component';
import { ScannerComponent } from './components/scanner/scanner.component';
import { ZXingScannerModule } from '@zxing/ngx-scanner';
import { QRCodeModule } from 'angularx-qrcode';
import { WebcamModule } from 'ngx-webcam';
import { CamComponent } from './components/cam/cam.component';


@NgModule({
  declarations: [
    NopagefoundComponent,
    AsideComponent,
    BannerComponent,
    FooterComponent,
    LoadingComponent,
    MessageComponent,
    NavComponent,
    HeaderComponent,
    ScannerComponent,
    CamComponent
  ],
  exports:[    
    AsideComponent,
    BannerComponent,
    FooterComponent,
    LoadingComponent,
    MessageComponent,
    NavComponent,
    HeaderComponent,
    ScannerComponent,
    CamComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ZXingScannerModule,
    QRCodeModule,
    WebcamModule
  ]
})
export class SharedModule { }
