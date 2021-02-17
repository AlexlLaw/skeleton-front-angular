import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { AlertService } from 'src/app/shared/components/alert/alert.service';

@Injectable()
export class ErrorHandlerInterceptor implements HttpInterceptor {
    constructor(private alertService: AlertService) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(req).pipe(
            tap(
                () => {},
                (error: HttpErrorResponse) => {
                        if (error || ([302, 400, 401, 404, 500].includes(error.status))) {
                            this.showMessageError(error.error.message);
                        }
                }
            )
        );
    }

    private showMessageError(msg: any, style = 'danger'): void {
        let msgErr = null;
        const msgDefault = 'Ocorreu um erro na requisição, entre em contato com suporte tecnico';
        const iconSuccess = '<i class="fa fa-check" aria-hidden="true"></i> ';
        const iconDanger = '<i class="fa fa-exclamation-triangle fa-3" aria-hidden="true"></i> ';
        const icon = style === 'success' ? iconSuccess : iconDanger;
        if (!msg) {
            msgErr = { message: msgDefault };
        }

        void this.alertService.openModal('Atenção', msgErr.message, 'danger');
    }
}
