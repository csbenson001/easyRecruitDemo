import TaskModelGenerated from "./generated/TaskModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = TaskModelGenerated.init();
  
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
      return await TaskModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...TaskModelGenerated,
  ...customModel
};
