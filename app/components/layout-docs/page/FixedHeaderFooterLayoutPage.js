// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreTypographyBody1, FixedHeaderFooterLayout, CoreLayoutItem } from "@wrappid/core";

export default function FixedHeaderFooterLayoutPage() {
  return (
    <>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.HEADER} styleClasses={[]}>
        <CoreTypographyBody1>This is header section of FixedHeaderFooterLayout</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.CONTENT} styleClasses={[]}>
        <CoreTypographyBody1>This is content section of FixedHeaderFooterLayout</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem id={FixedHeaderFooterLayout.PLACEHOLDER.FOOTER} styleClasses={[]}>
        <CoreTypographyBody1>This is footer section of FixedHeaderFooterLayout</CoreTypographyBody1> 
      </CoreLayoutItem>
    </>
  );
}