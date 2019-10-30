import CandidateSurveyModelGenerated from "./generated/CandidateSurveyModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CandidateSurveyModelGenerated.init();
  
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
      return await CandidateSurveyModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CandidateSurveyModelGenerated,
  ...customModel
};
