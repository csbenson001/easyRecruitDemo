import CandidateNotificationModelGenerated from "./generated/CandidateNotificationModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CandidateNotificationModelGenerated.init();
  
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
      return await CandidateNotificationModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CandidateNotificationModelGenerated,
  ...customModel
};
