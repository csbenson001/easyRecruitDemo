import RolePermissionControllerGenerated from "./generated/RolePermissionControllerGenerated";

// Properties
import Properties from "../../properties";

// Database
import RolePermissionModel from "../../models/EasyRecruitDemo_db/RolePermissionModel";

// Security
import { authorize } from "../../security/SecurityManager";

// Errors
import Errors from "../../classes/Errors";
import ErrorManager from "../../classes/ErrorManager";

const customControllers = {
  
  /**
   * Override here your custom routes
   * EXAMPLE:
   *
    
   init: router => {
     const baseUrl = `${Properties.api}/rolepermissions`;
     
     // custom route
     router.get(baseUrl + "/:id", customControllers.get);
     
     // Init super
     RolePermissionControllerGenerated.init(router);
    },

  */

  /**
   * Override here your custom controllers
   * EXAMPLE:
   *
   
    get: async (req, res) => {
      try {
        console.log("This is my custom controller");
        const result = await RolePermissionModel.get(req.params.id);
        res.json(result);
      } catch (err) {
        const safeErr = ErrorManager.getSafeError(err);
        res.status(safeErr.status).json(safeErr);
      }
    }

   */
   
};

export default {
  ...RolePermissionControllerGenerated,
  ...customControllers
};

