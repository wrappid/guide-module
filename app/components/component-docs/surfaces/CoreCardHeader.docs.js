import {
  CoreAvatar,
  CoreButton,
  CoreCard,
  CoreCardActions,
  CoreCardHeader,
  CoreCardMedia,
  CoreClasses,
  CoreIcon,
  CoreIconButton
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreCardHeaderDocs() {
  return (
    <>
      <ComponentDocs 
        component={CoreCardHeader}
        description="CoreCardHeader is a component that provides a dedicated section for displaying the title, subtitle, and optional avatar or icon at the top of a card. It helps to organize and highlight key information, enhancing the overall visual hierarchy and readability of the card layout."
        samples={
          <>
            <CodeSample 
              title={" "}
              description={"Take a look at this simple example to see how it's done!"}
              code={`<CoreCardHeader 
  avatar={
    <CoreAvatar src="https://avatars.githubusercontent.com/u/128048526?s=200&v=4" sizes="large"/>
  }
  action={
    <CoreIconButton aria-label="settings">
      <CoreIcon icon="more_vert" />
    </CoreIconButton>
  }
  title="Wrappid Wednesday"
  subheader="Every Wednesday at 10:00 p.m.(IST)"
/>`}
              expandedCode={`import {
  CoreAvatar, CoreButton, CoreCard, CoreCardActions, CoreCardHeader, CoreCardMedia, CoreClasses, CoreIcon, CoreIconButton 
} from "@wrappid/core";

export default function CoreCardDocs() {
  
  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreCardHeader 
        avatar={
          <CoreAvatar src="https://avatars.githubusercontent.com/u/128048526?s=200&v=4" sizes="large"/>
        }
        action={
          <CoreIconButton aria-label="settings">
            <CoreIcon icon="more_vert" />
          </CoreIconButton>
        }
        title="Wrappid Wednesday"
        subheader="Every Wednesday at 10:00 p.m.(IST)"
      />

      <CoreCardMedia 
        component="img"
        height="300"
        image="https://i0.wp.com/wrappid.dev/wp-content/uploads/2024/08/Wrappid-Wednesday-poster.png?w=1080&ssl=1"
        alt="Wrappid Wednesday"
      />

      <CoreCardActions>
        <CoreButton variant="text" color="info">Join Now</CoreButton>
      </CoreCardActions>
    </CoreCard>
  );  
}`}
              renderElement={
                <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
                  <CoreCardHeader 
                    avatar={
                      <CoreAvatar src="https://avatars.githubusercontent.com/u/128048526?s=200&v=4" sizes="large"/>
                    }
                    action={
                      <CoreIconButton aria-label="settings">
                        <CoreIcon icon="more_vert" />
                      </CoreIconButton>
                    }
                    title="Wrappid Wednesday"
                    subheader="Every Wednesday at 10:00 p.m.(IST)"
                  />

                  <CoreCardMedia 
                    component="img"
                    height="300"
                    image="https://i0.wp.com/wrappid.dev/wp-content/uploads/2024/08/Wrappid-Wednesday-poster.png?w=1080&ssl=1"
                    alt="Wrappid Wednesday"
                  />

                  <CoreCardActions >
                    <CoreButton variant="text" color="info">Join Now</CoreButton>
                  </CoreCardActions>
                </CoreCard>
              }
            />
          </>
        }
      />
    </>
  );
}