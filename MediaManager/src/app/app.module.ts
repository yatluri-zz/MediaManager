import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { ModalModule } from 'ngx-bootstrap';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { AppRouteConfig } from './app.route.config';
import { AppComponent } from './app.component';
import * as _Features from './features/index';
import * as _Shared from './shared/index';
import { ImgSliderComponent } from '@admin/components/img-slider/img-slider.component';

@NgModule({
  declarations: [
    AppComponent,
    _Features.HeaderComponent,
    _Features.MediaComponent,
    _Shared.MediaManagerComponent,
    ImgSliderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    InfiniteScrollModule,
    ModalModule.forRoot(),
    NgxDatatableModule,
    HttpClientModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({ preventDuplicates: true }),
    AppRouteConfig
  ],
  providers: [_Shared.MediaService, _Shared.NotificationCenterService],
  entryComponents: [_Shared.MediaManagerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
