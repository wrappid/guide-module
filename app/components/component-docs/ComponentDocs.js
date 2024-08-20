// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreClasses, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeImport from "../CodeImport";
import ComponentProps from "../ComponentProps";

function ComponentDocs(props) {
  const { component = null, description = null, samples = [] } = props;

  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>
        {component?.name || "Name not provided in the component."}
      </CoreH4>

      <CoreTypographyBody1>{description || "Description not provided."}</CoreTypographyBody1>

      <CodeImport name={component?.name} />
          
      {/**
        * @todo code samples must have
        * 1. expand/collapse code
        * 2. copy code
        * 3. codesandbox link
        * 4. code editor
        * 5. code reset
        */}
      {samples}
          
      <ComponentProps component={component} />
    </>
  );
}

export default ComponentDocs;