import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { JobApplicationService } from '../../services/job-application.service';
// Import Models
import { JobApplication } from '../../domain/easy-recruit-demo_db/job-application';

// START - USED SERVICES
/**
* JobApplicationService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* JobApplicationService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of JobApplication
 * @class JobApplicationListComponent
 */
@Component({
    selector: 'app-job-application-list',
    templateUrl: './job-application-list.component.html',
    styleUrls: ['./job-application-list.component.css']
})
export class JobApplicationListComponent implements OnInit {
    list: JobApplication[];
    search: any = {};
    idSelected: string;
    constructor(
        private jobapplicationService: JobApplicationService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.jobapplicationService.list().subscribe(list => this.list = list);
    }

    /**
     * Select JobApplication to remove
     *
     * @param {string} id Id of the JobApplication to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected JobApplication
     */
    deleteItem() {
        this.jobapplicationService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
