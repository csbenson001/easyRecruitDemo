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
 *  FOR CUSTOMIZE positionBaseService PLEASE EDIT ../position.service.ts
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
import { Position } from '../../domain/easy-recruit-demo_db/position';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Position.service.ts
 */

/*
 * SCHEMA DB Position
 *
	{
		EssentialFunctions: {
			type: 'String'
		},
		FAQ: {
			type: 'String'
		},
		HealthScreening: {
			type: 'String'
		},
		HiringManager: {
			type: 'String'
		},
		Images: {
			type: 'String'
		},
		JobDescription: {
			type: 'String'
		},
		PositionName: {
			type: 'String'
		},
		Requirements: {
			type: 'String'
		},
		Screening: {
			type: 'String'
		},
		StartDate: {
			type: 'Date'
		},
		Status: {
			type: 'String'
		},
		Videos: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		Candidates: [{
			type: Schema.ObjectId,
			ref : "Position"
		}],
		Positions: [{
			type: Schema.ObjectId,
			ref : "Candidate"
		}],
		Positions: [{
			type: Schema.ObjectId,
			ref : "TaskList"
		}],
		TaskLists: [{
			type: Schema.ObjectId,
			ref : "Position"
		}],
	}
 *
 */
@Injectable()
export class PositionBaseService {

    contextUrl: string = environment.endpoint + '/positions';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * PositionService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Position): Observable<Position> {
        return this.http
            .post<Position>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * PositionService.delete
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
    * PositionService.findByCandidates
    *   @description CRUD ACTION findByCandidates
    *   @param Objectid key Id della risorsa Candidates da cercare
    *
    */
    findByCandidates(id: string): Observable<Position[]> {
        return this.http
            .get<Position[]>(this.contextUrl + '/findByCandidates/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * PositionService.findByTaskList
    *   @description CRUD ACTION findByTaskList
    *   @param Objectid key Id della risorsa TaskList da cercare
    *
    */
    findByTaskList(id: string): Observable<Position[]> {
        return this.http
            .get<Position[]>(this.contextUrl + '/findByTaskList/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * PositionService.findByTaskLists
    *   @description CRUD ACTION findByTaskLists
    *   @param Objectid key Id della risorsa TaskLists da cercare
    *
    */
    findByTaskLists(id: string): Observable<Position[]> {
        return this.http
            .get<Position[]>(this.contextUrl + '/findByTaskLists/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * PositionService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Position> {
        return this.http
            .get<Position>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * PositionService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Position[]> {
        return this.http
            .get<Position[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * PositionService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Position): Observable<Position> {
        return this.http
            .post<Position>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
