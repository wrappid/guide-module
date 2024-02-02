import { XXLargeCoreStyles } from "@wrappid/core";

export default class XXLargeModuleStyles extends XXLargeCoreStyles {
  constructor(){
    super();
    this.style = {
      /**************************************************
       * Using XXLargeUtilityStyles example
       *************************************************/
      testWrappidStyleClass: { ...this.styles.devBorder },
    };
  }
}
