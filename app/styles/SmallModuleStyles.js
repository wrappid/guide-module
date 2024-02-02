import { SmallCoreStyles } from "@wrappid/core";

export class SmallModuleStyles extends SmallCoreStyles {
  constructor(){
    super();
    this.style = {
      /**************************************************
       * Using smallUtilityStyles example
       *************************************************/
      testWrappidStyleClass: { ...this.styles.devBorder },
    };
  }
}
