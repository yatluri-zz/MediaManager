import { SafeHtml, DomSanitizer } from '@angular/platform-browser';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { MediaService } from '@admin/services/media/media.service';
import { MediaManagerView } from './models/media-manager.view';
import { MediaManager } from '../../models/MediaManager';
import { NotificationCenterService } from '@admin/services/notification/notification-center.service';
import { NotificationProperties } from '@admin/interfaces/NotificationProperties';
@Component({
  selector: 'app-media-manager',
  templateUrl: './media-manager.component.html',
  styleUrls: ['./media-manager.component.scss']
})
export class MediaManagerComponent extends MediaManagerView implements OnInit {
  mediaForm: FormGroup = this.mediaForms();
  mediaFiltersForm: FormGroup = this.mediaFilterForm();
  constructor(
    private bsModalRef: BsModalRef,
    private bsModalService: BsModalService,
    private sanitizer: DomSanitizer,
    private http: MediaService,
    private notification: NotificationCenterService,
    private formBuilder: FormBuilder
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
  @Input()
  imageText: string;
  @Input()
  previewImgUrl: string;
  ngOnInit() {
    this.mediaForm.patchValue({
      sortLevel: 'Create Date'
    });
    this.mediaFiltersForm.patchValue({
      filterLevel: 'Company'
    });
    this.filterChanges();
  }
  onClose() {
    this.bsModalRef.hide();
  }
  onSave() {
    this.bsModalRef.hide();
  }
  onScroll($event) {
    console.log($event);
  }

  onMediaSelect(m: MediaManager) {
    if (m && m !== undefined) {
      console.log(m);
      this.bsModalService.onHide.next(m);
    }
  }

  onScrollDown(ev) {
    console.log('scrolled down!!');
    this.http.getMedia().subscribe((response: MediaManager[]) => {
      if (response && response !== undefined) {
        this.mediaList = [...this.mediaList, ...response['Media']];
      }
    });
  }

  onUp(ev) {
    console.log('scrolled up!');
  }
  onFileChange($event) {
    if ($event && $event !== undefined) {
      const fileName: string = $event[0].name;
      if (
        (fileName.includes('.png') ||
          fileName.includes('.jpg') ||
          fileName.includes('.jpeg') ||
          fileName.includes('.gif')) &&
        $event[0].size < 2000
      ) {
        console.log(fileName);
      } else {
        const message: NotificationProperties = {
          message: 'please choose the file less than 2MB',
          title: 'Error'
        };
        this.notification.error(message);
      }
    }
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
  mediaForms() {
    return this.formBuilder.group({
      sortLevel: ['', []]
    });
  }
  filterChanges() {
    this.mediaForm
      .get('sortLevel')
      .valueChanges.subscribe((response: string) => {
        if (response && response !== undefined) {
          console.log(response);
        }
      });
    this.mediaFiltersForm
      .get('filterLevel')
      .valueChanges.subscribe((response: string) => {
        if (response && response !== undefined) {
          console.log(response);
        }
      });
  }
  mediaFilterForm() {
    return this.formBuilder.group({
      filterLevel: ['', []]
    });
  }
}
