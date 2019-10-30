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
 *  TO CUSTOMIZE CandidateSurveyModelGenerated.js PLEASE EDIT ../CandidateSurveyModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_EasyRecruitDemo_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * CandidateSurvey
      */
    const candidatesurveySchema = new mongoose.Schema({
      CandidateId: {
        type: "String"
      },
      Comments: {
        type: "String"
      },
      CompletionDate: {
        type: "Date"
      },
      Response: {
        type: "String"
      },
      Status: {
        type: "String"
      },
      SurveyId: {
        type: "String"
      },
      SurveyQuestions: {
        type: "String"
      },
      // RELATIONS
      Survey: {
        type: Schema.ObjectId,
        ref: "Survey"
      },
      
      // EXTERNAL RELATIONS
      /*
      */
    });

    generatedModel.setModel(db.connection.model("CandidateSurvey", candidatesurveySchema));

    return candidatesurveySchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * CandidateSurveyModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * CandidateSurveyModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * CandidateSurveyModel.findByCandidate
  *   @description CRUD ACTION findByCandidate
  *   @param Objectid key Id della risorsa Candidate da cercare
  *
  */
  async findByCandidate(key) {
    return await generatedModel.model.find({ 'Candidate' : key});
  },
  
  /**
  * CandidateSurveyModel.findBySurvey
  *   @description CRUD ACTION findBySurvey
  *   @param Objectid key Id della risorsa Survey da cercare
  *
  */
  async findBySurvey(key) {
    return await generatedModel.model.find({ 'Survey' : key});
  },
  
  /**
  * CandidateSurveyModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * CandidateSurveyModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * CandidateSurveyModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;