import React from "react";

import {
  ClipboardCopyButton,
  CoreBox,
  CoreButton,
  CoreClasses,
  CoreH5,
  CorePaper,
  CoreTypographyBody1,
  useDynamicRefs
} from "@wrappid/core";

import CodeBlock from "./CodeBlock";

export default function CodeSample(props) {
  const { title, description, code, expandedCode, renderElement } = props;
  const [expandedBlock, setExpandedBlock] = React.useState(false);
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
          component={CorePaper}
          styleClasses={[
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.FLEX.DIRECTION_COLUMN,
            CoreClasses.MARGIN.MT2,
            CoreClasses.MARGIN.MB5,
            CoreClasses.OVERFLOW.OVERFLOW_HIDDEN
          ]}
        >
          {renderElement && (
            <CoreBox
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.PADDING.P2, CoreClasses.BORDER.BORDER_BOTTOM, CoreClasses.BORDER.BORDER_GREY_200]}
            >
              {renderElement}
            </CoreBox>
          )}

          {code && (
            <>
              <CoreBox
                styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END, CoreClasses.PADDING.P1]}
              >
                <CoreButton
                  variant="outlined"
                  label={expandedBlock === "code" ? "Collapse Code" : "Expand Code"}
                  onClick={() => {
                    expandedBlock === "code" ? expandBlock(false) : expandBlock("code");
                  }}
                />
                
                <ClipboardCopyButton
                  triggered={expandedBlock}
                  text={expandedBlock === "code" ? expandedCode : code} />
              </CoreBox>

              {expandedBlock === "code" ? (
                <CodeBlock noWrap={true} block={true}>
                  {expandedCode}
                </CodeBlock>
              ) : (
                <CodeBlock noWrap={true} block={true}>
                  {code}
                </CodeBlock>
              )}
            </>
          )}
        </CoreBox>
      )}
    </>
  );
}
