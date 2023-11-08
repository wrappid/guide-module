import {
  CoreBox,
  CoreButton,
  CoreCard,
  CoreCardActions,
  CoreCardContent,
  CoreClasses,
  CoreH4,
  CoreTypographyBody1,
  CoreTypographyBody2
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreCardActionsDocs() {
  const bull = (
    <CoreBox
      component="span"
      // sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      •
    </CoreBox>
  );

  return (
    <>
      <CoreH4>CoreCardActions</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"Basic Corecard"}
        description={"Although cards can support multiple actions, UI controls, and an overflow menu, use restraint and remember that cards are entry points to more complex and detailed information."}
        code={`
<CoreCard >
    <CoreCardContent>
      <CoreTypographyBody1 color="text.secondary" gutterBottom>
         Word of the Day
      </CoreTypographyBody1>

      <CoreTypographyBody1 variant="h5" component="div">
        be{bull}nev{bull}o{bull}lent
      </CoreTypographyBody1>

      <CoreTypographyBody1 color="text.secondary">
         adjective
      </CoreTypographyBody1>

      <CoreTypographyBody2 >
        well meaning and kindly.
        <br />

        {"\"a benevolent smile\""}
      </CoreTypographyBody2>
    </CoreCardContent>

    <CoreCardActions>
      <CoreButton size="small">Learn More</CoreButton>

      <CoreButton size="small">Share</CoreButton>
    </CoreCardActions>
  </CoreCard>
        `}
        renderElement={<>
          <CoreCard styleClasses={[CoreClasses.WIDTH.MAX_W_25]}>
            <CoreCardContent>
              <CoreTypographyBody1 color="text.secondary" gutterBottom>
          Word of the Day
              </CoreTypographyBody1>

              <CoreTypographyBody1 variant="h5" component="div">
          be{bull}nev{bull}o{bull}lent
              </CoreTypographyBody1>

              <CoreTypographyBody1 color="text.secondary">
          adjective
              </CoreTypographyBody1>

              <CoreTypographyBody2 >
          well meaning and kindly.
                <br />

                {"\"a benevolent smile\""}
              </CoreTypographyBody2>
            </CoreCardContent>

            <CoreCardActions>
              <CoreButton size="small">Learn More</CoreButton>

              <CoreButton size="small">Share</CoreButton>
            </CoreCardActions>
          </CoreCard>
        </>}
      />
        
      {/* <ComponentProps component={CoreCardActions} /> */}
      
    </>
  );
}