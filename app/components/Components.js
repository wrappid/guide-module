import React from "react";

import { CoreBox, CoreGrid, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import DocsRegistry from "./docs/DocsRegistry";

export default function Components() {
  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: 9 }}>
        <CoreH4>Component Samples</CoreH4>

        {Object.keys(DocsRegistry).map(doc => {
          return React.createElement(DocsRegistry[doc]);
        })}
      </CoreBox>

      <CoreBox gridProps={{ gridSize: 3 }}>
        <CoreTypographyBody1>Table Of Contents</CoreTypographyBody1>
      </CoreBox>
    </CoreGrid>
  );
}
