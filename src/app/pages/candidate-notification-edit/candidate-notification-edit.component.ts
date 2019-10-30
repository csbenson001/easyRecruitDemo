// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CandidateNotificationService } from '../../services/candidate-notification.service';
import { CandidateService } from '../../services/candidate.service';
// Import Models
import { CandidateNotification } from '../../domain/easy-recruit-demo_db/candidate-notification';
import { Candidate } from '../../domain/easy-recruit-demo_db/candidate';

// START - USED SERVICES
/**
* CandidateNotificationService.create
*	@description CRUD ACTION create
*
* CandidateNotificationService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* CandidateService.list
*	@description CRUD ACTION list
*
* CandidateNotificationService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a CandidateNotification
 */
@Component({
    selector: 'app-candidate-notification-edit',
    templateUrl: 'candidate-notification-edit.component.html',
    styleUrls: ['candidate-notification-edit.component.css']
})
export class CandidateNotificationEditComponent implements OnInit {
    item: CandidateNotification;
    listCandidate: Candidate[];
    model: CandidateNotification;
    formValid: Boolean;

    constructor(
    private candidatenotificationService: CandidateNotificationService,
    private candidateService: CandidateService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new CandidateNotification();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.candidatenotificationService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.candidateService.list().subscribe(list => this.listCandidate = list);
        });
    }


    /**
     * Save CandidateNotification
     *
     * @param {boolean} formValid Form validity check
     * @param CandidateNotification item CandidateNotification to save
     */
    save(formValid: boolean, item: CandidateNotification): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.candidatenotificationService.update(item).subscribe(data => this.goBack());
            } else {
                this.candidatenotificationService.create(item).subscribe(data => this.goBack());
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



