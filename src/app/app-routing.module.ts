// DEPENDENCIES
import { NgModule } from '@angular/core';
import { CanActivate, RouterModule, Routes } from '@angular/router';

/* START MY VIEWS IMPORT */
// Do not edit this comment content, it will be overwritten in next Skaffolder generation
import { HomeComponent} from './pages/home/home.component';
import { CandidateEditComponent} from './pages/candidate-edit/candidate-edit.component';
import { CandidateListComponent} from './pages/candidate-list/candidate-list.component';
import { CandidateNotificationEditComponent} from './pages/candidate-notification-edit/candidate-notification-edit.component';
import { CandidateNotificationListComponent} from './pages/candidate-notification-list/candidate-notification-list.component';
import { CandidateSurveyEditComponent} from './pages/candidate-survey-edit/candidate-survey-edit.component';
import { CandidateSurveyListComponent} from './pages/candidate-survey-list/candidate-survey-list.component';
import { DocumentEditComponent} from './pages/document-edit/document-edit.component';
import { DocumentListComponent} from './pages/document-list/document-list.component';
import { JobApplicationEditComponent} from './pages/job-application-edit/job-application-edit.component';
import { JobApplicationListComponent} from './pages/job-application-list/job-application-list.component';
import { PositionEditComponent} from './pages/position-edit/position-edit.component';
import { PositionListComponent} from './pages/position-list/position-list.component';
import { ProcessFlowEditComponent} from './pages/process-flow-edit/process-flow-edit.component';
import { ProcessFlowListComponent} from './pages/process-flow-list/process-flow-list.component';
import { RolePermissionEditComponent} from './pages/role-permission-edit/role-permission-edit.component';
import { RolePermissionListComponent} from './pages/role-permission-list/role-permission-list.component';
import { SurveyEditComponent} from './pages/survey-edit/survey-edit.component';
import { SurveyListComponent} from './pages/survey-list/survey-list.component';
import { TaskEditComponent} from './pages/task-edit/task-edit.component';
import { TaskListComponent} from './pages/task-list/task-list.component';
import { TaskListEditComponent} from './pages/task-list-edit/task-list-edit.component';
import { TaskListListComponent} from './pages/task-list-list/task-list-list.component';
import { UserEditComponent} from './pages/user-edit/user-edit.component';
import { UserListComponent} from './pages/user-list/user-list.component';
import { UserNotificationEditComponent} from './pages/user-notification-edit/user-notification-edit.component';
import { UserNotificationListComponent} from './pages/user-notification-list/user-notification-list.component';

/* END MY VIEWS IMPORT */

// SECURITY
import { LoginComponent } from './pages/login/login.component';
import { ManageUserEditComponent } from './security/manage-user/edit-user/manage-user-edit.component';
import { ManageUserListComponent } from './security/manage-user/list-user/manage-user-list.component';
import { ProfileComponent } from './security/profile/profile.component';
import { AuthGuard } from './security/auth.guard';

/**
 * WEB APP ROUTES
 */
const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full'  },

    /* START MY VIEWS */

    { path: 'candidates/:id',  loadChildren: './pages/candidate-edit/candidate-edit.module#CandidateEditModule' , canActivate: [AuthGuard] },
    { path: 'candidates',  loadChildren: './pages/candidate-list/candidate-list.module#CandidateListModule' , canActivate: [AuthGuard] },
    { path: 'candidatenotifications/:id',  loadChildren: './pages/candidate-notification-edit/candidate-notification-edit.module#CandidateNotificationEditModule' , canActivate: [AuthGuard] },
    { path: 'candidatenotifications',  loadChildren: './pages/candidate-notification-list/candidate-notification-list.module#CandidateNotificationListModule' , canActivate: [AuthGuard] },
    { path: 'candidatesurveys/:id',  loadChildren: './pages/candidate-survey-edit/candidate-survey-edit.module#CandidateSurveyEditModule' , canActivate: [AuthGuard] },
    { path: 'candidatesurveys',  loadChildren: './pages/candidate-survey-list/candidate-survey-list.module#CandidateSurveyListModule' , canActivate: [AuthGuard] },
    { path: 'documents/:id',  loadChildren: './pages/document-edit/document-edit.module#DocumentEditModule' , canActivate: [AuthGuard] },
    { path: 'documents',  loadChildren: './pages/document-list/document-list.module#DocumentListModule' , canActivate: [AuthGuard] },
    { path: 'home',  loadChildren: './pages/home/home.module#HomeModule' , canActivate: [AuthGuard] },
    { path: 'jobapplications/:id',  loadChildren: './pages/job-application-edit/job-application-edit.module#JobApplicationEditModule' , canActivate: [AuthGuard] },
    { path: 'jobapplications',  loadChildren: './pages/job-application-list/job-application-list.module#JobApplicationListModule' , canActivate: [AuthGuard] },
    { path: 'positions/:id',  loadChildren: './pages/position-edit/position-edit.module#PositionEditModule' , canActivate: [AuthGuard] },
    { path: 'positions',  loadChildren: './pages/position-list/position-list.module#PositionListModule' , canActivate: [AuthGuard] },
    { path: 'processflows/:id',  loadChildren: './pages/process-flow-edit/process-flow-edit.module#ProcessFlowEditModule' , canActivate: [AuthGuard] },
    { path: 'processflows',  loadChildren: './pages/process-flow-list/process-flow-list.module#ProcessFlowListModule' , canActivate: [AuthGuard] },
    { path: 'rolepermissions/:id',  loadChildren: './pages/role-permission-edit/role-permission-edit.module#RolePermissionEditModule' , canActivate: [AuthGuard] },
    { path: 'rolepermissions',  loadChildren: './pages/role-permission-list/role-permission-list.module#RolePermissionListModule' , canActivate: [AuthGuard] },
    { path: 'surveys/:id',  loadChildren: './pages/survey-edit/survey-edit.module#SurveyEditModule' , canActivate: [AuthGuard] },
    { path: 'surveys',  loadChildren: './pages/survey-list/survey-list.module#SurveyListModule' , canActivate: [AuthGuard] },
    { path: 'tasks/:id',  loadChildren: './pages/task-edit/task-edit.module#TaskEditModule' , canActivate: [AuthGuard] },
    { path: 'tasks',  loadChildren: './pages/task-list/task-list.module#TaskListModule' , canActivate: [AuthGuard] },
    { path: 'tasklists/:id',  loadChildren: './pages/task-list-edit/task-list-edit.module#TaskListEditModule' , canActivate: [AuthGuard] },
    { path: 'tasklists',  loadChildren: './pages/task-list-list/task-list-list.module#TaskListListModule' , canActivate: [AuthGuard] },
    { path: 'users/:id',  loadChildren: './pages/user-edit/user-edit.module#UserEditModule' , canActivate: [AuthGuard] },
    { path: 'users',  loadChildren: './pages/user-list/user-list.module#UserListModule' , canActivate: [AuthGuard] },
    { path: 'usernotifications/:id',  loadChildren: './pages/user-notification-edit/user-notification-edit.module#UserNotificationEditModule' , canActivate: [AuthGuard] },
    { path: 'usernotifications',  loadChildren: './pages/user-notification-list/user-notification-list.module#UserNotificationListModule' , canActivate: [AuthGuard] },

 /* END MY VIEWS */

    // SECURITY
    { path: 'manage-users',  loadChildren: './security/manage-user/list-user/manage-user-list.module#ManageUserListModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'manage-users/:id',  loadChildren: './security/manage-user/edit-user/manage-user-edit.module#ManageUserEditModule', canActivate: [AuthGuard], data: ['ADMIN']},
    { path: 'profile',  loadChildren: './security/profile/profile.module#ProfileModule', canActivate: [AuthGuard] },
    { path: 'login', loadChildren: './pages/login/login.module#LoginModule'}
];

/**
 * ROUTING MODULE
 */
@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
})

export class AppRoutingModule {}
