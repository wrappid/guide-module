import { CoreH5, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreH5Docs() {
  return (
    <>
      <CoreH4>CoreH5 Docs</CoreH4>

      <CoreTypographyBody1>
        The CoreH5 typography component follows the Material Design typographic scale that provides a limited set of type sizes that work well together for a consistent layout.
        This will helps you to create H5 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH5 Usage"}
        description={"CoreH5 is used by developers."}
        code={`
          <CoreH5>h2.Heading</CoreH5>
        `}
        renderElement={
          <CoreH5>h5.Heading</CoreH5>
        }
      />

      <ComponentProps component={CoreH5} />
    </>
  );
}