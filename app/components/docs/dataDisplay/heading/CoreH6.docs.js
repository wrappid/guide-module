import { CoreH6, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreH6Docs() {
  return (
    <>
      <CoreH4>CoreH6 Docs</CoreH4>

      <CoreTypographyBody1>
        The CoreH6 typography component follows the Material Design typographic scale that provides a limited set of type sizes that work well together for a consistent layout.
        This will helps you to create H6 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH6 Usage"}
        description={"CoreH6 is used by developers."}
        code={`
          <CoreH6>h6.Heading</CoreH6>
        `}
        renderElement={
          <CoreH6>h6.Heading</CoreH6>
        }
      />

      <ComponentProps component={CoreH6} />
    </>
  );
}