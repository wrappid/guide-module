import React from "react";

import {
  CoreClasses,
  CoreStack,
  CoreButton,
  CoreTypographyBody1,
  CoreH5,
  CoreBox,
  useDynamicRefs,
  CorePaper
} from "@wrappid/core";

import CodeBlock from "./CodeBlock";

export default function CodeSample(props) {
  const { title, description, code, renderElement } = props;
  const [expandedBlock, setExpandedBlock] = React.useState("code");
  const { setRef } = useDynamicRefs();

  const expandBlock = (panel) => {
    setExpandedBlock(expandBlock === panel ? false : panel);
  };

  React.useEffect(() => {}, []);

  return (
    <>
      <CoreH5 ref={setRef(title?.trim()?.replaceAll(" ", "-"))}> {title || "NO TITLE SET"} </CoreH5>

      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MY2]}>
        {description || "NO DESCRIPTION SET"}
      </CoreTypographyBody1>

      {(renderElement || code) && (
        <CoreBox
          styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.MARGIN.MT2, CoreClasses.MARGIN.MB5]}
        >
          {renderElement && (
            <CoreBox
              component={CorePaper}
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P2]}
            >
              {renderElement}
            </CoreBox>
          )}

          {code && (
            <CoreBox>
              <CoreStack
                direction="row"
                styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END, CoreClasses.BORDER.BORDER_GREY_100, CoreClasses.PADDING.P1]}
              >
                <CoreButton
                  varient="outlined"
                  label={expandedBlock === "code" ? "Collapse Code" : "Expand Code"}
                  OnClick={() => {
                    expandedBlock === "code" ? expandBlock(false) : expandBlock("code");
                  }}
                />
              </CoreStack>

              {expandedBlock === "code" && (
                <CodeBlock noWrap={true} block={true}>
                  {code}
                </CodeBlock>
              )}
            </CoreBox>
          )}
        </CoreBox>
      )}
    </>
  );
}
