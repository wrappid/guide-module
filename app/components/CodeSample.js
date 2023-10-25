import React from "react";

import {
  CoreBox,
  CoreCard,
  CoreCardContent,
  CoreCardHeader,
  CoreClasses,
  CoreDivider,
  CoreStack,
  CoreTextButton,
  CoreTypographyBody1
} from "@wrappid/core";

export default function CodeSample(props) {
  const { title, description, code, renderElement } = props;
  const [expandedBlock, setExpandedBlock] = React.useState(false);

  const expandBlock = (panel) => {
    setExpandedBlock(expandBlock === panel ? false : panel);
  };

  React.useEffect(() => {}, []);

  return (
    <CoreBox styleClasses={[CoreClasses.MARGIN.MB5]}>
      <CoreCard>
        <CoreCardHeader
          title={title || "NO TITLE SET"}
          subheader={description || "NO DESCRIPTION SET"} />

        {code && renderElement && 
          <CoreCardContent>
            {renderElement}
            
            <CoreDivider />
            
            <CoreStack direction="row" styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END]}>
              <CoreTextButton
                label="Expand Code"
                OnClick={() => {
                  expandedBlock === "code" ? expandBlock(false) : expandBlock("code");
                }} />
            </CoreStack>
            
            <CoreDivider />

            {expandedBlock === "code" && (
              <CoreTypographyBody1 code={true}>{code}</CoreTypographyBody1>
            )}
          </CoreCardContent>
        }
      </CoreCard>
    </CoreBox>
  );
}
