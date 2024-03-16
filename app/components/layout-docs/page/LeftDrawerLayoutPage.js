// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreTypographyBody1, CoreBox, CoreClasses, CoreLayoutItem, LeftDrawerLayout } from "@wrappid/core";

export default function LeftDrawerLayoutPage() {
  return (
    <>

      <CoreBox id={LeftDrawerLayout.PLACEHOLDER.Header} styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.HEIGHT.VH_100]}>
        <CoreLayoutItem styleClasses={[CoreClasses.WIDTH.VW_100, CoreClasses.HEIGHT.VH_25, CoreClasses.BG.BG_INFO_DARK]}>
          <CoreTypographyBody1>Header component</CoreTypographyBody1>
        </CoreLayoutItem>

        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.WIDTH.VW_100]}>
          <CoreLayoutItem id={LeftDrawerLayout.PLACEHOLDER.Content} styleClasses={[CoreClasses.WIDTH.VW_75, CoreClasses.HEIGHT.VH_75]}>
            <CoreTypographyBody1>Left side component</CoreTypographyBody1>
          </CoreLayoutItem>

          <CoreLayoutItem id={LeftDrawerLayout.PLACEHOLDER.LeftDrawer} styleClasses={[CoreClasses.WIDTH.VW_25, CoreClasses.HEIGHT.VH_75]}>
            <CoreTypographyBody1>Left drawer component</CoreTypographyBody1>
          </CoreLayoutItem>       
        </CoreBox>
      </CoreBox>
      
    </>
  );
}