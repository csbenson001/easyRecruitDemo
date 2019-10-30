import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
// Import Services
import { RolePermissionService } from '../../services/role-permission.service';
// Import Models
import { RolePermission } from '../../domain/easy-recruit-demo_db/role-permission';

// START - USED SERVICES
/**
* RolePermissionService.delete
*	@description CRUD ACTION delete
*	@param ObjectId id Id
*
* RolePermissionService.list
*	@description CRUD ACTION list
*
*/
// END - USED SERVICES

/**
 * This component shows a list of RolePermission
 * @class RolePermissionListComponent
 */
@Component({
    selector: 'app-role-permission-list',
    templateUrl: './role-permission-list.component.html',
    styleUrls: ['./role-permission-list.component.css']
})
export class RolePermissionListComponent implements OnInit {
    list: RolePermission[];
    search: any = {};
    idSelected: string;
    constructor(
        private rolepermissionService: RolePermissionService,
    ) { }

    /**
     * Init
     */
    ngOnInit(): void {
        this.rolepermissionService.list().subscribe(list => this.list = list);
    }

    /**
     * Select RolePermission to remove
     *
     * @param {string} id Id of the RolePermission to remove
     */
    selectId(id: string) {
        this.idSelected = id;
    }

    /**
     * Remove selected RolePermission
     */
    deleteItem() {
        this.rolepermissionService.remove(this.idSelected).subscribe(data => this.list = this.list.filter(el => el._id !== this.idSelected));
    }

}
