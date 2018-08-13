import { SafeHtml } from '@angular/platform-browser';
export class MediaManagerView {
  messages: SafeHtml;
  readonly headerHeight: number = 50;
  readonly pageLimit: number = 10;
  readonly rowHeight: number = 50;
  throttle: number = 300;
  scrollDistance: number = 1;
  scrollUpDistance: number = 2;
  direction: string = '';
  modalOpen: boolean = false;
  mediaFileName: string;
  mediaFormats: string = '.jpg, .jpeg,.png, .gif, .bmp, .tiff, .esp';
  defaultImgUrl: string = 'assets/images/1.jpg';
  previewImgUrl: string = 'assets/images/19.jpg';
}
