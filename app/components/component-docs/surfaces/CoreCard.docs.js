import {
  CoreBox,
  CoreButton,
  CoreCard,
  CoreCardActions,
  CoreCardContent,
  CoreH4,
  CoreTypographyBody1,
  CoreTypographyBody2,
  CoreCardMedia,
  CoreClasses,
  CoreCardActionArea
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreCardDocs() {
  const bull = (
    <CoreBox
      component="span"
      // sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
    >
      <CoreTypographyBody1>•</CoreTypographyBody1>
    </CoreBox>
  );

  const card = (
    <>
      <CoreCardContent>
        <CoreTypographyBody1 color="text.secondary" gutterBottom>
          Word of the Day
        </CoreTypographyBody1>

        <CoreTypographyBody1 variant="h5" component="div">
          {`be${bull}nev${bull}o${bull}lent`}
        </CoreTypographyBody1>

        <CoreTypographyBody1 color="text.secondary">
          adjective
        </CoreTypographyBody1>

        <CoreTypographyBody2 variant="body2">
          well meaning and kindly.

          {"\"a benevolent smile\""}
        </CoreTypographyBody2>
      </CoreCardContent>

      <CoreCardContent>
        <CoreButton size="small">Learn More</CoreButton>
      </CoreCardContent>
    
    </>
      
  );

  return (
    <>
      <CoreH4>CoreCard</CoreH4>
  
      <CoreTypographyBody1>
      Cards contain content and actions about a single subject.
      Cards are surfaces that display content and actions on a single topic.

      They should be easy to scan for relevant and actionable information. Elements, like text and images, should be placed on them in a way that clearly indicates hierarchy.
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

        {""a benevolent smile""}
      </CoreTypographyBody2>
    </CoreCardContent>

    <CoreCardActions>
      <CoreButton size="small">Learn More</CoreButton>
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
                {`be${bull}nev${bull}o${bull}lent`}
              </CoreTypographyBody1>

              <CoreTypographyBody1 color="text.secondary">
          adjective
              </CoreTypographyBody1>

              <CoreTypographyBody2 >
          well meaning and kindly.

                {"\"a benevolent smile\""}
              </CoreTypographyBody2>
            </CoreCardContent>

            <CoreCardActions>
              <CoreButton size="small">Learn More</CoreButton>
            </CoreCardActions>
          </CoreCard>
        </>}
      />
          
      <CodeSample
        title={"Outlined CoreCard"}
        description={"Set variant=\"outlined\" to render an outlined card."}
        code={`
<CoreBox>
    <CoreCard variant="outlined">{card}</CoreCard>
</CoreBox>
        `}
        renderElement={<>
          <CoreBox>
            <CoreCard variant="outlined">{card}</CoreCard>
          </CoreBox>
        </>}
      />

      <CodeSample
        title={"Complex Interaction (NOT_WORKING)"}
        description={"On desktop, card content can expand. (Click the downward chevron to view the recipe.)"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
        
        </>}
      />

      <CodeSample
        title={"Media(NOT_WORKING) <Styleclass issue>"}
        description={"Example of a Corecard using an image to reinforce the content.\
        By default, we use the combination of a <div> element and a background image to display the media. It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the component prop for these use cases: "}
        code={`
<CoreCard styleClasses={[CoreClasses.WIDTH.MAX_W_25]}>
    <CoreCardMedia
      styleClasses={[CoreClasses.HEIGHT.H_50]}
      image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Lizard_-_e.JPG"
      title="green iguana"
    />

    <CoreCardContent>
        <CoreTypographyBody1
          gutterBottom
          component="div"
          Body1>
        Lizard
        </CoreTypographyBody1>

        <CoreTypographyBody2 color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </CoreTypographyBody2>
    </CoreCardContent>

    <CoreCardActions>
      <CoreButton size="small">Share</CoreButton>

      <CoreButton size="small">Learn More</CoreButton>
    </CoreCardActions>
</CoreCard>
        `}
        renderElement={<>
          <CoreCard styleClasses={[CoreClasses.WIDTH.MAX_W_25]}>
            <CoreCardMedia
              styleClasses={[CoreClasses.HEIGHT.H_50]}
              image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Lizard_-_e.JPG"
              title="green iguana"
            />

            <CoreCardContent>
              <CoreTypographyBody1
                gutterBottom
                component="div"
                Body1>
          Lizard
              </CoreTypographyBody1>

              <CoreTypographyBody2 color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
              </CoreTypographyBody2>
            </CoreCardContent>

            <CoreCardActions>
              <CoreButton size="small">Share</CoreButton>

              <CoreButton size="small">Learn More</CoreButton>
            </CoreCardActions>
          </CoreCard>
        
        </>}
      />

      <CodeSample
        title={" "}
        description={"By default, we use the combination of a <div> element and a background image to display the media. It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the component prop for these use cases:"}
        code={`
<CoreCard styleClasses={[CoreClasses.WIDTH.MAX_W_25]}>
    <CoreCardMedia
      component="img"
      alt="green iguana"
      height="140"
      image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Lizard_-_e.JPG"
      
    />

    <CoreCardContent>
        <CoreTypographyBody1 gutterBottom component="div">
          Lizard
        </CoreTypographyBody1>

        <CoreTypographyBody2 color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
           species, ranging across all continents except Antarctica
        </CoreTypographyBody2>
    </CoreCardContent>

    <CoreCardActions>
      <CoreButton size="small">Share</CoreButton>

      <CoreButton size="small">Learn More</CoreButton>
    </CoreCardActions>
</CoreCard>
        `}
        renderElement={<>
          <CoreCard styleClasses={[CoreClasses.WIDTH.MAX_W_25]}>
            <CoreCardMedia
              component="img"
              alt="green iguana"
              height="140"
              image="https://upload.wikimedia.org/wikipedia/commons/7/7e/Lizard_-_e.JPG"
              
            />

            <CoreCardContent>
              <CoreTypographyBody1 gutterBottom component="div">
          Lizard
              </CoreTypographyBody1>

              <CoreTypographyBody2 color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
              </CoreTypographyBody2>
            </CoreCardContent>

            <CoreCardActions>
              <CoreButton size="small">Share</CoreButton>

              <CoreButton size="small">Learn More</CoreButton>
            </CoreCardActions>
          </CoreCard>
        
        </>}
      />

      <CodeSample
        title={"Primary action"}
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

      <CodeSample
        title={" "}
        description={"A Corecard can also offer supplemental actions which should stand detached from the main action area in order to avoid event overlap."}
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

    <CoreCardActions>
      <CoreButton size="small" color="primary">
         Share
      </CoreButton>
    </CoreCardActions>
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

            <CoreCardActions>
              <CoreButton size="small" color="primary">
          Share
              </CoreButton>
            </CoreCardActions>
          </CoreCard>
        </>}
      />
        
      <CodeSample
        title={"UI Controls(NOT_WORKING)"}
        description={`Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card.

        Here's an example of a media control card.`}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
        
        </>}
      />
        
      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* <ComponentProps component={CoreCard} /> */}
      
    </>
  );
}