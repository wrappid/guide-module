import React from "react";

import {
  CoreAvatar,
  CoreBox, CoreButton, CoreCard, CoreCardActionArea, CoreCardActions, CoreCardContent, CoreCardHeader, CoreCardMedia, CoreClasses, CoreCollapse, CoreH6, CoreIcon, CoreIconButton, CoreList, CoreListItem, CoreListItemText, CoreStack, CoreTypographyBody1, 
  CoreTypographyBody2,
  CoreTypographySubtitle1
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

const bull = (
  <CoreBox
    component="span"
    styleClasses={[CoreClasses.DISPLAY.INLINE_BLOCK]}
  >
    •
  </CoreBox>
);

function ExpandMore({ expand, ...other }) {
  return (
    <CoreIconButton
      {...other}
      styleClasses={[CoreClasses.MARGIN.ML_AUTO, expand ? CoreClasses.TRANSFORM.ROTATE.ROTATE_180 : CoreClasses.TRANSFORM.ROTATE.ROTATE_X_15]}
    >
      <CoreIcon icon="expand_more" />
    </CoreIconButton>
  );
}

export default function CoreCardDocs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <ComponentDocs
      component={CoreCard}
      description="Cards contain content and actions about a single subject."
      samples={
        <>
          <CodeSample
            title={"Introduction"}
            description={<CoreBox>
              <CoreTypographyBody1>Cards are surfaces that display content and actions on a single topic. The Material UI Card component includes several complementary utility components to handle various use cases:</CoreTypographyBody1>

              <CoreList variant="HTML" listType="DISC">
                <CoreListItem disablePadding>
                  <CoreListItemText primary="Card: a surface-level container for grouping related components." />
                </CoreListItem>

                <CoreListItem disablePadding>
                  <CoreListItemText primary="Card Content: the wrapper for the Card content."/>
                </CoreListItem>

                <CoreListItem disablePadding>
                  <CoreListItemText primary="Card Header: an optional wrapper for the Card header."/>
                </CoreListItem>

                <CoreListItem disablePadding>
                  <CoreListItemText primary="Card Media: an optional container for displaying images, videos, etc."/>
                </CoreListItem>

                <CoreListItem disablePadding>
                  <CoreListItemText primary="Card Actions: an optional wrapper that groups a set of buttons."/>
                </CoreListItem>

                <CoreListItem disablePadding>
                  <CoreListItemText primary="Card Action Area: an optional wrapper that allows users to interact with the specified area of the Card."/>
                </CoreListItem>
              </CoreList>
            </CoreBox>}
            code={`<CoreCard styleClasses={[CoreClasses.WIDTH.W_25]}>
  <CoreCardContent>
    <CoreTypographyBody2 gutterBottom styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
      Word of the Day
    </CoreTypographyBody2>

    <CoreH6 component="div">
      be{bull}nev

      {bull}o

      {bull}lent
    </CoreH6>

    <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50, CoreClasses.MARGIN.MB1]}>adjective</CoreTypographyBody2>

    <CoreStack spacing={.1}>
      <CoreTypographyBody1>
        well meaning and kindly. 
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        {"\\"a benevolent smile\\""}
      </CoreTypographyBody1>
    </CoreStack>
  </CoreCardContent>

  <CoreCardActions>
    <CoreButton variant="text" size="small">Learn More</CoreButton>
  </CoreCardActions>
</CoreCard>`}
            expandedCode={`import {
  CoreBox, CoreButton, CoreCard, CoreCardActions, CoreCardContent, CoreClasses, CoreH5, CoreStack, CoreTypographyBody1, CoreTypographyBody2 
} from "@wrappid/core";

const bull = (
  <CoreBox
    component="span"
    styleClasses={[CoreClasses.DISPLAY.INLINE_BLOCK]}
  >
    •
  </CoreBox>
);

export default function CoreCardDocs() {
  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.W_25]}>
      <CoreCardContent>
        <CoreTypographyBody2 gutterBottom styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
          Word of the Day
        </CoreTypographyBody2>

        <CoreH6 component="div">
          be{bull}nev

          {bull}o

          {bull}lent
        </CoreH6>

        <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50, CoreClasses.MARGIN.MB1]}>adjective</CoreTypographyBody2>

        <CoreStack spacing={.1}>
          <CoreTypographyBody1>
            well meaning and kindly. 
          </CoreTypographyBody1>

          <CoreTypographyBody1>
            {"\\"a benevolent smile\\""}
          </CoreTypographyBody1>
        </CoreStack>
      </CoreCardContent>

      <CoreCardActions>
        <CoreButton variant="text" size="small">Learn More</CoreButton>
      </CoreCardActions>
    </CoreCard>
  );
}`}
            renderElement={
              <CoreCard styleClasses={[CoreClasses.WIDTH.W_25]}>
                <CoreCardContent>
                  <CoreTypographyBody2 gutterBottom styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
                    Word of the Day
                  </CoreTypographyBody2>

                  <CoreH6 component="div">
                    be{bull}nev

                    {bull}o

                    {bull}lent
                  </CoreH6>

                  <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50, CoreClasses.MARGIN.MB1]}>adjective</CoreTypographyBody2>

                  <CoreStack spacing={.1}>
                    <CoreTypographyBody1>
                      well meaning and kindly. 
                    </CoreTypographyBody1>

                    <CoreTypographyBody1>
                      {"\"a benevolent smile\""}
                    </CoreTypographyBody1>
                  </CoreStack>
                </CoreCardContent>

                <CoreCardActions>
                  <CoreButton variant="text" size="small">Learn More</CoreButton>
                </CoreCardActions>
              </CoreCard>
            }
          />

          <CodeSample 
            title={"Outlined Card"}
            description={"Set variant=\"outlined\" to render an outlined card."}
            code={`<CoreCard variant="outlined" styleClasses={[CoreClasses.WIDTH.W_25]}>
  <CoreCardContent>
    <CoreTypographyBody2 gutterBottom styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
      Word of the Day
    </CoreTypographyBody2>

    <CoreH6 component="div">
      be{bull}nev

      {bull}o

      {bull}lent
    </CoreH6>

    <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50, CoreClasses.MARGIN.MB1]}>adjective</CoreTypographyBody2>

    <CoreStack spacing={.1}>
      <CoreTypographyBody1>
        well meaning and kindly. 
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        {"\\"a benevolent smile\\""}
      </CoreTypographyBody1>
    </CoreStack>
  </CoreCardContent>

  <CoreCardActions>
    <CoreButton variant="text" size="small">Learn More</CoreButton>
  </CoreCardActions>
</CoreCard>`}
            expandedCode={`import {
  CoreBox, CoreButton, CoreCard, CoreCardActions, CoreCardContent, CoreClasses, CoreH5, CoreStack, CoreTypographyBody1, CoreTypographyBody2 
} from "@wrappid/core";

const bull = (
  <CoreBox
    component="span"
    styleClasses={[CoreClasses.DISPLAY.INLINE_BLOCK]}
  >
    •
  </CoreBox>
);

export default function CoreCardDocs() {
  return ( 
    <CoreCard variant="outlined" styleClasses={[CoreClasses.WIDTH.W_25]}>
      <CoreCardContent>
        <CoreTypographyBody2 gutterBottom styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
          Word of the Day
        </CoreTypographyBody2>

        <CoreH6 component="div">
          be{bull}nev

          {bull}o

          {bull}lent
        </CoreH6>

        <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50, CoreClasses.MARGIN.MB1]}>adjective</CoreTypographyBody2>

        <CoreStack spacing={.1}>
          <CoreTypographyBody1>
            well meaning and kindly. 
          </CoreTypographyBody1>

          <CoreTypographyBody1>
            {"\\"a benevolent smile\\""}
          </CoreTypographyBody1>
        </CoreStack>
      </CoreCardContent>

      <CoreCardActions>
        <CoreButton variant="text" size="small">Learn More</CoreButton>
      </CoreCardActions>
    </CoreCard>
  );
}
`}
            renderElement={
              <CoreCard variant="outlined" styleClasses={[CoreClasses.WIDTH.W_25]}>
                <CoreCardContent>
                  <CoreTypographyBody2 gutterBottom styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
                    Word of the Day
                  </CoreTypographyBody2>

                  <CoreH6 component="div">
                    be{bull}nev

                    {bull}o

                    {bull}lent
                  </CoreH6>

                  <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50, CoreClasses.MARGIN.MB1]}>adjective</CoreTypographyBody2>

                  <CoreStack spacing={.1}>
                    <CoreTypographyBody1>
                      well meaning and kindly. 
                    </CoreTypographyBody1>

                    <CoreTypographyBody1>
                      {"\"a benevolent smile\""}
                    </CoreTypographyBody1>
                  </CoreStack>
                </CoreCardContent>

                <CoreCardActions>
                  <CoreButton variant="text" size="small">Learn More</CoreButton>
                </CoreCardActions>
              </CoreCard>
            }
          />

          <CodeSample 
            title={"Complex Interaction"}
            description={"On desktop, card content can expand. (Click the downward chevron to view the recipe.)"}
            code={`<CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
  <CoreCardHeader
    avatar={
      <CoreAvatar styleClasses={[CoreClasses.BG.BG_ERROR]} aria-label="recipe">
        R
      </CoreAvatar>
    }
    action={
      <CoreIconButton aria-label="settings">
        <CoreIcon icon="more_vert" />
      </CoreIconButton>
    }
    title="Shrimp and Chorizo Paella"
    subheader="September 14, 2016"
  />

  <CoreCardMedia
    component="img"
    height="194"
    image="https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    alt="Paella dish"
  />

  <CoreCardContent>
    <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
      This impressive paella is a perfect party dish and a fun meal to cook
      together with your guests. Add 1 cup of frozen peas along with the mussels,
      if you like.
    </CoreTypographyBody2>
  </CoreCardContent>

  <CoreCardActions disableSpacing>
    <CoreIconButton aria-label="add to favorites">
      <CoreIcon icon="favorite" />
    </CoreIconButton>

    <CoreIconButton aria-label="share">
      <CoreIcon icon="share" />
    </CoreIconButton>

    <ExpandMore
      expand={expanded}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="show more"
    />
  </CoreCardActions>

  <CoreCollapse in={expanded} timeout="auto" unmountOnExit>
    <CoreCardContent>
      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>Method:</CoreTypographyBody1>

      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
        aside for 10 minutes.
      </CoreTypographyBody1>

      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
        large plate and set aside, leaving chicken and chorizo in the pan. Add
        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
        stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
      </CoreTypographyBody1>

      <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
        Add rice and stir very gently to distribute. Top with artichokes and
        peppers, and cook without stirring, until most of the liquid is absorbed,
        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
        mussels, tucking them down into the rice, and cook again without
        stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don&apos;t open.)
      </CoreTypographyBody1>

      <CoreTypographyBody1>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
      </CoreTypographyBody1>
    </CoreCardContent>
  </CoreCollapse>
</CoreCard>`}
            expandedCode={`import React from "react";

import {
  CoreAvatar, CoreCard, CoreCardActions, CoreCardContent, CoreCardHeader, CoreCardMedia, CoreClasses, CoreCollapse, CoreIcon, CoreIconButton, CoreTypographyBody1, CoreTypographyBody2 
} from "@wrappid/core";

function ExpandMore({ expand, ...other }) {
  return (
    <CoreIconButton
      {...other}
      styleClasses={[CoreClasses.MARGIN.ML_AUTO, expand ? CoreClasses.TRANSFORM.ROTATE.ROTATE_180 : CoreClasses.TRANSFORM.ROTATE.ROTATE_X_15]}
    >
      <CoreIcon icon="expand_more" />
    </CoreIconButton>
  );
}

export default function CoreCardDocs() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreCardHeader
        avatar={
          <CoreAvatar styleClasses={[CoreClasses.BG.BG_ERROR]} aria-label="recipe">
            R
          </CoreAvatar>
        }
        action={
          <CoreIconButton aria-label="settings">
            <CoreIcon icon="more_vert" />
          </CoreIconButton>
        }
        title="Shrimp and Chorizo Paella"
        subheader="September 14, 2016"
      />

      <CoreCardMedia
        component="img"
        height="194"
        image="https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Paella dish"
      />

      <CoreCardContent>
        <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </CoreTypographyBody2>
      </CoreCardContent>

      <CoreCardActions disableSpacing>
        <CoreIconButton aria-label="add to favorites">
          <CoreIcon icon="favorite" />
        </CoreIconButton>

        <CoreIconButton aria-label="share">
          <CoreIcon icon="share" />
        </CoreIconButton>

        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        />
      </CoreCardActions>

      <CoreCollapse in={expanded} timeout="auto" unmountOnExit>
        <CoreCardContent>
          <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>Method:</CoreTypographyBody1>

          <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </CoreTypographyBody1>

          <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
            Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
            medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
            occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
            large plate and set aside, leaving chicken and chorizo in the pan. Add
            pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
            stirring often until thickened and fragrant, about 10 minutes. Add
            saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </CoreTypographyBody1>

          <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don&apos;t open.)
          </CoreTypographyBody1>

          <CoreTypographyBody1>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </CoreTypographyBody1>
        </CoreCardContent>
      </CoreCollapse>
    </CoreCard>
  );
}
`}
            renderElement={
              <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
                <CoreCardHeader
                  avatar={
                    <CoreAvatar styleClasses={[CoreClasses.BG.BG_ERROR]} aria-label="recipe">
                      R
                    </CoreAvatar>
                  }
                  action={
                    <CoreIconButton aria-label="settings">
                      <CoreIcon icon="more_vert" />
                    </CoreIconButton>
                  }
                  title="Shrimp and Chorizo Paella"
                  subheader="September 14, 2016"
                />

                <CoreCardMedia
                  component="img"
                  height="194"
                  image="https://images.unsplash.com/photo-1623961990059-28356e226a77?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Paella dish"
                />

                <CoreCardContent>
                  <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_PRIMARY]}>
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                  </CoreTypographyBody2>
                </CoreCardContent>

                <CoreCardActions disableSpacing>
                  <CoreIconButton aria-label="add to favorites">
                    <CoreIcon icon="favorite" />
                  </CoreIconButton>

                  <CoreIconButton aria-label="share">
                    <CoreIcon icon="share" />
                  </CoreIconButton>

                  <ExpandMore
                    expand={expanded}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                  />
                </CoreCardActions>

                <CoreCollapse in={expanded} timeout="auto" unmountOnExit>
                  <CoreCardContent>
                    <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>Method:</CoreTypographyBody1>

                    <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
                      Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                      aside for 10 minutes.
                    </CoreTypographyBody1>

                    <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
                      Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                      medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                      occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                      large plate and set aside, leaving chicken and chorizo in the pan. Add
                      pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                      stirring often until thickened and fragrant, about 10 minutes. Add
                      saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                    </CoreTypographyBody1>

                    <CoreTypographyBody1 styleClasses={[CoreClasses.MARGIN.MB1]}>
                      Add rice and stir very gently to distribute. Top with artichokes and
                      peppers, and cook without stirring, until most of the liquid is absorbed,
                      15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                      mussels, tucking them down into the rice, and cook again without
                      stirring, until mussels have opened and rice is just tender, 5 to 7
                      minutes more. (Discard any mussels that don&apos;t open.)
                    </CoreTypographyBody1>

                    <CoreTypographyBody1>
                      Set aside off of the heat to let rest for 10 minutes, and then serve.
                    </CoreTypographyBody1>
                  </CoreCardContent>
                </CoreCollapse>
              </CoreCard>
            }
          />

          <CodeSample 
            title={"Media"}
            description={"Example of a card using an image to reinforce the content."}
            code={`<CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
  <CoreCardMedia
    styleClasses={[CoreClasses.HEIGHT.VH_25]}
    image="https://images.unsplash.com/photo-1492963892107-740cd39d9ff3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    title="green iguana"
  />

  <CoreCardContent>
    <CoreH6 gutterBottom component="div">
      Lizard
    </CoreH6>

    <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </CoreTypographyBody2>
  </CoreCardContent>

  <CoreCardActions>
    <CoreButton variant="text" size="small">Share</CoreButton>

    <CoreButton variant="text" size="small">Learn More</CoreButton>
  </CoreCardActions>
</CoreCard>`}
            expandedCode={`import {
  CoreButton, CoreCard, CoreCardActions, CoreCardContent, CoreCardMedia, CoreClasses, CoreH6, CoreTypographyBody2 
} from "@wrappid/core";

export default function CoreCardDocs() {
  
  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreCardMedia
        styleClasses={[CoreClasses.HEIGHT.VH_25]}
        image="https://images.unsplash.com/photo-1492963892107-740cd39d9ff3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="green iguana"
      />

      <CoreCardContent>
        <CoreH6 gutterBottom component="div">
          Lizard
        </CoreH6>

        <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </CoreTypographyBody2>
      </CoreCardContent>

      <CoreCardActions>
        <CoreButton variant="text" size="small">Share</CoreButton>

        <CoreButton variant="text" size="small">Learn More</CoreButton>
      </CoreCardActions>
    </CoreCard>
  );
}
`}
            renderElement={
              <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
                <CoreCardMedia
                  styleClasses={[CoreClasses.HEIGHT.VH_25]}
                  image="https://images.unsplash.com/photo-1492963892107-740cd39d9ff3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  title="green iguana"
                />

                <CoreCardContent>
                  <CoreH6 gutterBottom component="div">
                    Lizard
                  </CoreH6>

                  <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </CoreTypographyBody2>
                </CoreCardContent>

                <CoreCardActions>
                  <CoreButton variant="text" size="small">Share</CoreButton>

                  <CoreButton variant="text" size="small">Learn More</CoreButton>
                </CoreCardActions>
              </CoreCard>
            }
          />

          <CodeSample 
            title={" "}
            description={"By default, we use the combination of a <div> element and a background image to display the media. It can be problematic in some situations, for example, you might want to display a video or a responsive image. Use the component prop for these use cases:"}
            code={`<CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
  <CoreCardMedia
    component="img"
    alt="green iguana"
    styleClasses={[CoreClasses.HEIGHT.VH_25]}
    image="https://images.unsplash.com/photo-1492963892107-740cd39d9ff3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  />

  <CoreCardContent>
    <CoreH6 gutterBottom component="div">
      Lizard
    </CoreH6>

    <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
      Lizards are a widespread group of squamate reptiles, with over 6,000
      species, ranging across all continents except Antarctica
    </CoreTypographyBody2>
  </CoreCardContent>

  <CoreCardActions>
    <CoreButton variant="text" size="small">Share</CoreButton>

    <CoreButton variant="text" size="small">Learn More</CoreButton>
  </CoreCardActions>
</CoreCard>`}
            expandedCode={`import {
  CoreButton, CoreCard, CoreCardActions, CoreCardContent, CoreCardMedia, CoreClasses, CoreH6, CoreTypographyBody2 
} from "@wrappid/core";

export default function CoreCardDocs() {
  
  return ( 
    <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
      <CoreCardMedia
        component="img"
        alt="green iguana"
        styleClasses={[CoreClasses.HEIGHT.VH_25]}
        image="https://images.unsplash.com/photo-1492963892107-740cd39d9ff3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />

      <CoreCardContent>
        <CoreH6 gutterBottom component="div">
          Lizard
        </CoreH6>

        <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </CoreTypographyBody2>
      </CoreCardContent>

      <CoreCardActions>
        <CoreButton variant="text" size="small">Share</CoreButton>

        <CoreButton variant="text" size="small">Learn More</CoreButton>
      </CoreCardActions>
    </CoreCard>
  );
}
`}
            renderElement={
              <CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
                <CoreCardMedia
                  component="img"
                  alt="green iguana"
                  styleClasses={[CoreClasses.HEIGHT.VH_25]}
                  image="https://images.unsplash.com/photo-1492963892107-740cd39d9ff3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />

                <CoreCardContent>
                  <CoreH6 gutterBottom component="div">
                    Lizard
                  </CoreH6>

                  <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                  </CoreTypographyBody2>
                </CoreCardContent>

                <CoreCardActions>
                  <CoreButton variant="text" size="small">Share</CoreButton>

                  <CoreButton variant="text" size="small">Learn More</CoreButton>
                </CoreCardActions>
              </CoreCard>
            }
          />

          <CodeSample 
            title={"Primary action"}
            description={"Often a card allow users to interact with the entirety of its surface to trigger its main action, be it an expansion, a link to another screen or some other behavior. The action area of the card can be specified by wrapping its contents in a CardActionArea component."}
            code={`<CoreCard styleClasses={[CoreClasses.WIDTH.VW_25]}>
  <CoreCardActionArea>
    <CoreCardMedia
      component="img"
      alt="green iguana"
      styleClasses={[CoreClasses.HEIGHT.VH_25]}
      image="https://images.unsplash.com/photo-1595659807720-763d958eec07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />

    <CoreCardContent>
      <CoreH6 gutterBottom component="div">
        Royal Bengal Tiger
      </CoreH6>

      <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
        The Royal Bengal Tiger is a large, powerful wild cat native to the Indian subcontinent, 
        known for its distinctive orange coat with black stripes and its role in maintaining ecological balance.
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
          alt="green iguana"
          styleClasses={[CoreClasses.HEIGHT.VH_25]}
          image="https://images.unsplash.com/photo-1595659807720-763d958eec07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <CoreCardContent>
          <CoreH6 gutterBottom component="div">
            Royal Bengal Tiger
          </CoreH6>

          <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
            The Royal Bengal Tiger is a large, powerful wild cat native to the Indian subcontinent, 
            known for its distinctive orange coat with black stripes and its role in maintaining ecological balance.
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
                    alt="green iguana"
                    styleClasses={[CoreClasses.HEIGHT.VH_25]}
                    image="https://images.unsplash.com/photo-1595659807720-763d958eec07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />

                  <CoreCardContent>
                    <CoreH6 gutterBottom component="div">
                      Royal Bengal Tiger
                    </CoreH6>

                    <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
                      The Royal Bengal Tiger is a large, powerful wild cat native to the Indian subcontinent, known for its distinctive orange coat with black stripes and its role in maintaining ecological balance.
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
      alt="green iguana"
      styleClasses={[CoreClasses.HEIGHT.VH_25]}
      image="https://images.unsplash.com/photo-1595659807720-763d958eec07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    />

    <CoreCardContent>
      <CoreH6 gutterBottom component="div">
        Royal Bengal Tiger
      </CoreH6>

      <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
        The Royal Bengal Tiger is a large, powerful wild cat native to the Indian subcontinent, 
        known for its distinctive orange coat with black stripes and its role in maintaining ecological balance.
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
          alt="green iguana"
          styleClasses={[CoreClasses.HEIGHT.VH_25]}
          image="https://images.unsplash.com/photo-1595659807720-763d958eec07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />

        <CoreCardContent>
          <CoreH6 gutterBottom component="div">
            Royal Bengal Tiger
          </CoreH6>

          <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
            The Royal Bengal Tiger is a large, powerful wild cat native to the Indian subcontinent, 
            known for its distinctive orange coat with black stripes and its role in maintaining ecological balance.
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
                    alt="green iguana"
                    styleClasses={[CoreClasses.HEIGHT.VH_25]}
                    image="https://images.unsplash.com/photo-1595659807720-763d958eec07?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  />

                  <CoreCardContent>
                    <CoreH6 gutterBottom component="div">
                      Royal Bengal Tiger
                    </CoreH6>

                    <CoreTypographyBody2 styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}>
                      The Royal Bengal Tiger is a large, powerful wild cat native to the Indian subcontinent, 
                      known for its distinctive orange coat with black stripes and its role in maintaining ecological balance.
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

          <CodeSample 
            title={"UI Controls"}
            description={
              <CoreBox>
                <CoreTypographyBody1>
                  Supplemental actions within the card are explicitly called out using icons, text, and UI controls, typically placed at the bottom of the card.
                </CoreTypographyBody1>

                <CoreTypographyBody1>
                  Here is an example of a media control card.
                </CoreTypographyBody1>
              </CoreBox>
            }
            code={`<CoreCard styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.WIDTH.VW_25]}>
  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.WIDTH.W_75]}>
    <CoreCardContent>
      <CoreH6 component="div">
        Live From Space
      </CoreH6>

      <CoreTypographySubtitle1
        component="div"
        styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}
      >
        Mac Miller
      </CoreTypographySubtitle1>
    </CoreCardContent>

    <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.PADDING.PB1, CoreClasses.PADDING.PL1]}>
      <CoreIconButton aria-label="previous">
        <CoreIcon icon="skip_next" fontSize="medium"/>
      </CoreIconButton>

      <CoreIconButton aria-label="play/pause">
        <CoreIcon icon="play_arrow" fontSize="large"/>
      </CoreIconButton>

      <CoreIconButton aria-label="next">
        <CoreIcon icon="skip_previous" fontSize="medium"/>
      </CoreIconButton>
    </CoreBox>
  </CoreBox>

  <CoreCardMedia
    component="img"
    image="https://mui.com//static/images/cards/live-from-space.jpg"
    alt="Live from space album cover"
  />
</CoreCard>`}
            expandedCode={`import {
  CoreBox, CoreCard, CoreCardContent, CoreCardMedia, CoreClasses, CoreH6, CoreIcon, CoreIconButton, CoreTypographySubtitle1 
} from "@wrappid/core";

export default function CoreCardDocs() {
  
  return ( 
    <CoreCard styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.WIDTH.VW_25]}>
      <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.WIDTH.W_75]}>
        <CoreCardContent>
          <CoreH6 component="div">
            Live From Space
          </CoreH6>

          <CoreTypographySubtitle1
            component="div"
            styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}
          >
            Mac Miller
          </CoreTypographySubtitle1>
        </CoreCardContent>

        <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.PADDING.PB1, CoreClasses.PADDING.PL1]}>
          <CoreIconButton aria-label="previous">
            <CoreIcon icon="skip_next" fontSize="medium"/>
          </CoreIconButton>

          <CoreIconButton aria-label="play/pause">
            <CoreIcon icon="play_arrow" fontSize="large"/>
          </CoreIconButton>

          <CoreIconButton aria-label="next">
            <CoreIcon icon="skip_previous" fontSize="medium"/>
          </CoreIconButton>
        </CoreBox>
      </CoreBox>

      <CoreCardMedia
        component="img"
        image="https://mui.com//static/images/cards/live-from-space.jpg"
        alt="Live from space album cover"
      />
    </CoreCard>
  );  
}`}
            renderElement={
              <CoreCard styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.WIDTH.VW_25]}>
                <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.FLEX.DIRECTION_COLUMN, CoreClasses.WIDTH.W_75]}>
                  <CoreCardContent>
                    <CoreH6 component="div">
                      Live From Space
                    </CoreH6>

                    <CoreTypographySubtitle1
                      component="div"
                      styleClasses={[CoreClasses.COLOR.TEXT_BLACK_50]}
                    >
                      Mac Miller
                    </CoreTypographySubtitle1>
                  </CoreCardContent>

                  <CoreBox styleClasses={[CoreClasses.DISPLAY.FLEX, CoreClasses.ALIGNMENT.ALIGN_ITEMS_CENTER, CoreClasses.PADDING.PB1, CoreClasses.PADDING.PL1]}>
                    <CoreIconButton aria-label="previous">
                      <CoreIcon icon="skip_next" fontSize="medium"/>
                    </CoreIconButton>

                    <CoreIconButton aria-label="play/pause">
                      <CoreIcon icon="play_arrow" fontSize="large"/>
                    </CoreIconButton>

                    <CoreIconButton aria-label="next">
                      <CoreIcon icon="skip_previous" fontSize="medium"/>
                    </CoreIconButton>
                  </CoreBox>
                </CoreBox>

                <CoreCardMedia
                  component="img"
                  image="https://mui.com//static/images/cards/live-from-space.jpg"
                  alt="Live from space album cover"
                />
              </CoreCard>
            }
          />
        </>
      }
    />
  );
}