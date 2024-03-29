// Database
import Database from "../../classes/Database_EasyRecruitDemo_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../classes/Logger";

// Factom
import sha256 from "sha256";
import canonicalize from "canonical-json";
import Properties from "../../properties";
import Factom from "factom-harmony-connect";
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
      entry_hash: {
        type: "String",
        required: true
      },
      content: {
        type: "String",
        required: true
      },

      // RELATIONS
      chain: {
        type: Schema.ObjectId,
        ref: "Chain"
      }

      // EXTERNAL RELATIONS
      /*
      chain_id: {
        type: Schema.ObjectId,
        ref : "Chain"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Entries", classesSchema));

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
   * EntryModel.create
   *   @description CRUD ACTION create
   *
   */
  async create(chainId, signerPrivateKey, signerChainId, modelContent, chain) {
    try {
      // Convert the model content into a hash
      const content = sha256(canonicalize(modelContent));
      const entry = await factomConnectSDK.chains.entries.create({
        chainId,
        signerPrivateKey,
        signerChainId,
        content
      });
      let result = new generatedModel.model({
        entry_hash: entry.entry_hash,
        chain: chain,
        content: content
      });

      return await result.save();
    } catch (e) {
      if (e.response.status === 403) {
        throw new Errors.INVALID_AUTH_FACTOM();
      } else if (e.response.status === 429) {
        throw new Errors.EXCEDEED_LIMIT_REQUEST();
      }
    }
  },

  /**
   * EntryModel.list
   *   @description CRUD ACTION list
   *
   */
  async list() {
    return await generatedModel.model.find();
  }
};

export default generatedModel;
