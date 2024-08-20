import {
  CoreClasses,
  CoreH4,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreListSubheader,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListSubheaderDocs() {
  return (
    <>
      <CoreH4>CoreListSubheader</CoreH4>
  
      <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT2]}>
          CoreListSubheader is a component in Wrappid. It is used to add a subheader to a CoreList, typically to label a section of CoreListItems. The CoreListSubheader provides context to the CoreListItems in the CoreList, making it clear that they belong to a particular category or group.
      </CoreTypographyBody1>
  
      <CodeImport name="CoreListSubheader" />
      
      <CodeSample
        title={"CoreListSubheader"}
        description={
          <>
            <CoreList variant="HTML" listType="DISC">
              <CoreListItem>
                <CoreListItemText primary="Text Labeling: It usually contains text that labels a section of list items." />
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="Divider: You can often pair it with a divider to visually separate sections." />
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="Typography: By default, ListSubheader uses the MUI typography system, but you can customize it." />
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="Sticky Position: You can make the ListSubheader sticky, so it stays visible at the top of the section as the user scrolls through the list." />
              </CoreListItem>
            </CoreList>
          </>
        }
        code={`<CoreList 
  subheader={
    <CoreListSubheader component="div">
    Section 1
    </CoreListSubheader>
  }
  >
  <CoreListItem>Item 1</CoreListItem>

  <CoreListItem>Item 2</CoreListItem>
</CoreList>`}
        renderElement={<>
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
        </>}
      />

      <ComponentProps component={CoreListSubheader} />
      
    </>
  );
}