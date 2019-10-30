import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { TaskService } from '../../services/task.service';
// Import Models
import { Task } from '../../domain/easy-recruit-demo_db/task';

// START - USED SERVICES
/**
* TaskService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* TaskService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Task
 * @class TaskListComponent
 */
@Component({
    selector: 'app-task-list',
    templateUrl: './task-list.component.html',
    styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
    list: Task[];
    search: any = {};
    idSelected: string;
    constructor(
        private taskService: TaskService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.taskService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Task to remove
     *
     * @param {string} id Id of the Task to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Task
     */
    deleteItem() {
        this.taskService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
