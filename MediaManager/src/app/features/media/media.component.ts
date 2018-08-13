import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MediaManagerComponent } from '@admin/Components/media-manager/media-manager.component';
import { MediaService } from '@admin/services/media/media.service';
import { MediaManager } from '@admin/models/MediaManager';
import { MediaEntity } from './models/mediaEntity';
import * as _lodash from 'lodash';

@Component({
  selector: 'app-media',
  templateUrl: './media.component.html',
  styleUrls: ['./media.component.scss']
})
export class MediaComponent implements OnInit {
  constructor(
    private bsModalService: BsModalService,
    private http: MediaService
  ) {}

  ngOnInit() {}
  OnMediaManager() {
    this.http.getMedia().subscribe((response: MediaManager[]) => {
      if (response && response !== undefined) {
        const mediaList: Array<MediaManager> = [...response['Media']];
        const initialState: MediaEntity = {
          mediaList: _lodash.take(mediaList, 16)
        };
        const mediaModal: BsModalRef = this.bsModalService.show(
          MediaManagerComponent,
          Object.assign({ initialState }, { class: 'modal-lg' })
        );
      }
    });
  }
}
