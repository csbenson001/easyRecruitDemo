import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { CandidateSurveyService } from '../../services/candidate-survey.service';
// Import Models
import { CandidateSurvey } from '../../domain/easy-recruit-demo_db/candidate-survey';

// START - USED SERVICES
/**
* CandidateSurveyService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* CandidateSurveyService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of CandidateSurvey
 * @class CandidateSurveyListComponent
 */
@Component({
    selector: 'app-candidate-survey-list',
    templateUrl: './candidate-survey-list.component.html',
    styleUrls: ['./candidate-survey-list.component.css']
})
export class CandidateSurveyListComponent implements OnInit {
    list: CandidateSurvey[];
    search: any = {};
    idSelected: string;
    constructor(
        private candidatesurveyService: CandidateSurveyService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.candidatesurveyService.list().subscribe(list => this.list = list);
    }

    /**
     * Select CandidateSurvey to remove
     *
     * @param {string} id Id of the CandidateSurvey to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected CandidateSurvey
     */
    deleteItem() {
        this.candidatesurveyService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
