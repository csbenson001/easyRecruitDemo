// Database
import Database from "../../classes/Database_EasyRecruitDemo_db";
import mongoose, { Schema } from "mongoose";
import ChainModel from "./ChainModel";

// Logger
import Logger from "../../classes/Logger";

// Factom
import Properties from "../../properties";
import Factom from "factom-harmony-connect";
import uuid from "uuid/v1";
import Errors from "../../classes/Errors";

const factomConnectSDK = new Factom(Properties.factom.config);

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
     * Classes
     */
    const classesSchema = new mongoose.Schema({
      chain_id: {
        type: "String",
        required: true
      },
      entry_hash: {
        type: "String",
        required: true
      },
      key_pairs: {
        type: "Object"
      }
      //RELATIONS

      //EXTERNAL RELATIONS
      /*
      chain_id: {
        type: Schema.ObjectId,
        ref : "Chain"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Identities", classesSchema));

    return classesSchema;
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
   * IdentityModel.create
   *   @description CRUD ACTION create
   *
   */
  async create() {
    // Generate an unique ID for the identity
    const id = uuid();

    try {
      const {
        chain_id,
        entry_hash,
        key_pairs
      } = await factomConnectSDK.identities.create({
        names: [id]
      });

      let result = new generatedModel.model({
        chain_id,
        entry_hash,
        key_pairs
      });
      await result.save();

      const insertedId = result._id;

      // Create Audit and Management Chain
      const auditChain = await ChainModel.create(
        key_pairs[0].private_key,
        chain_id,
        "Audit Chain",
        entry_hash,
        insertedId
      );
      const managementChain = await ChainModel.create(
        null,
        chain_id,
        "Management Chain",
        entry_hash,
        insertedId
      );

      // Return the id inserted
      return insertedId;
    } catch (e) {
      if (e.response.status === 403) {
        throw new Errors.INVALID_AUTH_FACTOM();
      } else if (e.response.status === 429) {
        throw new Errors.EXCEDEED_LIMIT_REQUEST();
      }
    }
  },

  /**
   * IdentityModel.list
   *   @description CRUD ACTION list
   *
   */
  async list() {
    return await generatedModel.model.find();
  }
};

export default generatedModel;
