import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { TaskListService } from '../../services/task-list.service';
// Import Models
import { TaskList } from '../../domain/easy-recruit-demo_db/task-list';

// START - USED SERVICES
/**
* TaskListService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* TaskListService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of TaskList
 * @class TaskListListComponent
 */
@Component({
    selector: 'app-task-list-list',
    templateUrl: './task-list-list.component.html',
    styleUrls: ['./task-list-list.component.css']
})
export class TaskListListComponent implements OnInit {
    list: TaskList[];
    search: any = {};
    idSelected: string;
    constructor(
        private tasklistService: TaskListService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.tasklistService.list().subscribe(list => this.list = list);
    }

    /**
     * Select TaskList to remove
     *
     * @param {string} id Id of the TaskList to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected TaskList
     */
    deleteItem() {
        this.tasklistService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
