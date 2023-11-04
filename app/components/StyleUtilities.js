/* eslint-disable no-console */
import {
  CoreH4,
  CoreTypographyBody1,
  CoreBox,
  CoreGrid,
  CoreClasses
} from "@wrappid/core";
import { UtilityClasses } from "@wrappid/styles";

import StyleSample from "./StyleSample";

export default function StyleUtilities() {
  return (
    <CoreGrid styleClasses={[CoreClasses.BG.BG_WHITE]}>
      <CoreBox gridProps={{ gridSize: 9 }}>
        <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
          Style Utilities
        </CoreH4>

        <CoreTypographyBody1>
          These are style utilities built using bootstrap flavour.
        </CoreTypographyBody1>

        <StyleSample classes={UtilityClasses} />
      </CoreBox>

      <CoreBox gridProps={{ gridSize: 3 }}>
        <CoreTypographyBody1>
          Table Of Contents
        </CoreTypographyBody1>
      </CoreBox>
    </CoreGrid>
  );
}