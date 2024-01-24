import {
  CoreCard,
  CoreCardActionArea,
  CoreCardContent,
  CoreH4,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreCardMedia,
  CoreClasses
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreCardActionAreaDocs() {
  return (
    <>
      <CoreH4>CoreCardActionArea</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
      
      <CodeSample
        title={"Basic CoreCardActionArea"}
        description={"Often a Corecard allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a CoreCardActionArea component."}
        code={`
<CoreCard styleClasses={[CoreClasses.WIDTH.MAX_W_25]}>
  <CoreCardActionArea>
    <CoreCardMedia
      component="img"
      height="140"
      image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Lizard_-_e.JPG"
      alt="green iguana"
    />

    <CoreCardContent>
      <CoreTypographyBody1 gutterBottom variant="h5" component="div">
  Lizard
      </CoreTypographyBody1>

      <CoreTypographyBody2 color="text.secondary">
  Lizards are a widespread group of squamate reptiles, with over 6,000
  species, ranging across all continents except Antarctica
      </CoreTypographyBody2>
    </CoreCardContent>
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

              <CoreCardContent>
                <CoreTypographyBody1 gutterBottom variant="h5" component="div">
            Lizard
                </CoreTypographyBody1>

                <CoreTypographyBody2 color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
                </CoreTypographyBody2>
              </CoreCardContent>
            </CoreCardActionArea>
          </CoreCard>

        </>}
      />

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreCardActionArea} /> */}
      
    </>
  );
}