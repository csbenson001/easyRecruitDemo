import SurveyModelGenerated from "./generated/SurveyModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = SurveyModelGenerated.init();
  
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
      return await SurveyModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...SurveyModelGenerated,
  ...customModel
};
