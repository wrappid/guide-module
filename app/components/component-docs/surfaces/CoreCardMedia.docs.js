import {
  CoreCard,
  CoreCardActionArea,
  CoreClasses,
  CoreH4,
  CoreTypographyBody1,
  CoreCardMedia
} from "@wrappid/core";

import CodeSample from "../../CodeSample";

export default function CoreCardMediaDocs() {
  return (
    <>
      <CoreH4>CoreCardMedia</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>

      <CodeSample
        title={"Basic CoreCardMedia"}
        description={"Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a CardActionArea component."}
        code={`
<CoreCard styleClasses={[CoreClasses.WIDTH.MAX_W_25]}>
  <CoreCardActionArea>
    <CoreCardMedia
      component="img"
      height="140"
      image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Lizard_-_e.JPG"
      alt="green iguana"
    />
    
  </CoreCardActionArea>
</CoreCard>
        `}
        renderElement={<>
          <CoreCard styleClasses={[CoreClasses.WIDTH.MAX_W_25]}>
            <CoreCardActionArea>
              <CoreCardMedia
                component="img"
                height="140"
                image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Lizard_-_e.JPG"
                alt="green iguana"
              />
              
            </CoreCardActionArea>
          </CoreCard>

        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreCardMedia} /> */}
      
    </>
  );
}