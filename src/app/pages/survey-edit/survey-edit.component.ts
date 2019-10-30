// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { SurveyService } from '../../services/survey.service';
// Import Models
import { Survey } from '../../domain/easy-recruit-demo_db/survey';
import { CandidateSurvey } from '../../domain/easy-recruit-demo_db/candidate-survey';

// START - USED SERVICES
/**
* SurveyService.create
*	@description CRUD ACTION create
*
* SurveyService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* SurveyService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Survey
 */
@Component({
    selector: 'app-survey-edit',
    templateUrl: 'survey-edit.component.html',
    styleUrls: ['survey-edit.component.css']
})
export class SurveyEditComponent implements OnInit {
    item: Survey;
    listSurvey: Survey[];
    externalCandidateSurvey: CandidateSurvey[];
    model: Survey;
    formValid: Boolean;

    constructor(
    private surveyService: SurveyService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Survey();
        this.externalCandidateSurvey = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.surveyService.get(id).subscribe(item => this.item = item);
                this.candidatesurveyService.findBySurvey(id).subscribe(list => this.externalCandidateSurvey = list);
            }
            // Get relations
        });
    }


    /**
     * Save Survey
     *
     * @param {boolean} formValid Form validity check
     * @param Survey item Survey to save
     */
    save(formValid: boolean, item: Survey): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.surveyService.update(item).subscribe(data => this.goBack());
            } else {
                this.surveyService.create(item).subscribe(data => this.goBack());
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



