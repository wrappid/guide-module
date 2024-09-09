import {
  CoreButton, CoreCard, CoreCardActionArea, CoreCardActions, CoreCardContent, CoreCardMedia, CoreClasses, CoreH6, CoreTypographyBody2 
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreCardActionAreaDocs() {
  return (
    <>
      <ComponentDocs 
        component={CoreCardActionArea}
        description="CoreCardActionArea is a component that wraps content within a card to make the entire area clickable, enabling interactive actions like navigation or triggering events."
        samples={
          <>
            <CodeSample 
              title={"Key Action"}
              description={"A card typically allows users to interact with its whole surface to trigger a key action, such as expanding content, linking to another screen, or executing a specific behavior. The interactive area of the card can be defined by wrapping its contents in a CardActionArea component."}
              code={`<CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
  <CoreCardActionArea>
    <CoreCardMedia
      component="img"
      alt="Snow leopard"
      styleClasses={[CoreClasses.HEIGHT.VH_25]}
      image="https://images.unsplash.com/photo-1664699259219-04145e542951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />

    <CoreCardContent>
      <CoreH6 gutterBottom component="div">
        Snow leopard
      </CoreH6>

      <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
        The snow leopard is a large, elusive cat native to the mountains of Central and South Asia, known for its thick fur, long tail, and ability to thrive in cold, rugged terrain.
      </CoreTypographyBody2>
    </CoreCardContent>
  </CoreCardActionArea>
</CoreCard>`}
              expandedCode={`import {
  CoreCard, CoreCardActionArea, CoreCardContent, CoreCardMedia, CoreClasses, CoreH6, CoreTypographyBody2 
} from "@wrappid/core";

export default function CoreCardDocs() {
  
  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreCardActionArea>
        <CoreCardMedia
          component="img"
          alt="Snow leopard"
          styleClasses={[CoreClasses.HEIGHT.VH_25]}
          image="https://images.unsplash.com/photo-1664699259219-04145e542951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <CoreCardContent>
          <CoreH6 gutterBottom component="div">
            Snow leopard
          </CoreH6>

          <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
            The snow leopard is a large, elusive cat native to the mountains of Central and South Asia, known for its thick fur, long tail, and ability to thrive in cold, rugged terrain.
          </CoreTypographyBody2>
        </CoreCardContent>
      </CoreCardActionArea>
    </CoreCard>
  );
}
`}
              renderElement={
                <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
                  <CoreCardActionArea>
                    <CoreCardMedia
                      component="img"
                      alt="Snow leopard"
                      styleClasses={[CoreClasses.HEIGHT.VH_25]}
                      image="https://images.unsplash.com/photo-1664699259219-04145e542951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />

                    <CoreCardContent>
                      <CoreH6 gutterBottom component="div">
                        Snow leopard
                      </CoreH6>

                      <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
                        The snow leopard is a large, elusive cat native to the mountains of Central and South Asia, known for its thick fur, long tail, and ability to thrive in cold, rugged terrain.
                      </CoreTypographyBody2>
                    </CoreCardContent>
                  </CoreCardActionArea>
                </CoreCard>
              }
            />

            <CodeSample 
              title={" "}
              description={"A card can also offer supplemental actions which should stand detached from the main action area in order to avoid event overlap."}
              code={`<CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
  <CoreCardActionArea>
    <CoreCardMedia
      component="img"
      alt="Snow leopard"
      styleClasses={[CoreClasses.HEIGHT.VH_25]}
      image="https://images.unsplash.com/photo-1664699259219-04145e542951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />

    <CoreCardContent>
      <CoreH6 gutterBottom component="div">
        Snow leopard
      </CoreH6>

      <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
        The snow leopard is a large, elusive cat native to the mountains of Central and South Asia, known for its thick fur, long tail, and ability to thrive in cold, rugged terrain.
      </CoreTypographyBody2>
    </CoreCardContent>
  </CoreCardActionArea>

  <CoreCardActions>
    <CoreButton variant="text" size="small" color="primary">
      Share
    </CoreButton>
  </CoreCardActions>
</CoreCard>`}
              expandedCode={`import {
  CoreButton,
  CoreCard, CoreCardActionArea, CoreCardActions, CoreCardContent, CoreCardMedia, CoreClasses, CoreH6, CoreTypographyBody2 
} from "@wrappid/core";

export default function CoreCardDocs() {
  
  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreCardActionArea>
        <CoreCardMedia
          component="img"
          alt="Snow leopard"
          styleClasses={[CoreClasses.HEIGHT.VH_25]}
          image="https://images.unsplash.com/photo-1664699259219-04145e542951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <CoreCardContent>
          <CoreH6 gutterBottom component="div">
            Snow leopard
          </CoreH6>

          <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
            The snow leopard is a large, elusive cat native to the mountains of Central and South Asia, known for its thick fur, long tail, and ability to thrive in cold, rugged terrain.
          </CoreTypographyBody2>
        </CoreCardContent>
      </CoreCardActionArea>

      <CoreCardActions>
        <CoreButton variant="text" size="small" color="primary">
          Share
        </CoreButton>
      </CoreCardActions>
    </CoreCard>
  );
}
`}
              renderElement={
                <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
                  <CoreCardActionArea>
                    <CoreCardMedia
                      component="img"
                      alt="Snow leopard"
                      styleClasses={[CoreClasses.HEIGHT.VH_25]}
                      image="https://images.unsplash.com/photo-1664699259219-04145e542951?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    />

                    <CoreCardContent>
                      <CoreH6 gutterBottom component="div">
                        Snow leopard
                      </CoreH6>

                      <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
                        The snow leopard is a large, elusive cat native to the mountains of Central and South Asia, known for its thick fur, long tail, and ability to thrive in cold, rugged terrain.
                      </CoreTypographyBody2>
                    </CoreCardContent>
                  </CoreCardActionArea>

                  <CoreCardActions>
                    <CoreButton variant="text" size="small" color="primary">
                      Share
                    </CoreButton>
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