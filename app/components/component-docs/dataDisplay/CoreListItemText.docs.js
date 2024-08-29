import {
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreBox,
  CoreClasses
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreListItemTextDocs() {
  return (

    <ComponentDocs
      component={CoreListItemText}
      description="CoreListItemText is used to display text within a list item. It typically contains the primary content of the list item, such as the main label or description. The component is designed to handle different text configurations and can display primary and secondary text, such as a title and a subtitle."
      samples={
        <>
          <CodeSample
            title={"Basic CoreListItemText"}
            description={<>
              <CoreList variant="HTML" listType="DISC">
                <CoreListItem>
                  <CoreListItemText primary="Primary Text: The main text of the CoreListItem, often displayed in a more prominent style." />
                </CoreListItem>

                <CoreListItem>
                  <CoreListItemText primary="Secondary Text: An optional additional line of text, typically displayed in a lighter or smaller font." />
                </CoreListItem>
              </CoreList>
            </>}
            code={`<CoreListItemText primary="primary" />
<CoreListItemText secondary="secondary" />`}
            expandedCode={`import {
  CoreClasses,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreBox,
  CoreListItemButton
} from "@wrappid/core";

export default function ListType() {

  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_100.MAX_W_100, CoreClasses.BORDER.BORDER_2]}>
      <CoreList>
  <CoreList>
    <CoreListItem disablePadding>
        <CoreListItemText primary="primary" />
    </CoreListItem>

    <CoreListItem disablePadding>
        <CoreListItemText secondary="secondary" />
    </CoreListItem>
  </CoreList>
    </CoreBox>
  );
}`}
            renderElement={
              <CoreBox
                styleClasses={[CoreClasses.WIDTH.W_100.MAX_W_100, CoreClasses.BORDER.BORDER_2]}
              // sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
              >
                <CoreList>
                  <CoreListItem disablePadding>
                    <CoreListItemText primary="primary" />
                  </CoreListItem>

                  <CoreListItem disablePadding>
                    <CoreListItemText secondary="secondary" />
                  </CoreListItem>
                </CoreList>

                {/* </nav> */}
              </CoreBox>
            }
          />
        </>
      }
    />

  );
}