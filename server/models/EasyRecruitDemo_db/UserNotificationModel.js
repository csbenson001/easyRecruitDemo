import UserNotificationModelGenerated from "./generated/UserNotificationModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = UserNotificationModelGenerated.init();
  
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
      return await UserNotificationModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...UserNotificationModelGenerated,
  ...customModel
};
