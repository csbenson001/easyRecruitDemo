// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TaskListService } from '../../services/task-list.service';
import { PositionService } from '../../services/position.service';
// Import Models
import { TaskList } from '../../domain/easy-recruit-demo_db/task-list';
import { Position } from '../../domain/easy-recruit-demo_db/position';
import { Task } from '../../domain/easy-recruit-demo_db/task';
import { Position } from '../../domain/easy-recruit-demo_db/position';

// START - USED SERVICES
/**
* TaskListService.create
*	@description CRUD ACTION create
*
* PositionService.findByTaskLists
*	@description CRUD ACTION findByTaskLists
*	@param Objectid key Id della risorsa TaskLists da cercare
*
* TaskListService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* PositionService.list
*	@description CRUD ACTION list
*
* TaskListService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a TaskList
 */
@Component({
    selector: 'app-task-list-edit',
    templateUrl: 'task-list-edit.component.html',
    styleUrls: ['task-list-edit.component.css']
})
export class TaskListEditComponent implements OnInit {
    item: TaskList;
    listPositions: Position[];
    listTaskList: TaskList[];
    listTaskLists: TaskList[];
    externalTask: Task[];
    externalPosition: Position[];
    model: TaskList;
    formValid: Boolean;

    constructor(
    private tasklistService: TaskListService,
    private positionService: PositionService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new TaskList();
        this.externalTask = [];
        this.externalPosition = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.tasklistService.get(id).subscribe(item => this.item = item);
                this.taskService.findByTaskList(id).subscribe(list => this.externalTask = list);
                this.positionService.findByTaskLists(id).subscribe(list => this.externalPosition = list);
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
     * Add Position from TaskList
     *
     * @param {string} id Id of Position to add in this.item.Positions array
     */
    addPosition(id: string) {
        if (!this.item.Positions)
            this.item.Positions = [];
        this.item.Positions.push(id);
    }

    /**
     * Remove an Position from a TaskList
     *
     * @param {number} index Index of Position in this.item.Positions array
     */
    removePosition(index: number) {
        this.item.Positions.splice(index, 1);
    }

    /**
     * Save TaskList
     *
     * @param {boolean} formValid Form validity check
     * @param TaskList item TaskList to save
     */
    save(formValid: boolean, item: TaskList): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.tasklistService.update(item).subscribe(data => this.goBack());
            } else {
                this.tasklistService.create(item).subscribe(data => this.goBack());
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



