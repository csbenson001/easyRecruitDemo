import RolePermissionModelGenerated from "./generated/RolePermissionModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = RolePermissionModelGenerated.init();
  
      schema.add({
        extraCustomField: Object
      });
    },
     
   */


  /**
   * Override here your custom queries
   * EXAMPLE:
   *
   
    async get(id) {
      console.log("This is my custom query");
      return await RolePermissionModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...RolePermissionModelGenerated,
  ...customModel
};
