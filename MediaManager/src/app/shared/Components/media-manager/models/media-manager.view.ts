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
  isCompanyFilter: boolean = false;
  isPersonalFilter: boolean = false;
  isPersonalSharedFilter: boolean = false;
  isGlobalFilter: boolean = false;
  isCorporateFilter: boolean = false;
  modalOpen: boolean = false;
  mediaFileName: string;
  mediaFormats: string = '.jpg, .jpeg,.png, .gif, .bmp, .tiff, .esp';
  mediaSorts: Array<string> = ['Create Date', 'Name', 'Image Type'];
  mediaFilterArray: Array<string> = [
    'Company',
    'Personal',
    'Personal Shared',
    'Global'
  ];
  defaultImgUrl: string = 'assets/images/1.jpg';
}
