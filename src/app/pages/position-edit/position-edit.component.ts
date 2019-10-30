// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { PositionService } from '../../services/position.service';
import { CandidateService } from '../../services/candidate.service';
import { TaskListService } from '../../services/task-list.service';
// Import Models
import { Position } from '../../domain/easy-recruit-demo_db/position';
import { Candidate } from '../../domain/easy-recruit-demo_db/candidate';
import { Candidate } from '../../domain/easy-recruit-demo_db/candidate';
import { TaskList } from '../../domain/easy-recruit-demo_db/task-list';
import { TaskList } from '../../domain/easy-recruit-demo_db/task-list';

// START - USED SERVICES
/**
* PositionService.create
*	@description CRUD ACTION create
*
* CandidateService.findByPositions
*	@description CRUD ACTION findByPositions
*	@param Objectid key Id della risorsa Positions da cercare
*
* TaskListService.findByPositions
*	@description CRUD ACTION findByPositions
*	@param Objectid key Id della risorsa Positions da cercare
*
* PositionService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* CandidateService.list
*	@description CRUD ACTION list
*
* TaskListService.list
*	@description CRUD ACTION list
*
* PositionService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Position
 */
@Component({
    selector: 'app-position-edit',
    templateUrl: 'position-edit.component.html',
    styleUrls: ['position-edit.component.css']
})
export class PositionEditComponent implements OnInit {
    item: Position;
    listCandidates: Candidate[];
    listPositions: Position[];
    listPositions: Position[];
    listTaskLists: TaskList[];
    externalCandidate: Candidate[];
    externalTaskList: TaskList[];
    model: Position;
    formValid: Boolean;

    constructor(
    private positionService: PositionService,
    private candidateService: CandidateService,
    private tasklistService: TaskListService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Position();
        this.externalCandidate = [];
        this.externalTaskList = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.positionService.get(id).subscribe(item => this.item = item);
                this.candidateService.findByPositions(id).subscribe(list => this.externalCandidate = list);
                this.tasklistService.findByPositions(id).subscribe(list => this.externalTaskList = list);
            }
            // Get relations
            this.candidateService.list().subscribe(list => this.listCandidates = list);
            this.tasklistService.list().subscribe(list => this.listTaskLists = list);
        });
    }

    /**
     * Check if an Candidate is in  Candidates
     *
     * @param {string} id Id of Candidate to search
     * @returns {boolean} True if it is found
     */
    containCandidate(id: string): boolean {
        if (!this.item.Candidates) return false;
        return this.item.Candidates.indexOf(id) !== -1;
    }

    /**
     * Add Candidate from Position
     *
     * @param {string} id Id of Candidate to add in this.item.Candidates array
     */
    addCandidate(id: string) {
        if (!this.item.Candidates)
            this.item.Candidates = [];
        this.item.Candidates.push(id);
    }

    /**
     * Remove an Candidate from a Position
     *
     * @param {number} index Index of Candidate in this.item.Candidates array
     */
    removeCandidate(index: number) {
        this.item.Candidates.splice(index, 1);
    }
    /**
     * Check if an TaskList is in  TaskLists
     *
     * @param {string} id Id of TaskList to search
     * @returns {boolean} True if it is found
     */
    containTaskList(id: string): boolean {
        if (!this.item.TaskLists) return false;
        return this.item.TaskLists.indexOf(id) !== -1;
    }

    /**
     * Add TaskList from Position
     *
     * @param {string} id Id of TaskList to add in this.item.TaskLists array
     */
    addTaskList(id: string) {
        if (!this.item.TaskLists)
            this.item.TaskLists = [];
        this.item.TaskLists.push(id);
    }

    /**
     * Remove an TaskList from a Position
     *
     * @param {number} index Index of TaskList in this.item.TaskLists array
     */
    removeTaskList(index: number) {
        this.item.TaskLists.splice(index, 1);
    }

    /**
     * Save Position
     *
     * @param {boolean} formValid Form validity check
     * @param Position item Position to save
     */
    save(formValid: boolean, item: Position): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.positionService.update(item).subscribe(data => this.goBack());
            } else {
                this.positionService.create(item).subscribe(data => this.goBack());
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



