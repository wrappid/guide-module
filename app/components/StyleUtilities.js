import { CoreBox, CoreClasses, CoreGrid, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

export default function StyleUtilities() {
  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: 9 }}>
        <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
          Style Utilities
        </CoreH4>

        <CoreTypographyBody1>
          These are style utilities built using bootstrap flavour.
        </CoreTypographyBody1>
      </CoreBox>

      <CoreBox gridProps={{ gridSize: 3 }}>
        <CoreTypographyBody1>Table Of Contents</CoreTypographyBody1>
      </CoreBox>
    </CoreGrid>
  );
}