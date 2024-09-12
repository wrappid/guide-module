
import {
  CoreAppBar,
  CoreBox,
  CoreButton,
  CoreClasses,
  CoreIcon,
  CoreIconButton,
  CoreToolbar,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreAppBarDocs() {
 
  return (
    <>
      <ComponentDocs
        component={CoreAppBar}
        basicSample={false}
        description={<>
          <CoreTypographyBody1>
      The accordion component allows the user to show and hide sections of related content on a page.
      An accordion is a lightweight container that may either be used standalone, or be connected to a larger surface, such as a card.
          </CoreTypographyBody1>
        </>}
        samples={
          <>
            <CodeSample
              title={"Basic CoreAppBar"}
              description={" "}
              code={`<CoreBox styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]}>
  <CoreAppBar advanceMode={true} position="static">
    <CoreToolbar >
      <CoreIconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        styleClasses={[CoreClasses.MARGIN.M2]}
      >
        <CoreIcon icon="menu" />
      </CoreIconButton>
      <CoreTypographyBody1 variant="h6" component="div" styleClasses={[CoreClasses.FLEX.FLEX_GROW_1, CoreClasses.MARGIN.M0]} >
        News
      </CoreTypographyBody1>
      <CoreButton color="inherit">Login</CoreButton>
    </CoreToolbar>
  </CoreAppBar>
</CoreBox>`}
              expandedCode={`import {
  CoreAppBar,
  CoreBox,
  CoreButton,
  CoreClasses,
  CoreIcon,
  CoreIconButton,
  CoreToolbar,
  CoreTypographyBody1
} from "@wrappid/core";

export default function ButtonAppBar() {
  return (  
    <CoreBox styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]}>
      <CoreAppBar advanceMode={true} position="static">
        <CoreToolbar >
          <CoreIconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            styleClasses={[CoreClasses.MARGIN.M2]}
          >
            <CoreIcon icon="menu" />
          </CoreIconButton>
          <CoreTypographyBody1 variant="h6" component="div" styleClasses={[CoreClasses.FLEX.FLEX_GROW_1, CoreClasses.MARGIN.M0]} >
            News
          </CoreTypographyBody1>
          <CoreButton color="inherit">Login</CoreButton>
        </CoreToolbar>
      </CoreAppBar>
    </CoreBox>
   );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.FLEX.FLEX_GROW_1]}>
                  <CoreAppBar advanceMode={true} position="static">
                    <CoreToolbar >
                      <CoreIconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        styleClasses={[CoreClasses.MARGIN.M2]}
                      >
                        <CoreIcon icon="menu" />
                      </CoreIconButton>

                      <CoreTypographyBody1 variant="h6" component="div" styleClasses={[CoreClasses.FLEX.FLEX_GROW_1, CoreClasses.MARGIN.M0]} >
                      News
                      </CoreTypographyBody1>

                      <CoreButton color="inherit">Login</CoreButton>
                    </CoreToolbar>
                  </CoreAppBar>
                </CoreBox>
              </>}
            />
          </>
        }
      />
      
    </>
  );
}