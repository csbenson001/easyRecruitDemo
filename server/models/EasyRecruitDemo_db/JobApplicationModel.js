import JobApplicationModelGenerated from "./generated/JobApplicationModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = JobApplicationModelGenerated.init();
  
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
      return await JobApplicationModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...JobApplicationModelGenerated,
  ...customModel
};
