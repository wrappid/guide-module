// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreTypographyBody1, CoreBox, CoreLayoutItem, RightDrawerLayout } from "@wrappid/core";

export default function RightDrawerLayoutPage() {
  return (
    <>

      <CoreBox id={RightDrawerLayout.PLACEHOLDER.Header} styleClasses={[]}>
        <CoreLayoutItem styleClasses={[]}>
          <CoreTypographyBody1>Header component</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreBox styleClasses={[]}>
          <CoreLayoutItem id={RightDrawerLayout.PLACEHOLDER.Content} styleClasses={[]}>
            <CoreTypographyBody1>Right drawer component</CoreTypographyBody1>
          </CoreLayoutItem>

          <CoreLayoutItem id={RightDrawerLayout.PLACEHOLDER.RightDrawer} styleClasses={[]}>
            <CoreTypographyBody1>Right side component</CoreTypographyBody1>
          </CoreLayoutItem>       
        </CoreBox>
      </CoreBox>
      
    </>
  );
}