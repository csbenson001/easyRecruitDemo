import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CandidateNotificationService } from '../../services/candidate-notification.service';
// Import Models
import { CandidateNotification } from '../../domain/easy-recruit-demo_db/candidate-notification';

// START - USED SERVICES
/**
* CandidateNotificationService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CandidateNotificationService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of CandidateNotification
 * @class CandidateNotificationListComponent
 */
@Component({
    selector: 'app-candidate-notification-list',
    templateUrl: './candidate-notification-list.component.html',
    styleUrls: ['./candidate-notification-list.component.css']
})
export class CandidateNotificationListComponent implements OnInit {
    list: CandidateNotification[];
    search: any = {};
    idSelected: string;
    constructor(
        private candidatenotificationService: CandidateNotificationService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.candidatenotificationService.list().subscribe(list => this.list = list);
    }

    /**
     * Select CandidateNotification to remove
     *
     * @param {string} id Id of the CandidateNotification to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected CandidateNotification
     */
    deleteItem() {
        this.candidatenotificationService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
