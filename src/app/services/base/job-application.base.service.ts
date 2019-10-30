/**
 *
 *
  _____                      _              _ _ _     _   _     _        __ _ _
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|

 * DO NOT EDIT THIS FILE!!
 *
 *  FOR CUSTOMIZE job-applicationBaseService PLEASE EDIT ../job-application.service.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */
 // DEPENDENCIES
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

// CONFIG
import { environment } from '../../../environments/environment';

// MODEL
import { JobApplication } from '../../domain/easy-recruit-demo_db/job-application';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../JobApplication.service.ts
 */

/*
 * SCHEMA DB JobApplication
 *
	{
		ConversionFrom: {
			type: 'String'
		},
		DateSubmitted: {
			type: 'Date'
		},
		Email: {
			type: 'String'
		},
		FirstName: {
			type: 'String'
		},
		IsCandidate: {
			type: 'Boolean'
		},
		LastName: {
			type: 'String'
		},
		MiddleName: {
			type: 'String'
		},
		ReferredBy: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
	}
 *
 */
@Injectable()
export class JobApplicationBaseService {

    contextUrl: string = environment.endpoint + '/application';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * JobApplicationService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: JobApplication): Observable<JobApplication> {
        return this.http
            .post<JobApplication>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * JobApplicationService.delete
    *   @description CRUD ACTION delete
    *   @param ObjectId id Id
    *
    */
    remove(id: string): Observable<void> {
        return this.http
            .delete<void>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * JobApplicationService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<JobApplication> {
        return this.http
            .get<JobApplication>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * JobApplicationService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<JobApplication[]> {
        return this.http
            .get<JobApplication[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * JobApplicationService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: JobApplication): Observable<JobApplication> {
        return this.http
            .post<JobApplication>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
