import { CoreH2, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreH2Docs() {
  return (
    <>
      <CoreH4>CoreH2 Docs</CoreH4>

      <CoreTypographyBody1>
        The CoreH2 typography component follows the Material Design typographic scale that provides a limited set of type sizes that work well together for a consistent layout.
        This will helps you to create H2 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH2 Usage"}
        description={"CoreH2 is used by developers."}
        code={`
          <CoreH2>h2.Heading</CoreH2>
        `}
        renderElement={
          <CoreH2>h2.Heading</CoreH2>
        }
      />

      <ComponentProps component={CoreH2} />
    </>
  );
}