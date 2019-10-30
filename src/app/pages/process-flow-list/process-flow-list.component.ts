import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { ProcessFlowService } from '../../services/process-flow.service';
// Import Models
import { ProcessFlow } from '../../domain/easy-recruit-demo_db/process-flow';

// START - USED SERVICES
/**
* ProcessFlowService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* ProcessFlowService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of ProcessFlow
 * @class ProcessFlowListComponent
 */
@Component({
    selector: 'app-process-flow-list',
    templateUrl: './process-flow-list.component.html',
    styleUrls: ['./process-flow-list.component.css']
})
export class ProcessFlowListComponent implements OnInit {
    list: ProcessFlow[];
    search: any = {};
    idSelected: string;
    constructor(
        private processflowService: ProcessFlowService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.processflowService.list().subscribe(list => this.list = list);
    }

    /**
     * Select ProcessFlow to remove
     *
     * @param {string} id Id of the ProcessFlow to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected ProcessFlow
     */
    deleteItem() {
        this.processflowService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
