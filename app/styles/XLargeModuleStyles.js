import { XLargeCoreStyles } from "@wrappid/core";

export class XLargeModuleStyles extends XLargeCoreStyles {
  constructor(){
    super();
    this.style = {
      /**************************************************
       * Using XLargeUtilityStyles example
       *************************************************/
      testWrappidStyleClass: { ...this.styles.devBorder },
    };
  }
}
