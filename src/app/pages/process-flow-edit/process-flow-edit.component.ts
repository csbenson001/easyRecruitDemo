// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { ProcessFlowService } from '../../services/process-flow.service';
// Import Models
import { ProcessFlow } from '../../domain/easy-recruit-demo_db/process-flow';

// START - USED SERVICES
/**
* ProcessFlowService.create
*	@description CRUD ACTION create
*
* ProcessFlowService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* ProcessFlowService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a ProcessFlow
 */
@Component({
    selector: 'app-process-flow-edit',
    templateUrl: 'process-flow-edit.component.html',
    styleUrls: ['process-flow-edit.component.css']
})
export class ProcessFlowEditComponent implements OnInit {
    item: ProcessFlow;
    model: ProcessFlow;
    formValid: Boolean;

    constructor(
    private processflowService: ProcessFlowService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new ProcessFlow();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.processflowService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save ProcessFlow
     *
     * @param {boolean} formValid Form validity check
     * @param ProcessFlow item ProcessFlow to save
     */
    save(formValid: boolean, item: ProcessFlow): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.processflowService.update(item).subscribe(data => this.goBack());
            } else {
                this.processflowService.create(item).subscribe(data => this.goBack());
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



