import { CoreH2, CoreH4, CoreTypographyBody1 } from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

export default function CoreH2Docs() {
  return (
    <>
      <CoreH4>CoreH2</CoreH4>

      <CoreTypographyBody1>
      CoreH2 helps you to create H2 heading in your design.
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