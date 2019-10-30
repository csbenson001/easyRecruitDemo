// Import Mongoose
import mongoose from "mongoose";
// Logging
import Logger from "./Logger";
// Properties
import properties from "../properties.js";

// Start Import Models

import CandidateModel from "../models/EasyRecruitDemo_db/CandidateModel";
import CandidateNotificationModel from "../models/EasyRecruitDemo_db/CandidateNotificationModel";
import CandidateSurveyModel from "../models/EasyRecruitDemo_db/CandidateSurveyModel";
import DocumentModel from "../models/EasyRecruitDemo_db/DocumentModel";
import JobApplicationModel from "../models/EasyRecruitDemo_db/JobApplicationModel";
import PositionModel from "../models/EasyRecruitDemo_db/PositionModel";
import ProcessFlowModel from "../models/EasyRecruitDemo_db/ProcessFlowModel";
import RolePermissionModel from "../models/EasyRecruitDemo_db/RolePermissionModel";
import SurveyModel from "../models/EasyRecruitDemo_db/SurveyModel";
import TaskModel from "../models/EasyRecruitDemo_db/TaskModel";
import TaskListModel from "../models/EasyRecruitDemo_db/TaskListModel";
import UserModel from "../models/EasyRecruitDemo_db/UserModel";
import UserNotificationModel from "../models/EasyRecruitDemo_db/UserNotificationModel";

// End Import Models

// Import Models Factom Blockchain
import IdentityModel from "../models/EasyRecruitDemo_db/IdentityModel";
import ChainModel from "../models/EasyRecruitDemo_db/ChainModel";
import EntryModel from "../models/EasyRecruitDemo_db/EntryModel";

class Database {
  constructor() {}

  /**
   * Init database
   */
  async init() {
    await this.authenticate();
    Logger.info("MongoDB connected at: " + properties.easyRecruitDemo_db_dbUrl);

    // Start Init Models

		CandidateModel.init();
		CandidateNotificationModel.init();
		CandidateSurveyModel.init();
		DocumentModel.init();
		JobApplicationModel.init();
		PositionModel.init();
		ProcessFlowModel.init();
		RolePermissionModel.init();
		SurveyModel.init();
		TaskModel.init();
		TaskListModel.init();
		UserModel.init();
		UserNotificationModel.init();
 // End Init Models
    
    // Init Models Factom Blockchain
    IdentityModel.init();
    ChainModel.init();
    EntryModel.init();
  }

  /**
   * Start database connection
   */
  async authenticate() {
    Logger.info("Authenticating to the databases...");
    try {
      this.dbConnection_easyRecruitDemo_db = await mongoose.connect(
        "mongodb://" + properties.easyRecruitDemo_db_dbUrl,
        { useNewUrlParser: true }
      );
    } catch (err) {
      Logger.error(`Failed connection to the DB: ${err.message}`);
      Logger.error(err);
      await new Promise(resolve => setTimeout(resolve, 5000));
      await this.authenticate();
    }
  }

  /**
   * Get connection db
   */
  getConnection() {
    return this.dbConnection_easyRecruitDemo_db;
  }
}

export default new Database();
