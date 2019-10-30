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
 *  FOR CUSTOMIZE surveyBaseService PLEASE EDIT ../survey.service.ts
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
import { Survey } from '../../domain/easy-recruit-demo_db/survey';

/**
 * THIS SERVICE MAKE HTTP REQUEST TO SERVER, FOR CUSTOMIZE IT EDIT ../Survey.service.ts
 */

/*
 * SCHEMA DB Survey
 *
	{
		SurveyDescription: {
			type: 'String'
		},
		SurveyName: {
			type: 'String'
		},
		SurveyQuestions: {
			type: 'String'
		},
		//RELATIONS
		//EXTERNAL RELATIONS
		Survey: {
			type: Schema.ObjectId,
			ref : "CandidateSurvey"
		},
	}
 *
 */
@Injectable()
export class SurveyBaseService {

    contextUrl: string = environment.endpoint + '/survey';
    constructor(
        protected http: HttpClient
        ) { }

    // CRUD METHODS

    /**
    * SurveyService.create
    *   @description CRUD ACTION create
    *
    */
    create(item: Survey): Observable<Survey> {
        return this.http
            .post<Survey>(this.contextUrl, item)
            .pipe(map(data => data));
    }

    /**
    * SurveyService.delete
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
    * SurveyService.get
    *   @description CRUD ACTION get
    *   @param ObjectId id Id resource
    *
    */
    get(id: string): Observable<Survey> {
        return this.http
            .get<Survey>(this.contextUrl + '/' + id)
            .pipe(map(data => data));
    }

    /**
    * SurveyService.list
    *   @description CRUD ACTION list
    *
    */
    list(): Observable<Survey[]> {
        return this.http
            .get<Survey[]>(this.contextUrl)
            .pipe(map(data => data));
    }

    /**
    * SurveyService.update
    *   @description CRUD ACTION update
    *   @param ObjectId id Id
    *
    */
    update(item: Survey): Observable<Survey> {
        return this.http
            .post<Survey>(this.contextUrl + '/' + item._id, item)
            .pipe(map(data => data));
    }


    // Custom APIs

}