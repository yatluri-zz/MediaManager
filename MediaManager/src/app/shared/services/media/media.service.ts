import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RestService } from '@admin/services/rest/rest.service';
import { MediaManager } from '@admin/models/MediaManager';

@Injectable({
  providedIn: 'root'
})
export class MediaService extends RestService<MediaManager> {
  constructor(protected http: HttpClient) {
    super(http);
  }
  // image uri's
  getUri(): string {
    return 'assets/json/media.json';
  }
}
