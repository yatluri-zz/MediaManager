import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as _Global from '@admin/constants/constant';
import { NotificationProperties } from '@admin/interfaces/NotificationProperties';

@Injectable({
  providedIn: 'root'
})
export class NotificationCenterService {
  constructor(private toasterService: ToastrService) {}
  success(successNotify: NotificationProperties) {
    this.toasterService.success(
      successNotify.message,
      successNotify.title,
      _Global.Constant.toasterOptions
    );
  }
  error(errorNotify: NotificationProperties) {
    console.log(errorNotify);
    this.toasterService.error(
      errorNotify.message,
      errorNotify.title,
      _Global.Constant.toasterOptions
    );
  }
  warning(warnNotify: NotificationProperties) {
    this.toasterService.warning(
      warnNotify.message,
      warnNotify.title,
      _Global.Constant.toasterOptions
    );
  }
}
