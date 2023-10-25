import { CoreH4, CoreTypographyButton } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyButtonDocs() {
  return (
    <>
      <CoreH4>{`CoreTypographyButton`}</CoreH4>
      <CoreTypographyButton>COMPONENT_DESCRIPTION</CoreTypographyButton>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreTypographyButton>
    BUTTON TEXT
</CoreTypographyButton>`}
        renderElement={
          <>
            <CoreTypographyButton>BUTTON TEXT</CoreTypographyButton>
          </>
        }
      />
      {/* <ComponentProps component={CoreTypographyBody1} /> */}
    </>
  );
}
