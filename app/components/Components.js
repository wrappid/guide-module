import React from "react";

import { CoreBox, CoreGrid, CoreTypographyBody1 } from "@wrappid/core";

import DocsRegistry from "./docs/DocsRegistry";

export default function Components() {

  const [docsRegistryKeys] = React.useState(Object.keys(DocsRegistry).sort((curr, next) => DocsRegistry[curr].order - DocsRegistry[next].order));

  return (
    <CoreGrid>
      <CoreBox gridProps={{ gridSize: 9 }}>
        {docsRegistryKeys.map(doc => {
          return React.createElement(DocsRegistry[doc]?.main);
        })}
      </CoreBox>

      <CoreBox gridProps={{ gridSize: 3 }}>
        <CoreTypographyBody1>Table Of Contents</CoreTypographyBody1>

        {docsRegistryKeys.map(docKey => {
          return (
            <>
              <CoreTypographyBody1>{docKey}</CoreTypographyBody1>
            </>
          );
        })}
      </CoreBox>
    </CoreGrid>
  );
}
