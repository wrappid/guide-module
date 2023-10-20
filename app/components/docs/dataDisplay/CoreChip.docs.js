import {
  CoreH4,
  CoreTypographyBody1,
  CoreChip
} from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreChipDocs() {
  return (
    <>
      <CoreH4>CoreChip</CoreH4>
      <CoreTypographyBody1>
      Chips are compact elements that represent an input, attribute, or action.
      Chips allow users to enter information, make selections, filter content, or trigger actions.

While included here as a standalone component, the most common use will be in some form of input, so some of the behavior demonstrated here is not shown in context.
        </CoreTypographyBody1>
      <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
        />

      <CodeSample
        title={"Basic chip"}
        description={"The Chip component supports outlined and filled styling."}
        code={`<CoreChip label="Chip Filled" />
<CoreChip label="Chip Outlined" variant="outlined" />`}
        renderElement={<>
          <CoreChip label="Chip Filled" />
          <CoreChip label="Chip Outlined" variant="outlined" />        
        </>}
        />

      {/* <CodeSample
        title={"TITLE_OF_THE_SAMPLE"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`PRE-FORMATTED_CODE_GOES_HERE`}
        renderElement={<></>}
        />   */}
      <ComponentProps component={CoreChip} />
    </>
  );
}
