import { MediumCoreStyles } from "@wrappid/core";

export default class MediumModuleStyles extends MediumCoreStyles {
  constructor(){
    super();
    this.style = {
      /**************************************************
       * Using defaultUtilityStyles example
       *************************************************/
      testWrappidStyleClass: { ...this.style.devBorder },
    };
  }
}
