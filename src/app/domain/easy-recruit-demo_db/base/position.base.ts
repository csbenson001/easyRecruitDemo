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
 *  TO CUSTOMIZE PositionBase PLEASE EDIT ../position.ts
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

/**
 * This is the model of Position object
 *
 */
export class PositionBase {

    constructor() { }

    public _id: string;
    public EssentialFunctions?: string;
    public FAQ?: string;
    public HealthScreening?: string;
    public HiringManager?: string;
    public Images?: string;
    public JobDescription?: string;
    public PositionName?: string;
    public Requirements?: string;
    public Screening?: string;
    public StartDate?: Date;
    public Status?: string;
    public Videos?: string;
    // Relations m:m Candidates
    public Candidates: string[];
    // Relations m:m TaskLists
    public TaskLists: string[]}
