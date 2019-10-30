// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { DocumentService } from '../../services/document.service';
import { TaskService } from '../../services/task.service';
// Import Models
import { Document } from '../../domain/easy-recruit-demo_db/document';
import { Task } from '../../domain/easy-recruit-demo_db/task';

// START - USED SERVICES
/**
* DocumentService.create
*	@description CRUD ACTION create
*
* DocumentService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* TaskService.list
*	@description CRUD ACTION list
*
* DocumentService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a Document
 */
@Component({
    selector: 'app-document-edit',
    templateUrl: 'document-edit.component.html',
    styleUrls: ['document-edit.component.css']
})
export class DocumentEditComponent implements OnInit {
    item: Document;
    listTask: Task[];
    model: Document;
    formValid: Boolean;

    constructor(
    private documentService: DocumentService,
    private taskService: TaskService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new Document();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.documentService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
            this.taskService.list().subscribe(list => this.listTask = list);
        });
    }


    /**
     * Save Document
     *
     * @param {boolean} formValid Form validity check
     * @param Document item Document to save
     */
    save(formValid: boolean, item: Document): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.documentService.update(item).subscribe(data => this.goBack());
            } else {
                this.documentService.create(item).subscribe(data => this.goBack());
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



