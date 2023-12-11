import { DefaultUtilityStyles } from "@wrappid/styles";

export const defaultAppStyles = {
  /**************************************************
   * Using defaultUtilityStyles example
   * eg. testWrappidStyleClass: { ...defaultUtilityStyles.anyUtilityStyle },
   *************************************************/
  testWrappidStyleClass: { ...new DefaultUtilityStyles().style.bgBlack }
};
