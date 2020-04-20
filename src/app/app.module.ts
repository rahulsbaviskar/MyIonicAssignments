import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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

//import { AngularDateTimePickerModule } from 'angular2-datetimepicker';
import { AmazingTimePickerModule } from 'amazing-time-picker';
import { TagInputModule } from 'ngx-chips';
import { FormWizardModule } from 'angular2-wizard';
import { NgxSummernoteModule } from 'ngx-summernote';
//import 'tinymce/plugins/image';
//import { TinymceModule } from 'angular2-tinymce';
import { AceEditorModule } from 'ng2-ace-editor';
import { CodemirrorModule } from 'ng2-codemirror';
//import { ChartsModule } from 'ng2-charts';
//import { Select2Module } from 'ng2-select2';
import { MorrisJsModule } from 'angular-morris-js';
import { ChartistModule } from 'ng-chartist';
//import { DataTablesModule } from 'angular-datatables';
//import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';
import { ToastrModule } from 'ngx-toastr';
import { AgmCoreModule } from '@agm/core';
import { BarRatingModule } from "ngx-bar-rating";
//import { FullCalendarModule } from 'ng-fullcalendar';
import { ScrollToModule } from 'ng2-scroll-to-el';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { CustomFormsModule } from 'ng2-validation'
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  // Change this to your upload POST address:
   url: 'https://httpbin.org/post',
   maxFilesize: 50,
   acceptedFiles: 'image/*'
 };
@NgModule({
  declarations: [AppComponent],
  //entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    NgbModule,
    DragulaModule.forRoot(),
    ClipboardModule,
    ContextMenuModule.forRoot(),
    NouisliderModule,
    CarouselModule,
    DropzoneModule,
    ColorPickerModule,
  //  AngularDateTimePickerModule,
    AmazingTimePickerModule,
    TagInputModule,
    FormWizardModule,
    NgxSummernoteModule,
//     TinymceModule.withConfig({
//       plugins: ['image', 'code'],      
//   min_height:400,
//   file_picker_types: 'image', 
//   file_picker_callback: function(cb, value, meta) {
//         var input = document.createElement('input') as HTMLInputElement;
//         input.setAttribute('type', 'file');
//         input.setAttribute('accept', 'image/*');
//         input.onchange = function() {
//           var res = <HTMLInputElement>this;
//           var file:File = res.files[0];
//           var reader = new FileReader();
//           reader.onload = function () {
//             var base64 = reader.result.toString();
//             // call the callback and populate the Title field with the file name
//             cb(base64, { title: file.name });
//           };
//           reader.readAsDataURL(file);
//         };

//         input.click();
//       },
// toolbar: 'formatselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
//     }),
    AceEditorModule,
    CodemirrorModule,
  //  ChartsModule,
    FormsModule,
    ReactiveFormsModule,
    CustomFormsModule,
  //  Select2Module,
    MorrisJsModule,
    ChartistModule,
    //DataTablesModule,
  //  SweetAlert2Module.forRoot(),
    ToastrModule.forRoot(),
    AgmCoreModule.forRoot({ apiKey: 'AIzaSyCnT63XUjqjPgXZ0lFTU_pdpfUX7swzTTM' }),
    BarRatingModule,
  //  FullCalendarModule,
    ScrollToModule.forRoot()],
  providers: [
   
    
    SplashScreen,
    StatusBar,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    // {
    //   provide: DROPZONE_CONFIG,
    //   useValue: DEFAULT_DROPZONE_CONFIG,
    //  } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
