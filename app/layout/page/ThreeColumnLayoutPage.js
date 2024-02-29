// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreTypographyBody2, CoreGrid, ThreeColumnLayout, CoreLayoutItem } from "@wrappid/core";

export default function ThreeColumnLayoutPage() {
  return (
    <>
      <CoreGrid styleClasses={[]}>

        <CoreLayoutItem gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN1} styleClasses={[]}>
          <CoreTypographyBody2>
          This is fisrt column of ThreeColumnLayout
          </CoreTypographyBody2>

        </CoreLayoutItem>

        <CoreLayoutItem gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN2} styleClasses={[]}>
          <CoreTypographyBody2>
          This is second column of ThreeColumnLayout
          </CoreTypographyBody2>

        </CoreLayoutItem>

        <CoreLayoutItem gridProps={{ gridSize: { md: 4 } }} id={ThreeColumnLayout.PLACEHOLDER.COLUMN3} styleClasses={[]}>
          <CoreTypographyBody2>
           This is third column of ThreeColumnLayout
          </CoreTypographyBody2>

        </CoreLayoutItem>

      </CoreGrid>
    </>
  );
}
