import { XXLargeCoreStyles } from "@wrappid/core";

export class XXLargeModuleStyles extends XXLargeCoreStyles {
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
