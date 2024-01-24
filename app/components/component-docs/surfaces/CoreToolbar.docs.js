import {
  CoreAppBar,
  CoreBox,
  CoreButton,
  CoreH4,
  CoreIconButton,
  CoreToolbar,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreToolbarDocs() {
  return (
    <>
      <CoreH4>CoreToolbar</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"CoreToolbar (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreBox sx={{ flexGrow: 1 }}>
  <CoreAppBar position="static">
    <CoreToolbar>
      <CoreIconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
      </CoreIconButton>

      <CoreTypographyBody1 variant="h6" component="div" sx={{ flexGrow: 1 }}>
  News
      </CoreTypographyBody1>

      <CoreButton color="inherit">Login</CoreButton>
    </CoreToolbar>
  </CoreAppBar>
</CoreBox>
        `}
        renderElement={<>
          <CoreBox sx={{ flexGrow: 1 }}>
            <CoreAppBar position="static">
              <CoreToolbar>
                <CoreIconButton
                  size="large"
                  edge="start"
                  color="inherit"
                  aria-label="menu"
                  sx={{ mr: 2 }}
                >
                </CoreIconButton>

                <CoreTypographyBody1 variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
                </CoreTypographyBody1>

                <CoreButton color="inherit">Login</CoreButton>
              </CoreToolbar>
            </CoreAppBar>
          </CoreBox>
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreToolbar} /> */}
      
    </>
  );
}