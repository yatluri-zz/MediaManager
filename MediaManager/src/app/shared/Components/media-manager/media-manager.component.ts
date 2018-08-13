import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap';
import { MediaService } from '@admin/services/media/media.service';
import { MediaManagerView } from './models/media-manager.view';
import { MediaManager } from '../../models/MediaManager';
@Component({
  selector: 'app-media-manager',
  templateUrl: './media-manager.component.html',
  styleUrls: ['./media-manager.component.scss']
})
export class MediaManagerComponent extends MediaManagerView implements OnInit {
  constructor(
    private bsModalRef: BsModalRef,
    private sanitizer: DomSanitizer,
    private http: MediaService
  ) {
    super();
    this.messages = {
      emptyMessage: sanitizer.bypassSecurityTrustHtml(`<div id="text1" class="text-center">
      <h3><i class="fa fa-binoculars" aria-hidden="true" ></i></h3>
      <h4 i18n='ProductCollectionList|Description@@NoMessage'>No products were found</h4>
  </div>`)
    };
  }
  @Input()
  mediaList: Array<MediaManager> = [];
  ngOnInit() {}
  onClose() {
    this.bsModalRef.hide();
  }
  onSave() {
    this.bsModalRef.hide();
  }
  onScroll($event) {
    console.log($event);
  }

  onMediaSave(m: MediaManager) {
    if (m && m !== undefined) {
      console.log(m);
      this.bsModalRef.hide();
    }
  }

  onScrollDown(ev) {
    console.log('scrolled down!!');
    this.http.getMedia().subscribe((response: MediaManager[]) => {
      if (response && response !== undefined) {
        this.mediaList = [...response['Media']];
      }
    });
  }

  onUp(ev) {
    console.log('scrolled up!');
  }
  onFileChange($event) {
    this.mediaFileName = $event[0].name;
  }
  onFileUploader() {
    let uploadElement: HTMLElement = document.getElementById(
      'mediaManagerFileUploader'
    );
    uploadElement.click();
  }
  onDeleteMedia(media: MediaManager) {
    if (media && media !== undefined) {
      console.log(this.mediaList.indexOf(media));
      this.mediaList.splice(this.mediaList.indexOf(media), 1);
      this.mediaList = [...this.mediaList];
    }
  }
}
