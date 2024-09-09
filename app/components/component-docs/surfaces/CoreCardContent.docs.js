import { CoreCard, CoreCardContent, CoreClasses, CoreH6, CoreImage } from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreCardContentDocs() {
  
  return (
    <>
      <ComponentDocs 
        component={CoreCardContent}
        description="CoreCardContent is a component that holds the main content of a card, such as text, images, or other elements. It provides a structured area within a card for displaying primary information."
        samples={
          <>
            <CodeSample 
              title={" "}
              description={"Here is a basic example of how we can use CoreCardContent to enhance the card design by structuring and displaying its main content clearly and effectively."}
              code={`<CoreCardContent styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  <CoreImage
    width={120}
    height={40} 
    alt="Phoenicopterus ruber"
    src="https://i0.wp.com/wrappid.dev/wp-content/uploads/2024/02/logo-1200x400-1.png?resize=1024%2C341&ssl=1" 
  />

  <CoreH6 styleClasses={[CoreClasses.PADDING.PR2]}>I&apos;m also a Wrappiders</CoreH6>
</CoreCardContent>`}
              expandedCode={`import { CoreCard, CoreCardContent, CoreClasses, CoreH6, CoreImage } from "@wrappid/core";

export default function CoreCardDocs() {
  
  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreCardContent styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
        <CoreImage
          width={120}
          height={40} 
          alt="Phoenicopterus ruber"
          src="https://i0.wp.com/wrappid.dev/wp-content/uploads/2024/02/logo-1200x400-1.png?resize=1024%2C341&ssl=1" 
        />

        <CoreH6 styleClasses={[CoreClasses.PADDING.PR2]}>I&apos;m also a Wrappiders</CoreH6>
      </CoreCardContent>
    </CoreCard>
  );  
}
`}
              renderElement={
                <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
                  <CoreCardContent styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
                    <CoreImage
                      width={120}
                      height={40} 
                      alt="Phoenicopterus ruber"
                      src="https://i0.wp.com/wrappid.dev/wp-content/uploads/2024/02/logo-1200x400-1.png?resize=1024%2C341&ssl=1" 
                    />

                    <CoreH6 styleClasses={[CoreClasses.PADDING.PR2]}>I&apos;m also a Wrappiders</CoreH6>
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