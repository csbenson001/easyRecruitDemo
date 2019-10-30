// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CandidateSurveyService } from '../../services/candidate-survey.service';
import { SurveyService } from '../../services/survey.service';
// Import Models
import { CandidateSurvey } from '../../domain/easy-recruit-demo_db/candidate-survey';
import { Survey } from '../../domain/easy-recruit-demo_db/survey';

// START - USED SERVICES
/**
* CandidateSurveyService.create
*	@description CRUD ACTION create
*
* CandidateSurveyService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* SurveyService.list
*	@description CRUD ACTION list
*
* CandidateSurveyService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a CandidateSurvey
 */
@Component({
    selector: 'app-candidate-survey-edit',
    templateUrl: 'candidate-survey-edit.component.html',
    styleUrls: ['candidate-survey-edit.component.css']
})
export class CandidateSurveyEditComponent implements OnInit {
    item: CandidateSurvey;
    listSurvey: Survey[];
    model: CandidateSurvey;
    formValid: Boolean;

    constructor(
    private candidatesurveyService: CandidateSurveyService,
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new CandidateSurvey();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.candidatesurveyService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.surveyService.list().subscribe(list => this.listSurvey = list);
        });
    }


    /**
     * Save CandidateSurvey
     *
     * @param {boolean} formValid Form validity check
     * @param CandidateSurvey item CandidateSurvey to save
     */
    save(formValid: boolean, item: CandidateSurvey): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.candidatesurveyService.update(item).subscribe(data => this.goBack());
            } else {
                this.candidatesurveyService.create(item).subscribe(data => this.goBack());
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



