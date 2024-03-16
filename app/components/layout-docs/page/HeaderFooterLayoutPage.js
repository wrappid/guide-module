// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreTypographyBody1, HeaderFooterLayout, CoreLayoutItem } from "@wrappid/core";

export default function HeaderFooterLayoutPage() {
  return (
    <>
      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.HEADER} styleClasses={[]}>
        <CoreTypographyBody1>This is header section of HeaderFooterLayout</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.CONTENT} styleClasses={[]}>
        <CoreTypographyBody1>This is content section of HeaderFooterLayout</CoreTypographyBody1>
      </CoreLayoutItem>

      <CoreLayoutItem id={HeaderFooterLayout.PLACEHOLDER.FOOTER} styleClasses={[]}>
        <CoreTypographyBody1>This is footer section of HeaderFooterLayout</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}