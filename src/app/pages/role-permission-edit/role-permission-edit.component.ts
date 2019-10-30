// Import Libraries
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
// Import Services
import { RolePermissionService } from '../../services/role-permission.service';
// Import Models
import { RolePermission } from '../../domain/easy-recruit-demo_db/role-permission';

// START - USED SERVICES
/**
* RolePermissionService.create
*	@description CRUD ACTION create
*
* RolePermissionService.get
*	@description CRUD ACTION get
*	@param ObjectId id Id resource
*
* RolePermissionService.update
*	@description CRUD ACTION update
*	@param ObjectId id Id
*
*/
// END - USED SERVICES

/**
 * This component allows to edit a RolePermission
 */
@Component({
    selector: 'app-role-permission-edit',
    templateUrl: 'role-permission-edit.component.html',
    styleUrls: ['role-permission-edit.component.css']
})
export class RolePermissionEditComponent implements OnInit {
    item: RolePermission;
    model: RolePermission;
    formValid: Boolean;

    constructor(
    private rolepermissionService: RolePermissionService,
    private route: ActivatedRoute,
    private location: Location) {
        // Init item
        this.item = new RolePermission();
    }

    /**
     * Init
     */
    ngOnInit() {
        this.route.params.subscribe(param => {
            const id: string = param['id'];
            if (id !== 'new') {
                this.rolepermissionService.get(id).subscribe(item => this.item = item);
            }
            // Get relations
        });
    }


    /**
     * Save RolePermission
     *
     * @param {boolean} formValid Form validity check
     * @param RolePermission item RolePermission to save
     */
    save(formValid: boolean, item: RolePermission): void {
        this.formValid = formValid;
        if (formValid) {
            if (item._id) {
                this.rolepermissionService.update(item).subscribe(data => this.goBack());
            } else {
                this.rolepermissionService.create(item).subscribe(data => this.goBack());
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



