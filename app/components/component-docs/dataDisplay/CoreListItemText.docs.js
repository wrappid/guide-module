import {
  CoreH4,
  CoreTypographyBody1,
  CoreList,
  CoreListItem,
  CoreListItemButton,
  CoreListItemText,
  CoreBox,
  CoreClasses
} from "@wrappid/core";
  
import CodeImport from "../../CodeImport";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreListItemTextDocs() {
  return (
    <>
      <CoreH4>CoreListItemText</CoreH4>
  
      <CoreTypographyBody1 styleClasses={[CoreClasses.PADDING.PT2]}>
          CoreListItemText is a component in Wrappid that is used to display text within a CoreListItem. It typically contains the primary content of the CoreListItem, such as the main label or description. The component is designed to handle different text configurations and can display primary and secondary text, such as a title and a subtitle.
      </CoreTypographyBody1>
      
      <CodeImport name="CoreListItemIcon" />
      
      <CodeSample
        title={"Basic Description"}
        description={<>
          <CoreBox styleClasses={[CoreClasses.PADDING.PL2]}>
            
            <CoreList variant="HTML" listType="DISC">
              <CoreListItem>
                <CoreListItemText primary="Primary Text: The main text of the CoreListItem, often displayed in a more prominent style."/>
              </CoreListItem>

              <CoreListItem>
                <CoreListItemText primary="Secondary Text: An optional additional line of text, typically displayed in a lighter or smaller font."/>
              </CoreListItem>
            </CoreList>
          </CoreBox>
        </>}
        code={`<CoreBox
styleClasses={[CoreClasses.WIDTH.W_100.MAX_W_100, CoreClasses.BORDER.BORDER_2]}
>
  <CoreList>
    <CoreListItem disablePadding>
      <CoreListItemButton>
        <CoreListItemText primary="primary" />
      </CoreListItemButton>
    </CoreListItem>

    <CoreListItem disablePadding>
      <CoreListItemButton component="a" href="#simple-Corelist">
        <CoreListItemText secondary="secondary" />
      </CoreListItemButton>
    </CoreListItem>
  </CoreList>

</CoreBox>       `}
        renderElement={
          <>
            <CoreBox
              styleClasses={[CoreClasses.WIDTH.W_100.MAX_W_100, CoreClasses.BORDER.BORDER_2]}
              // sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
            >
              <CoreList>
                <CoreListItem disablePadding>
                  <CoreListItemButton>
                    <CoreListItemText primary="primary" />
                  </CoreListItemButton>
                </CoreListItem>

                <CoreListItem disablePadding>
                  <CoreListItemButton component="a" href="#simple-Corelist">
                    <CoreListItemText secondary="secondary" />
                  </CoreListItemButton>
                </CoreListItem>
              </CoreList>

              {/* </nav> */}
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreListItemText} />
    </>
  );
}