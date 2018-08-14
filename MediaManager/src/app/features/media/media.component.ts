import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MediaManagerComponent } from '@admin/components/media-manager/media-manager.component';
import { MediaService } from '@admin/services/media/media.service';
import { MediaManager } from '@admin/models/MediaManager';
import { MediaEntity } from './models/mediaEntity';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';
import * as _lodash from 'lodash';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  previewImgUrl: string;
  constructor(
    private bsModalService: BsModalService,
    private http: MediaService
  ) {}

  ngOnInit() {
    this.previewImgUrl = 'assets/images/4.jpg';
  }
  OnMediaManager() {
    this.http.getMedia().subscribe((response: MediaManager[]) => {
      if (response && response !== undefined) {
        const mediaList: Array<MediaManager> = [...response['Media']];
        const initialState: MediaEntity = {
          mediaList: _lodash.take(mediaList, 16),
          imageText: 'Selected Image',
          previewImgUrl: this.previewImgUrl
        };
        const mediaModal: BsModalRef = this.bsModalService.show(
          MediaManagerComponent,
          Object.assign({ initialState }, { class: 'modal-lg' })
        );
        let modalSubscription: Subscription = this.bsModalService.onHide
          .pipe(take(1))
          .subscribe((response: MediaManager) => {
            if (
              response &&
              response !== undefined &&
              typeof response !== 'string'
            ) {
              this.previewImgUrl = response.MediaUrl;
              modalSubscription.unsubscribe();
              mediaModal.hide();
            }
          });
      }
    });
  }
}
