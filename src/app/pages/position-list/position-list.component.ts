import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { PositionService } from '../../services/position.service';
// Import Models
import { Position } from '../../domain/easy-recruit-demo_db/position';

// START - USED SERVICES
/**
* PositionService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* PositionService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of Position
 * @class PositionListComponent
 */
@Component({
    selector: 'app-position-list',
    templateUrl: './position-list.component.html',
    styleUrls: ['./position-list.component.css']
})
export class PositionListComponent implements OnInit {
    list: Position[];
    search: any = {};
    idSelected: string;
    constructor(
        private positionService: PositionService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.positionService.list().subscribe(list => this.list = list);
    }

    /**
     * Select Position to remove
     *
     * @param {string} id Id of the Position to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected Position
     */
    deleteItem() {
        this.positionService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
