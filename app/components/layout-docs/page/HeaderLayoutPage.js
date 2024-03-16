// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreTypographyBody1, HeaderLayout, CoreLayoutItem } from "@wrappid/core";

export default function HeaderLayoutPage() {
  return (
    <>

      <CoreLayoutItem
        id={HeaderLayout.PLACEHOLDER.HEADER} 
        styleClasses={[]}>
        <CoreTypographyBody1>This is header content of HeaderLayout</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem
        id={HeaderLayout.PLACEHOLDER.CONTENT}
        styleClasses={[]}>
        <CoreTypographyBody1>This is content section of HeaderLayout</CoreTypographyBody1>
      </CoreLayoutItem>

    </>
  );
}