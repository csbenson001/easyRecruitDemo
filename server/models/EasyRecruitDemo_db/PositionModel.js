import PositionModelGenerated from "./generated/PositionModelGenerated";

const customModel = {
  
  /**
   * Customize here your schema with custom attributes
   * 
   * EXAMPLE:
    
    init() {
      let schema = PositionModelGenerated.init();
  
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
      return await PositionModelGenerated.getModel().findOne({ _id: id });
    }

   */

};

export default {
  ...PositionModelGenerated,
  ...customModel
};
