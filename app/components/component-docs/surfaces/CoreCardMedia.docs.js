import {
  CoreCard,
  CoreClasses,
  CoreCardMedia,
  CoreCardContent,
  CoreH6
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreCardMediaDocs() {
  return (
    <>
      <ComponentDocs 
        component={CoreCardMedia}
        description=""
        samples={
          <>
            <CodeSample 
              title={" "}
              description={"Check out this straightforward example to see how CoreCardMedia can bring visual elements to life in your card design!"}
              code={`<CoreCardMedia
  component="img"
  height="350"
  image="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvd3xlbnwwfHwwfHx8MA%3D%3D"
/>`}
              expandedCode={`import { CoreCard, CoreCardContent, CoreCardMedia, CoreClasses, CoreH6 } from "@wrappid/core";

export default function CoreCardDocs() {
  
  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.W_25]}>
      <CoreCardMedia
        component="img"
        height="350"
        image="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvd3xlbnwwfHwwfHx8MA%3D%3D"
      />

      <CoreCardContent styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
        <CoreH6>This is an image of cow.</CoreH6>
      </CoreCardContent>
    </CoreCard>
  );  
}`}
              renderElement={
                <CoreCard styleClasses={[CoreClasses.WIDTH.W_25]}>
                  <CoreCardMedia
                    component="img"
                    height="350"
                    image="https://images.unsplash.com/photo-1527153857715-3908f2bae5e8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvd3xlbnwwfHwwfHx8MA%3D%3D"
                  />

                  <CoreCardContent styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
                    <CoreH6>This is an image of cow.</CoreH6>
                  </CoreCardContent>
                </CoreCard>
              }
            />
          </>
        }
      />
    </>
  );
}