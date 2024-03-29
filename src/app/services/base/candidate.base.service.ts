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
 *  FOR CUSTOMIZE candidateBaseService PLEASE EDIT ../candidate.service.ts
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
import { Candidate } from '../../domain/easy-recruit-demo_db/candidate';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Candidate.service.ts
 */

/*
 * SCHEMA DB Candidate
 *
	{
		AppointmentDate: {
			type: 'Date'
		},
		AppointmentId: {
			type: 'String'
		},
		AppointmentResults: {
			type: 'String'
		},
		AppointmentStatus: {
			type: 'String'
		},
		ConversionFrom: {
			type: 'String'
		},
		DeferReason: {
			type: 'String'
		},
		DeferredDate: {
			type: 'Date'
		},
		Email: {
			type: 'String'
		},
		FirstName: {
			type: 'String'
		},
		HireDate: {
			type: 'Date'
		},
		Hired: {
			type: 'Boolean'
		},
		LastName: {
			type: 'String'
		},
		MiddleName: {
			type: 'String'
		},
		Recruiter: {
			type: 'String'
		},
		ReferredBy: {
			type: 'String'
		},
		SAPUser: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		Candidate: {
			type: Schema.ObjectId,
			ref : "CandidateNotification"
		},
		Candidates: [{
			type: Schema.ObjectId,
			ref : "Position"
		}],
		Positions: [{
			type: Schema.ObjectId,
			ref : "Candidate"
		}],
	}
 *
 */
@Injectable()
export class CandidateBaseService {

    contextUrl: string = environment.endpoint + '/candidate';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * CandidateService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Candidate): Observable<Candidate> {
        return this.http
            .post<Candidate>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * CandidateService.delete
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
    * CandidateService.findByPositions
    *   @description CRUD ACTION findByPositions
    *   @param Objectid key Id della risorsa Positions da cercare
    *
    */
    findByPositions(id: string): Observable<Candidate[]> {
        return this.http
            .get<Candidate[]>(this.contextUrl + '/findByPositions/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * CandidateService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Candidate> {
        return this.http
            .get<Candidate>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * CandidateService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Candidate[]> {
        return this.http
            .get<Candidate[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * CandidateService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Candidate): Observable<Candidate> {
        return this.http
            .post<Candidate>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
