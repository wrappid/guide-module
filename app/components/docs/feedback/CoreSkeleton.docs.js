import {
  CoreH4,
  CoreTypographyBody1,
  CoreSkeleton,
  CoreClasses,
  CoreStack,
  CoreBox,
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

export default function CoreSkeletonDocs() {
  return (
    <>
      <CoreH4>CoreSkeleton</CoreH4>

      <CoreTypographyBody1>
        Display a placeholder preview of your content before the data gets
        loaded to reduce load-time frustration.
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        The data for your components might not be immediately available. You can
        improve the perceived responsiveness of the page by using skeletons. It
        feels like things are happening immediately, then the information is
        incrementally displayed on the screen
      </CoreTypographyBody1>

      <CodeSample
        title={"Skeleton"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={'<CoreSkeleton variant="rectangular" width={210} height={118} />'}
        renderElement={
          <>
            <CoreSkeleton variant="rectangular" width={210} height={118} />
          </>
        }
      />

      <CodeSample
        title={"Varients (NOT WORKING)"}
        description={
          "The component supports 4 shape variants:\text (default): represents a single line of text (you can adjust the height via font size).\
        circular, rectangular, and rounded: come with different border radius to let you take control of the size."
        }
        code={` 
<CoreStack direction="column" spacing={2}>
  <CoreSkeleton variant="text" />

  <CoreSkeleton variant="circular" width={40} height={40} />

  <CoreSkeleton variant="rectangular" width={210} height={60} />

  <CoreSkeleton variant="rounded" width={210} height={60} />
</CoreStack>
        
        `}
        renderElement={
          <>
            <CoreStack
              styleClasses={[CoreClasses.ALIGN_ITEMS_CENTER]}
              direction="column"
              spacing={2}
            >
              <CoreSkeleton variant="text" />

              <CoreSkeleton variant="circular" width={40} height={40} />

              <CoreSkeleton variant="rectangular" width={210} height={60} />

              <CoreSkeleton variant="rounded" width={210} height={60} />
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Animations (NOT WORKING)"}
        description={
          "By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely."
        }
        code={`
<CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
  <CoreSkeleton />

  <CoreSkeleton animation="wave" />

  <CoreSkeleton animation={false} />
</CoreBox>
        `}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
              <CoreSkeleton />

              <CoreSkeleton animation="wave" />

              <CoreSkeleton animation={false} />
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Wave example (NOT WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={""}
        renderElement={<></>}
      />

      <CodeSample
        title={"Color (NOT WORKING)"}
        description={
          "The color of the component can be customized by changing its background-color CSS property. This is especially useful when on a black background (as the skeleton will otherwise be invisible)."
        }
        code={""}
        renderElement={
          <>
            <CoreBox
              styleClasses={[
                CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER,
                CoreClasses.WIDTH.W_100,
                CoreClasses.DISPLAY.FLEX,
              ]}
            >
              <CoreSkeleton
                styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}
                variant="rectangular"
                width={210}
                height={118}
              />
            </CoreBox>
          </>
        }
      />

      <ComponentProps component={CoreSkeleton} />
    </>
  );
}
