// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { CandidateService } from '../../services/candidate.service';
import { PositionService } from '../../services/position.service';
// Import Models
import { Candidate } from '../../domain/easy-recruit-demo_db/candidate';
import { CandidateNotification } from '../../domain/easy-recruit-demo_db/candidate-notification';
import { Position } from '../../domain/easy-recruit-demo_db/position';
import { Position } from '../../domain/easy-recruit-demo_db/position';

// START - USED SERVICES
/**
* CandidateService.create
*	@description CRUD ACTION create
*
* PositionService.findByCandidates
*	@description CRUD ACTION findByCandidates
*	@param Objectid key Id della risorsa Candidates da cercare
*
* CandidateService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* PositionService.list
*	@description CRUD ACTION list
*
* CandidateService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Candidate
 */
@Component({
    selector: 'app-candidate-edit',
    templateUrl: 'candidate-edit.component.html',
    styleUrls: ['candidate-edit.component.css']
})
export class CandidateEditComponent implements OnInit {
    item: Candidate;
    listCandidate: Candidate[];
    listCandidates: Candidate[];
    listPositions: Position[];
    externalCandidateNotification: CandidateNotification[];
    externalPosition: Position[];
    model: Candidate;
    formValid: Boolean;

    constructor(
    private candidateService: CandidateService,
    private positionService: PositionService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Candidate();
        this.externalCandidateNotification = [];
        this.externalPosition = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.candidateService.get(id).subscribe(item => this.item = item);
                this.candidatenotificationService.findByCandidate(id).subscribe(list => this.externalCandidateNotification = list);
                this.positionService.findByCandidates(id).subscribe(list => this.externalPosition = list);
            }
            // Get relations
            this.positionService.list().subscribe(list => this.listPositions = list);
        });
    }

    /**
     * Check if an Position is in  Positions
     *
     * @param {string} id Id of Position to search
     * @returns {boolean} True if it is found
     */
    containPosition(id: string): boolean {
        if (!this.item.Positions) return false;
        return this.item.Positions.indexOf(id) !== -1;
    }

    /**
     * Add Position from Candidate
     *
     * @param {string} id Id of Position to add in this.item.Positions array
     */
    addPosition(id: string) {
        if (!this.item.Positions)
            this.item.Positions = [];
        this.item.Positions.push(id);
    }

    /**
     * Remove an Position from a Candidate
     *
     * @param {number} index Index of Position in this.item.Positions array
     */
    removePosition(index: number) {
        this.item.Positions.splice(index, 1);
    }

    /**
     * Save Candidate
     *
     * @param {boolean} formValid Form validity check
     * @param Candidate item Candidate to save
     */
    save(formValid: boolean, item: Candidate): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.candidateService.update(item).subscribe(data => this.goBack());
            } else {
                this.candidateService.create(item).subscribe(data => this.goBack());
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



