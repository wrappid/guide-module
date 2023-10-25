import {
  CoreH4,
  CoreTypographyBody1,
  CoreSkeleton
} from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";


export default function CoreSkeletonDocs() {
  return (
    <>
      <CoreH4>CoreSkeleton</CoreH4>
      <CoreTypographyBody1>
      Display a placeholder preview of your content before the data gets loaded to reduce load-time frustration.
        </CoreTypographyBody1>
      <CoreTypographyBody1>
        
      The data for your components might not be immediately available. You can improve the perceived responsiveness of the page by using skeletons. It feels like things are happening immediately, then the information is incrementally displayed on the screen
      </CoreTypographyBody1>

      <CodeSample
        title={"Skeleton"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={`<CoreSkeleton variant="rectangular" width={210} height={118} />`}
        renderElement={<><CoreSkeleton variant="rectangular" width={210} height={118} /></>}
        />
      <ComponentProps component={CoreSkeleton} />
    </>
  );
}
