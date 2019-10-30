// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { TaskService } from '../../services/task.service';
import { DocumentService } from '../../services/document.service';
import { TaskListService } from '../../services/task-list.service';
// Import Models
import { Task } from '../../domain/easy-recruit-demo_db/task';
import { Document } from '../../domain/easy-recruit-demo_db/document';
import { TaskList } from '../../domain/easy-recruit-demo_db/task-list';

// START - USED SERVICES
/**
* TaskService.create
*	@description CRUD ACTION create
*
* DocumentService.findByDocument
*	@description CRUD ACTION findByDocument
*	@param Objectid key Id della risorsa Document da cercare
*
* TaskService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* TaskListService.list
*	@description CRUD ACTION list
*
* TaskService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Task
 */
@Component({
    selector: 'app-task-edit',
    templateUrl: 'task-edit.component.html',
    styleUrls: ['task-edit.component.css']
})
export class TaskEditComponent implements OnInit {
    item: Task;
    listTask: Task[];
    listTaskList: TaskList[];
    externalDocument: Document[];
    model: Task;
    formValid: Boolean;

    constructor(
    private taskService: TaskService,
    private documentService: DocumentService,
    private tasklistService: TaskListService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Task();
        this.externalDocument = [];
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.taskService.get(id).subscribe(item => this.item = item);
                this.documentService.findByTask(id).subscribe(list => this.externalDocument = list);
            }
            // Get relations
            this.tasklistService.list().subscribe(list => this.listTaskList = list);
        });
    }

    /**
     * Check if an TaskList is in  TaskList
     *
     * @param {string} id Id of TaskList to search
     * @returns {boolean} True if it is found
     */
    containTaskList(id: string): boolean {
        if (!this.item.TaskList) return false;
        return this.item.TaskList.indexOf(id) !== -1;
    }

    /**
     * Add TaskList from Task
     *
     * @param {string} id Id of TaskList to add in this.item.TaskList array
     */
    addTaskList(id: string) {
        if (!this.item.TaskList)
            this.item.TaskList = [];
        this.item.TaskList.push(id);
    }

    /**
     * Remove an TaskList from a Task
     *
     * @param {number} index Index of TaskList in this.item.TaskList array
     */
    removeTaskList(index: number) {
        this.item.TaskList.splice(index, 1);
    }

    /**
     * Save Task
     *
     * @param {boolean} formValid Form validity check
     * @param Task item Task to save
     */
    save(formValid: boolean, item: Task): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.taskService.update(item).subscribe(data => this.goBack());
            } else {
                this.taskService.create(item).subscribe(data => this.goBack());
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



