// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreTypographyBody1, FooterLayout, CoreLayoutItem } from "@wrappid/core";

export default function FooterLayoutPage() {
  return (
    <>
      <CoreLayoutItem
        id={FooterLayout.PLACEHOLDER.CONTENT}
        styleClasses={[]}>
        <CoreTypographyBody1>This is content section of FooterLayout</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreLayoutItem
        id={FooterLayout.PLACEHOLDER.FOOTER}
        styleClasses={[]}>
        <CoreTypographyBody1>This is footer section of FooterLayout</CoreTypographyBody1>  
      </CoreLayoutItem>

    </>
  );
}