import ProcessFlowModelGenerated from "./generated/ProcessFlowModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = ProcessFlowModelGenerated.init();
  
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
      return await ProcessFlowModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...ProcessFlowModelGenerated,
  ...customModel
};
