// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { JobApplicationService } from '../../services/job-application.service';
// Import Models
import { JobApplication } from '../../domain/easy-recruit-demo_db/job-application';

// START - USED SERVICES
/**
* JobApplicationService.create
*	@description CRUD ACTION create
*
* JobApplicationService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* JobApplicationService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a JobApplication
 */
@Component({
    selector: 'app-job-application-edit',
    templateUrl: 'job-application-edit.component.html',
    styleUrls: ['job-application-edit.component.css']
})
export class JobApplicationEditComponent implements OnInit {
    item: JobApplication;
    model: JobApplication;
    formValid: Boolean;

    constructor(
    private jobapplicationService: JobApplicationService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new JobApplication();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.jobapplicationService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save JobApplication
     *
     * @param {boolean} formValid Form validity check
     * @param JobApplication item JobApplication to save
     */
    save(formValid: boolean, item: JobApplication): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.jobapplicationService.update(item).subscribe(data => this.goBack());
            } else {
                this.jobapplicationService.create(item).subscribe(data => this.goBack());
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



