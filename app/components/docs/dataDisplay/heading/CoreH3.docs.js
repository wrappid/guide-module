import { CoreH3, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreH3Docs() {
  return (
    <>
      <CoreH4>CoreH3 Docs</CoreH4>

      <CoreTypographyBody1>
      CoreH3 helps you to create H3 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH3 Usage"}
        description={"CoreH3 is used by developers."}
        code={`
          <CoreH3>h3.Heading</CoreH3>
        `}
        renderElement={
          <CoreH3>h3.Heading</CoreH3>
        }
      />

      <ComponentProps component={CoreH3} />
    </>
  );
}