import React from "react";

import {
  CoreBox,
  CoreCard,
  CoreClasses,
  CoreDivider,
  CoreH6,
  CoreTypographyBody1
} from "@wrappid/core";

export default function CodeSample(props) {
  const { title, description, code, renderElement } = props;

  React.useEffect(() => {}, []);

  return (
    <CoreBox styleClasses={[CoreClasses.MARGIN.MB5]}>
      <CoreH6 styleClasses={[CoreClasses.MARGIN.MY1, CoreClasses.COLOR.TEXT_PRIMARY_LIGHT]}>
        {title || "NO TITLE SET"}
      </CoreH6>

      <CoreTypographyBody1>{description || "NO DESCRIPTION SET"}</CoreTypographyBody1>

      {code && renderElement && 
        <CoreCard>
          <CoreBox styleClasses={[]}>
            <CoreBox
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P3]}
            >
              {renderElement}
            </CoreBox>

            <CoreDivider />

            <CoreBox styleClasses={[CoreClasses.PADDING.P1]}>
              <CoreTypographyBody1 code={true}>{code}</CoreTypographyBody1>
            </CoreBox>
          </CoreBox>
        </CoreCard>
      }
    </CoreBox>
  );
}
