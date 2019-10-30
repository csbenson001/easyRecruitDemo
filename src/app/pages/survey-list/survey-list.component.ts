import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { SurveyService } from '../../services/survey.service';
// Import Models
import { Survey } from '../../domain/easy-recruit-demo_db/survey';

// START - USED SERVICES
/**
* SurveyService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* SurveyService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Survey
 * @class SurveyListComponent
 */
@Component({
    selector: 'app-survey-list',
    templateUrl: './survey-list.component.html',
    styleUrls: ['./survey-list.component.css']
})
export class SurveyListComponent implements OnInit {
    list: Survey[];
    search: any = {};
    idSelected: string;
    constructor(
        private surveyService: SurveyService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.surveyService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Survey to remove
     *
     * @param {string} id Id of the Survey to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Survey
     */
    deleteItem() {
        this.surveyService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
