import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { DocumentService } from '../../services/document.service';
// Import Models
import { Document } from '../../domain/easy-recruit-demo_db/document';

// START - USED SERVICES
/**
* DocumentService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* DocumentService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Document
 * @class DocumentListComponent
 */
@Component({
    selector: 'app-document-list',
    templateUrl: './document-list.component.html',
    styleUrls: ['./document-list.component.css']
})
export class DocumentListComponent implements OnInit {
    list: Document[];
    search: any = {};
    idSelected: string;
    constructor(
        private documentService: DocumentService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.documentService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Document to remove
     *
     * @param {string} id Id of the Document to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Document
     */
    deleteItem() {
        this.documentService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
