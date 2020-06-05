import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DragulaModule } from 'ng2-dragula';
import { ClipboardModule } from 'ngx-clipboard';
import { ContextMenuModule } from 'ngx-contextmenu';
import { NouisliderModule } from 'ng2-nouislider';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
import { ColorPickerModule } from 'ngx-color-picker';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { TagInputModule } from 'ngx-chips';
import { FormWizardModule } from 'angular2-wizard';
import { NgxSummernoteModule } from 'ngx-summernote';
import { AceEditorModule } from 'ng2-ace-editor';
import { CodemirrorModule } from 'ng2-codemirror';
import { MorrisJsModule } from 'angular-morris-js';
import { ChartistModule } from 'ng-chartist';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { BarRatingModule } from "ngx-bar-rating";
import { ScrollToModule } from 'ng2-scroll-to-el';
import { HttpClientModule } from '@angular/common/http';
import { CustomFormsModule } from 'ng2-validation';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { MenuService } from './menu.service';
import { IonicStorageModule } from '@ionic/storage';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    LoggerModule.forRoot({
    //  serverLoggingUrl: '/api/logs', //  if you don’t need logs to be sen’t to server, delete this line
      level: NgxLoggerLevel.TRACE,
      serverLogLevel: NgxLoggerLevel.ERROR, //defines the minimum log level for server-side logging
     // disableConsoleLogging: false //  flag which helps you to turn console logging completely off
    }),
    SharedModule,
    HttpClientModule,
    NgbModule,
    Ng2SearchPipeModule,
    IonicStorageModule.forRoot(),
    DragulaModule.forRoot(),
    ClipboardModule,
    ContextMenuModule.forRoot(),
    NouisliderModule,
    CarouselModule,
    DropzoneModule,
    ColorPickerModule,
    AngularDateTimePickerModule,
    AmazingTimePickerModule,
    TagInputModule,
    FormWizardModule,
    NgxSummernoteModule,
   AceEditorModule,
    CodemirrorModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
    MorrisJsModule,
    ChartistModule,
   SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCnT63XUjqjPgXZ0lFTU_pdpfUX7swzTTM' }),
    BarRatingModule,
    ScrollToModule.forRoot()],
  providers: [
    StatusBar,
    MenuService,
    SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
