import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { HttpApiInterceptor } from "./http.token.interceptor";

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HttpApiInterceptor, multi: true },
];
