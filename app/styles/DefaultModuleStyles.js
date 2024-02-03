import { DefaultCoreStyles } from "@wrappid/core";

export default class DefaultModuleStyles extends DefaultCoreStyles {
  constructor(){
    super();
    this.style = {
      /**************************************************
       * Using defaultUtilityStyles example
       *************************************************/
      testWrappidStyleClass: { ...this.styles.devBorder },
    };
  }
}
