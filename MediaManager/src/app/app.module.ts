import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
    FormsModule,
    InfiniteScrollModule,
    ModalModule.forRoot(),
    NgxDatatableModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRouteConfig
  ],
  providers: [_Shared.MediaService],
  entryComponents: [_Shared.MediaManagerComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
