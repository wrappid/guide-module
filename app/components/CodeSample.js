import React from "react";

import {
  CoreClasses,
  CoreStack,
  CoreButton,
  CoreTypographyBody1,
  CoreH5,
  CoreBox,
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
    <>
      <CoreH5>{title || "NO TITLE SET"}</CoreH5>
      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MY2]}>
        {description || "NO DESCRIPTION SET"}
      </CoreTypographyBody1>

      {(renderElement || code) && (
        <CoreBox
          styleClasses={[
            CoreClasses.BORDER.BORDER,
            CoreClasses.BORDER.BORDER_SECONDARY,
            CoreClasses.DISPLAY.FLEX,
            CoreClasses.FLEX.DIRECTION_COLUMN,
            CoreClasses.MARGIN.MT2,
            CoreClasses.MARGIN.MB5,
          ]}
        >
          {renderElement && (
            <CoreBox
              styleClasses={[CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.MARGIN.MY3]}
            >
              {renderElement}
            </CoreBox>
          )}
          {code && (
            <CoreBox>
              <CoreStack
                direction="row"
                styleClasses={[
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_FLEX_END,
                  CoreClasses.BORDER.BORDER_TOP,
                  CoreClasses.BORDER.BORDER_BOTTOM,
                  CoreClasses.BORDER.BORDER_SECONDARY,
                  CoreClasses.PADDING.P1,
                ]}
              >
                <CoreButton
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
