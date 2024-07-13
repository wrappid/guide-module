import {
  CoreClasses,
  CoreH4,
  CoreTypographyBody1,
  CoreIcon,
  CoreStack,
  __IconTypes
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
import CodeImport from "../../CodeImport";

export default function CoreIconsDocs() {
  return (
    <>
      <CoreH4 styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}>CoreIcon</CoreH4>

      <CoreTypographyBody1>
        Guidance and suggestions for using icons with Wrappid CoreIcon.
      </CoreTypographyBody1>
      <CodeImport name="CoreIcon" />
      <CodeSample
        title="Basic sample"
        description=""
        code={`
<CoreIcon>mail</CoreIcon>
        `}
        renderElement={
          <CoreIcon>mail</CoreIcon>
        }
      />

      <CodeSample
        title="Basic sample"
        description=""
        code={`
<CoreStack direction="row">
  <CoreIcon type={__IconTypes.MATERIAL_ICON}>mail</CoreIcon>
  <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON}>mail</CoreIcon>
  <CoreIcon type={__IconTypes.FONTAWESOME_V5_SOLID_ICON}>mail</CoreIcon>
  <CoreIcon type={__IconTypes.FONTAWESOME_V5_REGULAR_ICON}>mail</CoreIcon>
  <CoreIcon type={__IconTypes.RXICON_V1_REGULAR_ICON}>mail</CoreIcon>
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row">
            <CoreIcon type={__IconTypes.MATERIAL_ICON}>mail</CoreIcon>

            <CoreIcon type={__IconTypes.MATERIAL_OUTLINED_ICON}>mail</CoreIcon>

            <CoreIcon type={__IconTypes.FONTAWESOME_V5_SOLID_ICON}>mail</CoreIcon>

            <CoreIcon type={__IconTypes.FONTAWESOME_V5_REGULAR_ICON}>mail</CoreIcon>

            <CoreIcon type={__IconTypes.RXICON_V1_REGULAR_ICON}>mail</CoreIcon>
          </CoreStack>
        }
      />

      <ComponentProps component={CoreIcon} />
    </>
  );
}
