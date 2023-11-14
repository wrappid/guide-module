import {
  CoreH4,
  CoreTypographyBody1,
  CoreIcon,
  CoreStack,
  __IconTypes
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreIconsDocs() {
  return (
    <>
      <CoreH4>CoreIcon</CoreH4>

      <CoreTypographyBody1>
        Guidance and suggestions for using icons with Wrappid CoreIcon.
      </CoreTypographyBody1>

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
