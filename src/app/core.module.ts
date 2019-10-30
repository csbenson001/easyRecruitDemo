import { NgModule } from '@angular/core';
/* START MY SERVICES IMPORTS*/
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { CandidateService } from './services/candidate.service';
import { CandidateNotificationService } from './services/candidate-notification.service';
import { CandidateSurveyService } from './services/candidate-survey.service';
import { DocumentService } from './services/document.service';
import { JobApplicationService } from './services/job-application.service';
import { PositionService } from './services/position.service';
import { ProcessFlowService } from './services/process-flow.service';
import { RolePermissionService } from './services/role-permission.service';
import { SurveyService } from './services/survey.service';
import { TaskService } from './services/task.service';
import { TaskListService } from './services/task-list.service';
import { UserService } from './services/user.service';
import { UserNotificationService } from './services/user-notification.service';

/* END MY SERVICES IMPORTS*/
import { AuthGuard } from './security/auth.guard';
import { AuthenticationService } from './security/authentication.service';
import { SecurityService } from './security/services/security.service';
import { HTTP_INTERCEPTORS } from '../../node_modules/@angular/common/http';
import { AuthInterceptor } from './security/auth.interceptor';

@NgModule({
  imports: [],
  providers: [
    /* START PROVIDERS */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
    CandidateService,
    CandidateNotificationService,
    CandidateSurveyService,
    DocumentService,
    JobApplicationService,
    PositionService,
    ProcessFlowService,
    RolePermissionService,
    SurveyService,
    TaskService,
    TaskListService,
    UserService,
    UserNotificationService,
 /* END PROVIDERS */

    // SECURITY
    AuthGuard,
    AuthenticationService,
    SecurityService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  exports: []
})
export class CoreModule {
}
