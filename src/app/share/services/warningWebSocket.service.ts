import { Injectable } from "@angular/core";
import { webSocket } from 'rxjs/webSocket';
import { JwtService } from "src/app/core/services/jwt.service";

@Injectable({
  providedIn: 'root'
})
export class WarningWebSocketService {
  constructor(
    private jwt: JwtService
  ) { }

  warning$ = webSocket('ws://edify1.tpddns.cn:8007/ws');

  handleAuthorize() {
    this.warning$.next({
      "messagetype": "auth",
      "token": this.jwt.getToken()
    })
  }
  handleSubscrib() {
    this.warning$.next({
      "messagetype": "subscribe",
      "account": "15997169869",
      "deviceNo": "测试设备4"
    })
  }
  handleUnSubscribe() {
    this.warning$.next({
      "messagetype": "unSubscribe",
      "account": "15997169869",
      "deviceNo": "测试设备4"
    })
  }

}