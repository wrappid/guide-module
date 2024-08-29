import {
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreListSubheader
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreListSubheaderDocs() {
  return (
    <ComponentDocs
      component={CoreListSubheader}
      description="CoreListSubheader is used to add a subheader to a list, typically to label a section of list items. The CoreListSubheader provides context to the list items in the list, making it clear that they belong to a particular category or group."
      samples={
        <>
          <CodeSample
            title={"Basic CoreListSubheader"}
            description={<>
              <CoreList variant="HTML" listType="DISC">
                <CoreListItem>
                  <CoreListItemText primary="Text Labeling: It usually contains text that labels a section of list items." />
                </CoreListItem>

                <CoreListItem>
                  <CoreListItemText primary="Divider: You can often pair it with a divider to visually separate sections." />
                </CoreListItem>

                <CoreListItem>
                  <CoreListItemText primary="Typography: By default, CoreListSubheader uses the Wrappid system, but you can customize it." />
                </CoreListItem>

                <CoreListItem>
                  <CoreListItemText primary="Sticky Position: You can make the CoreListSubheader sticky, so it stays visible at the top of the section as the user scrolls through the list." />
                </CoreListItem>
              </CoreList>
            </>}
            code={`<CoreListSubheader component="div">
  Section 1
</CoreListSubheader>`}
            expandedCode={`import {
  CoreList,
  CoreListItem,
  CoreListSubheader
} from "@wrappid/core";

export default function ListType() {

  return (
    <CoreList 
  subheader={
    <CoreListSubheader component="div">
    Section 1
    </CoreListSubheader>
  }
  >
  <CoreListItem>Item 1</CoreListItem>

  <CoreListItem>Item 2</CoreListItem>
    </CoreList>
  );
}`}
            renderElement={
              <CoreList 
                subheader={
                  <CoreListSubheader component="div">
              Section 1
                  </CoreListSubheader>
                }
              >
                <CoreListItem>Item 1</CoreListItem>

                <CoreListItem>Item 2</CoreListItem>
              </CoreList>
            }
          />
        </>
      }
    />
  );
}