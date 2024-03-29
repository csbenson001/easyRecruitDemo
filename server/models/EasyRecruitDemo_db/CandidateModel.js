import CandidateModelGenerated from "./generated/CandidateModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = CandidateModelGenerated.init();
  
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
      return await CandidateModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...CandidateModelGenerated,
  ...customModel
};
