import { CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreH4Docs() {
  return (
    <>
      <CoreH4>CoreH4 Docs</CoreH4>

      <CoreTypographyBody1>
      CoreH4 helps you to create H4 heading in your design.
      </CoreTypographyBody1>

      <CodeSample
        title={"CoreH4 Usage"}
        description={"CoreH4 is used by developers."}
        code={`
          <CoreH4>h4.Heading</CoreH4>
        `}
        renderElement={
          <CoreH4>h4.Heading</CoreH4>
        }
      />

      <ComponentProps component={CoreH4} />
    </>
  );
}