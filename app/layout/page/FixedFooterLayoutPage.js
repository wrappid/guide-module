// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreTypographyBody1, CoreClasses, CoreBox, FixedFooterLayout, CoreLayoutItem } from "@wrappid/core";

export default function FixedFooterLayoutPage() {
  return (
    <>
      <CoreLayoutItem
        id={FixedFooterLayout.PLACEHOLDER.CONTENT}
        styleClasses={[]}>
        <CoreTypographyBody1>This is a content section of FixedFooterLayout</CoreTypographyBody1> 
      </CoreLayoutItem>

      <CoreLayoutItem
        id={FixedFooterLayout.PLACEHOLDER.FOOTER}
        styleClasses={[]}>
        <CoreTypographyBody1>This is a Footer section of FixedFooterLayout</CoreTypographyBody1>

        <CoreBox styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.HEIGHT.H_50, CoreClasses.BG.BG_INFO_DARK]}>

        </CoreBox> 
      </CoreLayoutItem>

    </>
  );
}