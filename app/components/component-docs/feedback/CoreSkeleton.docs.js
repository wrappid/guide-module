import {
  CoreTypographyBody1,
  CoreSkeleton,
  CoreBox,
  CoreList,
  CoreListItem,
  CoreListItemText,
  CoreStack,
  CoreClasses,
  CoreGrid,
  CoreImage,
  CoreCard,
  CoreCardHeader,
  CoreAvatar,
  CoreIconButton,
  CoreIcon,
  CoreCardMedia,
  CoreCardContent,
  CoreTypographyBody2,
  CoreTypographyCaption,
  CoreH1,
  CoreH3
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreSkeletonDocs() {
  
  return (
    <>
      <ComponentDocs 
        component={CoreSkeleton}
        description={<CoreBox> 
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
        </CoreBox>}
        samples={
          <>
            <CodeSample 
              title={"Basic"}
              description={"Example of Basic CoreSkeleton"}
              code={"<CoreSkeleton variant=\"rectangular\" width={200} height={100} />"}
              expandedCode={`import { CoreSkeleton } from "@wrappid/core";

export default function CoreSkeletonDocs() {
  return (
    <CoreSkeleton variant="rectangular" width={200} height={100} />
  );
}
`}
              renderElement={
                <CoreSkeleton variant="rectangular" width={200} height={100} />
              }
            />

            <CodeSample 
              title={"Variants"}
              description={
                <CoreBox>
                  <CoreTypographyBody1>The component supports 4 shape variants:</CoreTypographyBody1>

                  <CoreList variant="HTML" listType="DISC">
                    <CoreListItem disablePadding>
                      <CoreListItemText primary="text (default): represents a single line of text (you can adjust the height via font size)." />
                    </CoreListItem>

                    <CoreListItem disablePadding>
                      <CoreListItemText primary="circular, rectangular, and rounded: come with different border radius to let you take control of the size." />
                    </CoreListItem>
                  </CoreList>
                </CoreBox>
              }
              code={`<CoreSkeleton variant="text" width={210} height={40} />

<CoreSkeleton variant="circular" width={40} height={40} />

<CoreSkeleton variant="rectangular" width={210} height={60} />

<CoreSkeleton variant="rounded" width={210} height={60} />`}
              expandedCode={`import { CoreSkeleton, CoreStack } from "@wrappid/core";

export default function CoreSkeletonDocs() {
  return (
    <CoreStack spacing={1} >
      <CoreSkeleton variant="text" width={210} height={40} />

      <CoreSkeleton variant="circular" width={40} height={40} />

      <CoreSkeleton variant="rectangular" width={210} height={60} />

      <CoreSkeleton variant="rounded" width={210} height={60} />
    </CoreStack>
  );
}
`}
              renderElement={
                <CoreStack spacing={1} >
                  <CoreSkeleton variant="text" width={210} height={40} />

                  <CoreSkeleton variant="circular" width={40} height={40} />

                  <CoreSkeleton variant="rectangular" width={210} height={60} />

                  <CoreSkeleton variant="rounded" width={210} height={60} />
                </CoreStack>
              }
            />

            <CodeSample 
              title={"Animations"}
              description={"By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely."}
              code={`<CoreSkeleton />

<CoreSkeleton animation="wave" />

<CoreSkeleton animation={false} />`}
              expandedCode={`import { CoreBox, CoreClasses, CoreSkeleton } from "@wrappid/core";

export default function CoreSkeletonDocs() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_75]}>
      <CoreSkeleton />

      <CoreSkeleton animation="wave" />

      <CoreSkeleton animation={false} />
    </CoreBox>
  );
}
`}
              renderElement={
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_75]}>
                  <CoreSkeleton />

                  <CoreSkeleton animation="wave" />

                  <CoreSkeleton animation={false} />
                </CoreBox>
              }
            />

            <CodeSample 
              title={"Pulsate example"}
              description={"Take a look at this example."}
              code={`<CoreBox>
  <Media loading />

  <Media />
</CoreBox>`}
              expandedCode={`import {
  CoreBox, CoreClasses, CoreGrid, CoreImage, CoreSkeleton, CoreStack,
  CoreTypographyBody2,
  CoreTypographyCaption
} from "@wrappid/core";

function Media(props) {
  const { loading = false } = props;

  const data = [
    {
      channel  : "Alan Walker",
      createdAt: "8 years ago",
      src      : "https://img.youtube.com/vi/60ItHLz5WEA/sddefault.jpg",
      title    : "Alan Walker - Faded",
      views    : "3.6B views",
    },
    {
      channel  : "SonyMusicIndiaVEVO",
      createdAt: "10 days ago",
      src      : "https://img.youtube.com/vi/Y6WV7v4zuNM/sddefault.jpg",
      title    : "Vande Mataram - A.R. Rahman| Maa...",
      views    : "2M views",
    },
    {
      channel  : "Chef Ranveer Brar",
      createdAt: "3 years ago",
      src      : "https://img.youtube.com/vi/qFk20hWp878/sddefault.jpg",
      title    : "Kolkata Style Chicken Biryani",
      views    : "3.3M views",
    },
  ];

  return (  
    <CoreGrid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <CoreBox key={index} styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.MARGIN.MY5, CoreClasses.MARGIN.MR1]}>
          {item ? (
            <CoreImage
              height={118}
              alt={item.title}
              src={item.src}
              styleClasses={[CoreClasses.WIDTH.W_100]}
            />
          ) : (
            <CoreSkeleton variant="rectangular" height={118} styleClasses={[CoreClasses.WIDTH.W_100]} />
          )}

          {item ? (
            <CoreBox>
              <CoreTypographyBody2 gutterBottom>
                {item.title}
              </CoreTypographyBody2>

              <CoreStack spacing={1}>
                <CoreTypographyCaption color="text.secondary">
                  {item.channel}
                </CoreTypographyCaption>

                <CoreTypographyCaption variant="caption" color="text.secondary">
                  {` + "`${item.views} • ${item.createdAt}`" + `}
                </CoreTypographyCaption>
              </CoreStack>
            </CoreBox>
          ) : (
            <CoreBox styleClasses={[CoreClasses.PADDING.PT1]}>
              <CoreSkeleton />

              <CoreSkeleton width="60%" />
            </CoreBox>
          )}
        </CoreBox>
      ))}
    </CoreGrid>
  );
}

export default function CoreSkeletonDocs() {
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.W_75]}>
      <Media loading />

      <Media />
    </CoreBox>
  );
}

`}
              renderElement={
                <CoreBox styleClasses={[CoreClasses.WIDTH.W_75]}>
                  <Media loading />

                  <Media />
                </CoreBox>

              }
            />

            <CodeSample 
              title={"Wave example"}
              description={"By default, the skeleton pulsates, but you can change the animation to a wave or disable it entirely."}
              code={`<CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
  <WaveMedia loading />

  <WaveMedia />
</CoreBox>`}
              expandedCode={`import {
  CoreAvatar, CoreBox, CoreCard, CoreCardContent, CoreCardHeader, CoreCardMedia, CoreClasses, CoreIcon, CoreIconButton, CoreSkeleton, 
  CoreTypographyBody1
} from "@wrappid/core";

function WaveMedia(props) {
  const { loading = false } = props;

  return (
    <CoreCard styleClasses={[CoreClasses.MARGIN.M2, CoreClasses.WIDTH.MAX_W_50]}>
      <CoreCardHeader
        avatar={
          loading ? (
            <CoreSkeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40} />
          ) : (
            <CoreAvatar
              alt="Josh talk"
              src="https://yt3.googleusercontent.com/ENGUZpl4MySycXH45IVDgP716yCbYWogZ4NlcA7UsYSgMNo2bCeRzCsXwigUERQXobjbqaU5gQ=s160-c-k-c0x00ffffff-no-rj"
            />
          )
        }
        action={
          loading ? null : (
            <CoreIconButton aria-label="settings" styleClasses={[CoreClasses.PADDING.PT2]}>
              <CoreIcon>more_vert</CoreIcon>
            </CoreIconButton>
          )
        }
        title={
          loading ? (
            <CoreSkeleton
              animation="wave"
              height={10}
              width="80%"
              styleClasses={[CoreClasses.MARGIN.MB1]}
            />
          ) : (
            "Ted"
          )
        }
        subheader={
          loading ? (
            <CoreSkeleton animation="wave" height={10} width="40%" />
          ) : (
            "5 hours ago"
          )
        }
      />

      {loading ? (
        <CoreSkeleton height={190} animation="wave" variant="rectangular" />
      ) : (
        <CoreCardMedia
          component="img"
          height="140"
          image="https://img.youtube.com/vi/ejhSFlV-6Gc/sddefault.jpg"
          alt="Sonam Wangchuk Reveals The..."
        />
      )}

      <CoreCardContent>
        {loading ? (
          <>
            <CoreSkeleton animation="wave" height={10}/>

            <CoreSkeleton animation="wave" height={10} width="80%" />
          </>
        ) : (
          <CoreTypographyBody1 color="text.secondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </CoreTypographyBody1>
        )}
      </CoreCardContent>
    </CoreCard>
  );
}

export default function CoreSkeletonDocs() {
  return (
    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
      <WaveMedia loading />

      <WaveMedia />
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER]}>
                  <WaveMedia loading />

                  <WaveMedia />
                </CoreBox>
              }
            />

            <CodeSample 
              title={"Inferring dimensions"}
              description={
                <CoreBox>
                  <CoreTypographyBody1>
                    In addition to accepting width and height props, the component can also infer the dimensions.
                  </CoreTypographyBody1>

                  <CoreTypographyBody1>
                    It works well when it comes to typography as its height is set using em units.
                  </CoreTypographyBody1>
                </CoreBox>
              }
              code={`<CoreGrid container spacing={8}>
  <CoreBox
    gridProps={
      { gridSize: { md: 6 } }
    }>
    <TypographyDemo loading />
  </CoreBox>

  <CoreBox
    gridProps={
      { gridSize: { md: 6 } }
    }>
    <TypographyDemo />
  </CoreBox>
</CoreGrid>`}
              expandedCode={`import {
  CoreBox, CoreGrid, CoreSkeleton, CoreH1, CoreH3, CoreTypographyBody1, CoreTypographyCaption 
} from "@wrappid/core";

function TypographyDemo(props) {
  const { loading = false } = props;

  const componentsMap = {
    CoreH1               : CoreH1,
    CoreH3               : CoreH3,
    CoreTypographyBody1  : CoreTypographyBody1,
    CoreTypographyCaption: CoreTypographyCaption,
  };

  const variants = Object.keys(componentsMap);
  
  return (
    <CoreBox>
      {variants.map((variant) => {
        const Component = componentsMap[variant]; 

        return (
          <Component component="div" key={variant}>
            {loading ? <CoreSkeleton /> : variant}
          </Component>
        );
      })}
    </CoreBox>
  );
}

export default function CoreSkeletonDocs() {
  return (
    <CoreGrid container spacing={8}>
      <CoreBox
        gridProps={
          { gridSize: { md: 6 } }
        }>
        <TypographyDemo loading />
      </CoreBox>

      <CoreBox
        gridProps={
          { gridSize: { md: 6 } }
        }>
        <TypographyDemo />
      </CoreBox>
    </CoreGrid>
  );
}`}
              renderElement={
                <CoreGrid container spacing={8}>
                  <CoreBox
                    gridProps={
                      { gridSize: { md: 6 } }
                    }>
                    <TypographyDemo loading />
                  </CoreBox>

                  <CoreBox
                    gridProps={
                      { gridSize: { md: 6 } }
                    }>
                    <TypographyDemo />
                  </CoreBox>
                </CoreGrid>
              }
            />

            <CodeSample 
              title={" "}
              description={"But when it comes to other components, you may not want to repeat the width and height. In these instances, you can pass children and it will infer its width and height from them."}
              code={`<CoreGrid container spacing={8}>
  <CoreBox
    gridProps={
      { gridSize: { md: 6 } }
    }>
    <SkeletonChildrenDemo loading />
  </CoreBox>

  <CoreBox
    gridProps={
      { gridSize: { md: 6 } }
    }>
    <SkeletonChildrenDemo />
  </CoreBox>
</CoreGrid>`}
              expandedCode={`import {
  CoreAvatar, CoreBox, CoreClasses, CoreGrid, CoreImage, CoreSkeleton, CoreTypographyBody1
} from "@wrappid/core";

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      <CoreBox styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.DISPLAY.FLEX]}>
        <CoreBox styleClasses={[CoreClasses.MARGIN.M1]}>
          {loading ? (
            <CoreSkeleton variant="circular">
              <CoreAvatar />
            </CoreSkeleton>
          ) : (
            <CoreAvatar src="https://yt3.googleusercontent.com/ytc/AIdro_k93aReFkSxAcSOVQ3Hd1_V8N6gIUdwJx0DaNs3btm4GA=s160-c-k-c0x00ffffff-no-rj" />
          )}
        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
          {loading ? (
            <CoreSkeleton width="100%">
              <CoreTypographyBody1>.</CoreTypographyBody1>
            </CoreSkeleton>
          ) : (
            <CoreTypographyBody1>Josh</CoreTypographyBody1>
          )}
        </CoreBox>
      </CoreBox>

      {loading ? (
        <CoreSkeleton variant="rectangular" width="100%" height={200}>
          <CoreBox styleClasses={[CoreClasses.PADDING.PT5]} />
        </CoreSkeleton>
      ) : (
        <CoreImage
          styleClasses={[CoreClasses.WIDTH.W_100]}
          height={200}
          src="https://img.youtube.com/vi/nQWBhasY8xw/sddefault.jpg"
          alt=""
        />
      )}
    </div>
  );
}

export default function CoreSkeletonDocs() {
  return (
    <CoreGrid container spacing={8}>
      <CoreBox
        gridProps={
          { gridSize: { md: 6 } }
        }>
        <SkeletonChildrenDemo loading />
      </CoreBox>

      <CoreBox
        gridProps={
          { gridSize: { md: 6 } }
        }>
        <SkeletonChildrenDemo />
      </CoreBox>
    </CoreGrid>
  );
}`}
              renderElement={
                <CoreGrid container spacing={8}>
                  <CoreBox
                    gridProps={
                      { gridSize: { md: 6 } }
                    }>
                    <SkeletonChildrenDemo loading />
                  </CoreBox>

                  <CoreBox
                    gridProps={
                      { gridSize: { md: 6 } }
                    }>
                    <SkeletonChildrenDemo />
                  </CoreBox>
                </CoreGrid>
              }
            />

            <CodeSample 
              title={"Color"}
              description={"The color of the component can be customized by changing its background-color CSS property. This is especially useful when on a black background (as the skeleton will otherwise be invisible)."}
              code={`<CoreBox styleClasses={[
  CoreClasses.BG.BG_BLACK,
  CoreClasses.PADDING.P3,
  CoreClasses.WIDTH.W_100,
  CoreClasses.DISPLAY.FLEX,
  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
]}>
  <CoreSkeleton
    styleClasses={[CoreClasses.BG.BG_GREY_900]}
    variant="rectangular"
    width={210}
    height={118}
  />
</CoreBox>`}
              expandedCode={`import { CoreBox, CoreClasses, CoreSkeleton } from "@wrappid/core";

export default function CoreSkeletonDocs() {
  return (
    <CoreBox styleClasses={[
      CoreClasses.BG.BG_BLACK,
      CoreClasses.PADDING.P3,
      CoreClasses.WIDTH.W_100,
      CoreClasses.DISPLAY.FLEX,
      CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
    ]}>
      <CoreSkeleton
        styleClasses={[CoreClasses.BG.BG_GREY_900]}
        variant="rectangular"
        width={210}
        height={118}
      />
    </CoreBox>
  );
}`}
              renderElement={
                <CoreBox styleClasses={[
                  CoreClasses.BG.BG_BLACK,
                  CoreClasses.PADDING.P3,
                  CoreClasses.WIDTH.W_100,
                  CoreClasses.DISPLAY.FLEX,
                  CoreClasses.ALIGNMENT.JUSTIFY_CONTENT_CENTER
                ]}>
                  <CoreSkeleton
                    styleClasses={[CoreClasses.BG.BG_GREY_900]}
                    variant="rectangular"
                    width={210}
                    height={118}
                  />
                </CoreBox>
              }
            />

          </>
        }
      />
    </>
  );
}

function Media(props) {
  const { loading = false } = props;

  const data = [
    {
      channel  : "Alan Walker",
      createdAt: "8 years ago",
      src      : "https://img.youtube.com/vi/60ItHLz5WEA/sddefault.jpg",
      title    : "Alan Walker - Faded",
      views    : "3.6B views",
    },
    {
      channel  : "SonyMusicIndiaVEVO",
      createdAt: "10 days ago",
      src      : "https://img.youtube.com/vi/Y6WV7v4zuNM/sddefault.jpg",
      title    : "Vande Mataram - A.R. Rahman| Maa...",
      views    : "2M views",
    },
    {
      channel  : "Chef Ranveer Brar",
      createdAt: "3 years ago",
      src      : "https://img.youtube.com/vi/qFk20hWp878/sddefault.jpg",
      title    : "Kolkata Style Chicken Biryani",
      views    : "3.3M views",
    },
  ];

  return (  
    <CoreGrid container wrap="nowrap">
      {(loading ? Array.from(new Array(3)) : data).map((item, index) => (
        <CoreBox key={index} styleClasses={[CoreClasses.WIDTH.W_100, CoreClasses.MARGIN.MY5, CoreClasses.MARGIN.MR1]}>
          {item ? (
            <CoreImage
              height={118}
              alt={item.title}
              src={item.src}
              styleClasses={[CoreClasses.WIDTH.W_100]}
            />
          ) : (
            <CoreSkeleton variant="rectangular" height={118} styleClasses={[CoreClasses.WIDTH.W_100]} />
          )}

          {item ? (
            <CoreBox>
              <CoreTypographyBody2 gutterBottom>
                {item.title}
              </CoreTypographyBody2>

              <CoreStack spacing={1}>
                <CoreTypographyCaption color="text.secondary">
                  {item.channel}
                </CoreTypographyCaption>

                <CoreTypographyCaption variant="caption" color="text.secondary">
                  {`${item.views} • ${item.createdAt}`}
                </CoreTypographyCaption>
              </CoreStack>
            </CoreBox>
          ) : (
            <CoreBox styleClasses={[CoreClasses.PADDING.PT1]}>
              <CoreSkeleton />

              <CoreSkeleton width="60%" />
            </CoreBox>
          )}
        </CoreBox>
      ))}
    </CoreGrid>
  );
}

function WaveMedia(props) {
  const { loading = false } = props;

  return (
    <CoreCard styleClasses={[CoreClasses.MARGIN.M2, CoreClasses.WIDTH.MAX_W_50]}>
      <CoreCardHeader
        avatar={
          loading ? (
            <CoreSkeleton
              animation="wave"
              variant="circular"
              width={40}
              height={40} />
          ) : (
            <CoreAvatar
              alt="Josh talk"
              src="https://yt3.googleusercontent.com/ENGUZpl4MySycXH45IVDgP716yCbYWogZ4NlcA7UsYSgMNo2bCeRzCsXwigUERQXobjbqaU5gQ=s160-c-k-c0x00ffffff-no-rj"
            />
          )
        }
        action={
          loading ? null : (
            <CoreIconButton aria-label="settings" styleClasses={[CoreClasses.PADDING.PT2]}>
              <CoreIcon>more_vert</CoreIcon>
            </CoreIconButton>
          )
        }
        title={
          loading ? (
            <CoreSkeleton
              animation="wave"
              height={10}
              width="80%"
              styleClasses={[CoreClasses.MARGIN.MB1]}
            />
          ) : (
            "Ted"
          )
        }
        subheader={
          loading ? (
            <CoreSkeleton animation="wave" height={10} width="40%" />
          ) : (
            "5 hours ago"
          )
        }
      />

      {loading ? (
        <CoreSkeleton height={190} animation="wave" variant="rectangular" />
      ) : (
        <CoreCardMedia
          component="img"
          height="140"
          image="https://img.youtube.com/vi/ejhSFlV-6Gc/sddefault.jpg"
          alt="Sonam Wangchuk Reveals The..."
        />
      )}

      <CoreCardContent>
        {loading ? (
          <>
            <CoreSkeleton animation="wave" height={10}/>

            <CoreSkeleton animation="wave" height={10} width="80%" />
          </>
        ) : (
          <CoreTypographyBody1 color="text.secondary" component="p">
            {
              "Why First Minister of Scotland Nicola Sturgeon thinks GDP is the wrong measure of a country's success:"
            }
          </CoreTypographyBody1>
        )}
      </CoreCardContent>
    </CoreCard>
  );
}

function TypographyDemo(props) {
  const { loading = false } = props;

  const componentsMap = {
    CoreH1               : CoreH1,
    CoreH3               : CoreH3,
    CoreTypographyBody1  : CoreTypographyBody1,
    CoreTypographyCaption: CoreTypographyCaption,
  };

  const variants = Object.keys(componentsMap);
  
  return (
    <CoreBox>
      {variants.map((variant) => {
        const Component = componentsMap[variant]; 

        return (
          <Component component="div" key={variant}>
            {loading ? <CoreSkeleton /> : variant}
          </Component>
        );
      })}
    </CoreBox>
  );
}

function SkeletonChildrenDemo(props) {
  const { loading = false } = props;

  return (
    <div>
      <CoreBox styleClasses={[CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.DISPLAY.FLEX]}>
        <CoreBox styleClasses={[CoreClasses.MARGIN.M1]}>
          {loading ? (
            <CoreSkeleton variant="circular">
              <CoreAvatar />
            </CoreSkeleton>
          ) : (
            <CoreAvatar src="https://yt3.googleusercontent.com/ytc/AIdro_k93aReFkSxAcSOVQ3Hd1_V8N6gIUdwJx0DaNs3btm4GA=s160-c-k-c0x00ffffff-no-rj" />
          )}
        </CoreBox>

        <CoreBox styleClasses={[CoreClasses.WIDTH.W_100]}>
          {loading ? (
            <CoreSkeleton width="100%">
              <CoreTypographyBody1>.</CoreTypographyBody1>
            </CoreSkeleton>
          ) : (
            <CoreTypographyBody1>Josh</CoreTypographyBody1>
          )}
        </CoreBox>
      </CoreBox>

      {loading ? (
        <CoreSkeleton variant="rectangular" width="100%" height={200}>
          <CoreBox styleClasses={[CoreClasses.PADDING.PT5]} />
        </CoreSkeleton>
      ) : (
        <CoreImage
          styleClasses={[CoreClasses.WIDTH.W_100]}
          height={200}
          src="https://img.youtube.com/vi/nQWBhasY8xw/sddefault.jpg"
          alt=""
        />
      )}
    </div>
  );
}
