import { CoreH4, CoreTypographyCaption } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreTypographyCaptionDocs() {
  return (
    <>
      <CoreH4>{`CoreTypographyCaption`}</CoreH4>
      <CoreTypographyCaption>COMPONENT_DESCRIPTION</CoreTypographyCaption>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreTypographyCaption>
    caption text    
</CoreTypographyCaption>`}
        renderElement={
          <>
            <CoreTypographyCaption>caption text</CoreTypographyCaption>
          </>
        }
      />
      {/* <ComponentProps component={CoreTypographyBody1} /> */}
    </>
  );
}
