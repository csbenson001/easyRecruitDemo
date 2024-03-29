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
 *  TO CUSTOMIZE TaskListModelGenerated.js PLEASE EDIT ../TaskListModel.js
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
      * TaskList
      */
    const tasklistSchema = new mongoose.Schema({
      Comments: {
        type: "String"
      },
      TaskDescription: {
        type: "String"
      },
      TaskListName: {
        type: "String"
      },
      TaskName: {
        type: "String"
      },
      // RELATIONS
      Positions: [{
        type: Schema.ObjectId,
        ref: "Position"
      }],
      
      // EXTERNAL RELATIONS
      /*
      TaskList: [{
        type: Schema.ObjectId,
        ref: "Task"
      }],
      TaskLists: [{
        type: Schema.ObjectId,
        ref: "Position"
      }],
      */
    });

    generatedModel.setModel(db.connection.model("TaskList", tasklistSchema));

    return tasklistSchema;
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
  * TaskListModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * TaskListModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * TaskListModel.findByPositions
  *   @description CRUD ACTION findByPositions
  *   @param Objectid key Id della risorsa Positions da cercare
  *
  */
  async findByPositions(key) {
    return await generatedModel.model.find({ 'Positions' : key});
  },
  
  /**
  * TaskListModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * TaskListModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * TaskListModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
