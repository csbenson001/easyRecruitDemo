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
 *  FOR CUSTOMIZE documentBaseService PLEASE EDIT ../document.service.ts
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
import { Document } from '../../domain/easy-recruit-demo_db/document';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Document.service.ts
 */

/*
 * SCHEMA DB Document
 *
	{
		DocumentName: {
			type: 'String'
		},
		DocumentType: {
			type: 'String'
		},
		DocumentUrl: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		Task: {
			type: Schema.ObjectId,
			ref : "Document"
		},
	}
 *
 */
@Injectable()
export class DocumentBaseService {

    contextUrl: string = environment.endpoint + '/document';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * DocumentService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Document): Observable<Document> {
        return this.http
            .post<Document>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * DocumentService.delete
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
    * DocumentService.findByDocument
    *   @description CRUD ACTION findByDocument
    *   @param Objectid key Id della risorsa Document da cercare
    *
    */
    findByDocument(id: string): Observable<Document[]> {
        return this.http
            .get<Document[]>(this.contextUrl + '/findByDocument/' + id)
            .pipe(
                map(response => response)
            );
    }

    /**
    * DocumentService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Document> {
        return this.http
            .get<Document>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * DocumentService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Document[]> {
        return this.http
            .get<Document[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * DocumentService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Document): Observable<Document> {
        return this.http
            .post<Document>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}
