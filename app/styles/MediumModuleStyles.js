import { MediumCoreStyles } from "@wrappid/core";

export class MediumModuleStyles extends MediumCoreStyles {
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
