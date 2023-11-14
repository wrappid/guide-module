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
  
import CodeSample from "../../CodeSample";

export default function CoreListItemTextDocs() {
  return (
    <>
      <CoreH4>CoreListItemText</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basic CoreListItemText"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreBox
styleClasses={[CoreClasses.WIDTH.W_100.MAX_W_100, CoreClasses.BORDER.BORDER_2]}
>
  <CoreList>
    <CoreListItem disablePadding>
      <CoreListItemButton>
        <CoreListItemText primary="Trash" />
      </CoreListItemButton>
    </CoreListItem>

    <CoreListItem disablePadding>
      <CoreListItemButton component="a" href="#simple-Corelist">
        <CoreListItemText primary="Spam" />
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
                    <CoreListItemText primary="Trash" />
                  </CoreListItemButton>
                </CoreListItem>

                <CoreListItem disablePadding>
                  <CoreListItemButton component="a" href="#simple-Corelist">
                    <CoreListItemText primary="Spam" />
                  </CoreListItemButton>
                </CoreListItem>
              </CoreList>

              {/* </nav> */}
            </CoreBox>
          </>
        }
      />
        
      {/* <ComponentProps component={CoreListItemText} /> */}
      
    </>
  );
}