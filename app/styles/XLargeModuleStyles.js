import { XLargeCoreStyles } from "@wrappid/core";

export default class XLargeModuleStyles extends XLargeCoreStyles {
  constructor(){
    super();
    this.style = {
      /**************************************************
       * Using XLargeUtilityStyles example
       *************************************************/
      testWrappidStyleClass: { ...this.style.devBorder },
    };
  }
}
