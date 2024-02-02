import { DefaultCoreStyles } from "@wrappid/core";

export class DefaultModuleStyles extends DefaultCoreStyles {
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
