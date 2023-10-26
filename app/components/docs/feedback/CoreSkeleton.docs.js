import {
  CoreH4,
  CoreTypographyBody1,
  CoreSkeleton,
  CoreClasses,
  CoreStack,
  CoreBox,
  CoreGrid,
  CoreTypography
} from "@wrappid/core";

import CodeImport from "../../CodeImport";
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
        improve the perceived responsiveness of the page by using CoreSkeleton. It
        feels like things are happening immediately, then the information is
        incrementally displayed on the screen
      </CoreTypographyBody1>

      <CodeImport name="CoreSkeleton" />

      <CodeSample
        title={"Basic Skeleton"}
        description={"Example of Basic CoreSkeleton"}
        code={`
<CoreStack styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
  <CoreSkeleton variant="rectangular" width={210} height={118} />
</CoreStack>

        `}
        renderElement={
          <>
            <CoreStack styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
              <CoreSkeleton variant="rectangular" width={210} height={118} />
            </CoreStack>
          </>
        }
      />

      <CodeSample
        title={"Varients"}
        description={
          "The component supports 4 shape variants:\text (default): represents a single line of text (you can adjust the height via font size).\
        circular, rectangular, and rounded: come with different border radius to let you take control of the size."
        }
        code={` 
<CoreStack
styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
direction="column"
spacing={2} >
    <CoreSkeleton variant="text" width={210} height={40} />

    <CoreSkeleton variant="circular" width={40} height={40} />

    <CoreSkeleton variant="rectangular" width={210} height={60} />

    <CoreSkeleton variant="rounded" width={210} height={60} />
</CoreStack>
        
        `}
        renderElement={
          <>
            <CoreStack
              styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}
              direction="column"
              spacing={2}
            >
              <CoreSkeleton variant="text" width={210} height={40} />

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
<CoreBox styleClasses={[CoreClasses.WIDTH.W_75]}>
  <CoreSkeleton />

  <CoreSkeleton animation="wave" />

  <CoreSkeleton animation={false} />
</CoreBox>
        `}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.WIDTH.W_75]}>
              <CoreSkeleton />

              <CoreSkeleton animation="wave" />

              <CoreSkeleton animation={false} />
            </CoreBox>
          </>
        }
      />

      <CodeSample
        title={"Pulsate example (TODO)"}
        description={""}
        code={`
   TODO
        
        `}
        renderElement={<>
          <CoreBox sx={{ overflow: "hidden" }}>
            <Media loading />

            <Media />
          </CoreBox>
        
        </>}
  
      />

      <CodeSample
        title={"Wave example (NOT WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={""}
        renderElement={<>
        </>}
      />

      <CodeSample
        title={"Inferring dimensions (NOT WORKING)"}
        description={`
In addition to accepting width and height props, the component can also infer the dimensions.

It works well when it comes to typography as its height is set using em units.
        `}
        code={`
<CoreGrid container spacing={8}>
<CoreGrid item xs>
  <TypographyDemo loading />
</CoreGrid>

<CoreGrid item xs>
  <TypographyDemo />
</CoreGrid>
</CoreGrid>        
        
        `}
        renderElement={
          <>
            <CoreGrid container spacing={8}>
              <CoreGrid item xs>
                <TypographyDemo loading />
              </CoreGrid>

              <CoreGrid item xs>
                <TypographyDemo />
              </CoreGrid>
            </CoreGrid>
          </>
        }
      />

      <CodeSample
        title={"Color (NOT WORKING)"}
        description={
          "The color of the component can be customized by changing its background-color CSS property. This is especially useful when on a black background (as the skeleton will otherwise be invisible)."
        }
        code={` 
<CoreBox styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
  <CoreSkeleton
    styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT]}
    variant="rectangular"
    width={210}
    height={118}
  />
</CoreBox>    
      `}
        renderElement={
          <>
            <CoreBox styleClasses={[CoreClasses.BG.BG_PRIMARY_LIGHT, CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER]}>
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

function Media(props) {
  const { loading = false } = props;

  const data = [
    {
      channel  : "Don Diablo",
      createdAt: "a week ago",
      src      : "https://i.ytimg.com/vi/pLqipJNItIo/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLBkklsyaw9FxDmMKapyBYCn9tbPNQ",
      title    : "Don Diablo @ Tomorrowland Main Stage 2019 | Official…",
      views    : "396k views",
    },
    {
      channel  : "Queen Official",
      createdAt: "3 years ago",
      src      : "https://i.ytimg.com/vi/_Uu12zY01ts/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLCpX6Jan2rxrCAZxJYDXppTP4MoQA",
      title    : "Queen - Greatest Hits",
      views    : "40M views",
    },
    {
      channel  : "Calvin Harris",
      createdAt: "10 months ago",
      src      : "https://i.ytimg.com/vi/kkLk2XWMBf8/hqdefault.jpg?sqp=-oaymwEYCNIBEHZIVfKriqkDCwgBFQAAiEIYAXAB&rs=AOn4CLB4GZTFu1Ju2EPPPXnhMZtFVvYBaw",
      title    : "Calvin Harris, Sam Smith - Promises (Official Video)",
      views    : "130M views",
    },
  ];

  return (  
    <>
      <CoreGrid container wrap="nowrap">
        {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
          <CoreBox key={index} sx={{ marginRight: 0.5, my: 5, width: 210 }}>
            {item ? (
              <img
                style={{ height: 118, width: 210 }}
                alt={item.title}
                src={item.src}
              />
            ) : (
              <CoreSkeleton variant="rectangular" width={210} height={118} />
            )}

            {item ? (
              <CoreBox sx={{ pr: 2 }}>
                <CoreTypography gutterBottom variant="body2">
                  {item.title}
                </CoreTypography>

                <CoreTypography display="block" variant="caption" color="text.secondary">
                  {item.channel}
                </CoreTypography>

                <CoreTypography variant="caption" color="text.secondary">
                  {`${item.views} • ${item.createdAt}`}
                </CoreTypography>
              </CoreBox>
            ) : (
              <CoreBox sx={{ pt: 0.5 }}>
                <CoreSkeleton />

                <CoreSkeleton width="60%" />
              </CoreBox>
            )}
          </CoreBox>
        ))}
      </CoreGrid>
      
    </>
  );
}

const variants = ["h1", "h3", "body1", "caption"];

function TypographyDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      {variants.map((variant) => (
        <CoreTypography component="div" key={variant} variant={variant}>
          {loading ? <CoreSkeleton /> : variant}
        </CoreTypography>
      ))}
    </div>
  );
}