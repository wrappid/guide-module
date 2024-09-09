import {
  CoreButton,
  CoreCard,
  CoreCardActions,
  CoreCardContent,
  CoreClasses,
  CoreH6,
  CoreIcon,
  CoreIconButton
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreCardActionsDocs() {

  return (
    <>
      <ComponentDocs 
        component={CoreCardActions}
        description="CoreCardActions is a component that arranges action buttons at the bottom of a card, providing a consistent layout for primary and secondary actions to enhance user interaction and usability."
        samples={
          <>
            <CodeSample
              title={"Card Action"}
              description={"Here you can see how CoreCardAction is used to enhance the interactivity and functionality of a card layout."} 
              code={`<CoreCardActions>
  <CoreButton variant="outlined" size="small" color="success">
      Absolutely!
  </CoreButton>

  <CoreIconButton variant="text">
    <CoreIcon icon="favorite" color="error"/>
  </CoreIconButton>
</CoreCardActions>`}
              expandedCode={`import {
  CoreButton,
  CoreCard, CoreCardActions, CoreCardContent, CoreClasses, CoreH6, CoreIcon, CoreIconButton 
} from "@wrappid/core";

export default function CoreCardDocs() {
  
  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.W_25]}>
      <CoreCardContent>
        <CoreH6 styleClasses={[CoreClasses.COLOR.TEXT_OPACITY_75]}>Are you a fan of Wrappid?</CoreH6>
      </CoreCardContent>

      <CoreCardActions>
        <CoreButton variant="outlined" size="small" color="success">
          Absolutely!
        </CoreButton>

        <CoreIconButton variant="text">
          <CoreIcon icon="favorite" color="error"/>
        </CoreIconButton>
      </CoreCardActions>
    </CoreCard>
  );  
}`}
              renderElement={
                <CoreCard styleClasses={[CoreClasses.WIDTH.W_25]}>
                  <CoreCardContent>
                    <CoreH6 styleClasses={[CoreClasses.COLOR.TEXT_OPACITY_75]}>Are you a fan of Wrappid?</CoreH6>
                  </CoreCardContent>

                  <CoreCardActions>
                    <CoreButton variant="outlined" size="small" color="success">
                      Absolutely!
                    </CoreButton>

                    <CoreIconButton variant="text">
                      <CoreIcon icon="favorite" color="error"/>
                    </CoreIconButton>
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
