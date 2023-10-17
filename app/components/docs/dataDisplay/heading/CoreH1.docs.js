import { CoreH1, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreH1Docs() {
  return (
    <>
      <CoreH4>CoreH1 Docs</CoreH4>

      <CoreTypographyBody1>
        The CoreH1 typography component follows the Material Design typographic scale that provides a limited set of type sizes that work well together for a consistent layout.
        This will helps you to create H1 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH1 Usage"}
        description={"CoreH1 is used by developers."}
        code={`
          <CoreH1>h1.Heading</CoreH1>
        `}
        renderElement={
          <CoreH1>h1.Heading</CoreH1>
        }
      />

      <ComponentProps component={CoreH1} />
    </>
  );
}