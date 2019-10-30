// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { UserNotificationService } from '../../services/user-notification.service';
import { UserService } from '../../services/user.service';
// Import Models
import { UserNotification } from '../../domain/easy-recruit-demo_db/user-notification';
import { User } from '../../domain/easy-recruit-demo_db/user';

// START - USED SERVICES
/**
* UserNotificationService.create
*	@description CRUD ACTION create
*
* UserNotificationService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* UserService.list
*	@description CRUD ACTION list
*
* UserNotificationService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a UserNotification
 */
@Component({
    selector: 'app-user-notification-edit',
    templateUrl: 'user-notification-edit.component.html',
    styleUrls: ['user-notification-edit.component.css']
})
export class UserNotificationEditComponent implements OnInit {
    item: UserNotification;
    listUser: User[];
    model: UserNotification;
    formValid: Boolean;

    constructor(
    private usernotificationService: UserNotificationService,
    private userService: UserService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new UserNotification();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.usernotificationService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.userService.list().subscribe(list => this.listUser = list);
        });
    }


    /**
     * Save UserNotification
     *
     * @param {boolean} formValid Form validity check
     * @param UserNotification item UserNotification to save
     */
    save(formValid: boolean, item: UserNotification): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.usernotificationService.update(item).subscribe(data => this.goBack());
            } else {
                this.usernotificationService.create(item).subscribe(data => this.goBack());
            } 
        }
    }

    /**
     * Go Back
     */
    goBack(): void {
        this.location.back();
    }


}



