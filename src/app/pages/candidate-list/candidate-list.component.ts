import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CandidateService } from '../../services/candidate.service';
// Import Models
import { Candidate } from '../../domain/easy-recruit-demo_db/candidate';

// START - USED SERVICES
/**
* CandidateService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CandidateService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Candidate
 * @class CandidateListComponent
 */
@Component({
    selector: 'app-candidate-list',
    templateUrl: './candidate-list.component.html',
    styleUrls: ['./candidate-list.component.css']
})
export class CandidateListComponent implements OnInit {
    list: Candidate[];
    search: any = {};
    idSelected: string;
    constructor(
        private candidateService: CandidateService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.candidateService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Candidate to remove
     *
     * @param {string} id Id of the Candidate to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Candidate
     */
    deleteItem() {
        this.candidateService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
