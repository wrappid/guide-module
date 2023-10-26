import React from "react";

import {
  CoreCard,
  CoreCardContent,
  CoreCardHeader,
  CoreClasses,
  CoreDivider,
  CoreStack,
  CoreTextButton
} from "@wrappid/core";

import CodeBlock from "./CodeBlock";

export default function CodeSample(props) {
  const { title, description, code, renderElement } = props;
  const [expandedBlock, setExpandedBlock] = React.useState(false);

  const expandBlock = (panel) => {
    setExpandedBlock(expandBlock === panel ? false : panel);
  };

  React.useEffect(() => {}, []);

  return (
    <CoreCard styleClasses={[CoreClasses.MARGIN.MB2]}>
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
              <CodeBlock noWrap={true} block={true}>{code}</CodeBlock>
            )}
          </CoreCardContent>
      }
    </CoreCard>
  );
}
