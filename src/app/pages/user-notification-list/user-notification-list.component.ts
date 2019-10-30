import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { UserNotificationService } from '../../services/user-notification.service';
// Import Models
import { UserNotification } from '../../domain/easy-recruit-demo_db/user-notification';

// START - USED SERVICES
/**
* UserNotificationService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* UserNotificationService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of UserNotification
 * @class UserNotificationListComponent
 */
@Component({
    selector: 'app-user-notification-list',
    templateUrl: './user-notification-list.component.html',
    styleUrls: ['./user-notification-list.component.css']
})
export class UserNotificationListComponent implements OnInit {
    list: UserNotification[];
    search: any = {};
    idSelected: string;
    constructor(
        private usernotificationService: UserNotificationService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.usernotificationService.list().subscribe(list => this.list = list);
    }

    /**
     * Select UserNotification to remove
     *
     * @param {string} id Id of the UserNotification to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected UserNotification
     */
    deleteItem() {
        this.usernotificationService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
