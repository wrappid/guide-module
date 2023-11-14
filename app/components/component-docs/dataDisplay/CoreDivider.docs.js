import {
  CoreClasses,
  CoreH4,
  CoreTypographyBody1,
  CoreList,
  CoreListItem,
  CoreListItemAvatar,
  CoreListItemText,
  CoreDivider,
  CoreAvatar,
  CoreIcon,
  CoreBox,
  CoreGrid,
  CoreButton,
  CoreStack,
  CoreChip,
  CoreTypographyBody2,
  CoreH6
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";
  
export default function CoreDividerDocs() {
  return (
    <>
      <CoreH4
        styleClasses={[CoreClasses.MARGIN.MY2, CoreClasses.COLOR.TEXT_PRIMARY]}
      >
          CoreDivider
      </CoreH4>
  
      <CoreTypographyBody1>
        A divider is a thin line that groups content in lists and layouts.
      </CoreTypographyBody1>
  
      <CodeSample 
        title="List dividers"
        description="The divider renders as an <hr> by default. You can save rendering this DOM element by using the divider prop on the ListItem component."
        code={`<CoreList component="nav" aria-label="mailbox folders">
  <CoreListItem button>
    <CoreListItemText primary="Inbox" />
  </CoreListItem>
  <CoreDivider />
  <CoreListItem button divider>
    <CoreListItemText primary="Drafts" />
  </CoreListItem>
  <CoreListItem button>
    <CoreListItemText primary="Trash" />
  </CoreListItem>
  <CoreDivider light />
  <CoreListItem button>
    <CoreListItemText primary="Spam" />
  </CoreListItem>
</CoreList>
        `}
        renderElement={
          <CoreList component="nav" aria-label="mailbox folders">
            <CoreListItem button>
              <CoreListItemText primary="Inbox" />
            </CoreListItem>

            <CoreDivider />
            
            <CoreListItem button divider>
              <CoreListItemText primary="Drafts" />
            </CoreListItem>
            
            <CoreListItem button>
              <CoreListItemText primary="Trash" />
            </CoreListItem>
            
            <CoreDivider light />
            
            <CoreListItem button>
              <CoreListItemText primary="Spam" />
            </CoreListItem>
          </CoreList>
        }
      />

      <CodeSample 
        title="HTML5 specification"
        description="In a list, you should ensure the Divider is rendered as an <li> to match the HTML5 specification. The examples below show two ways of achieving this."
      />

      <CodeSample 
        title="Inset dividers"
        description=""
        code={`
<CoreList>
  <CoreListItem>
    <CoreListItemAvatar>
      <CoreAvatar>
        <CoreIcon icon="image" />
      </CoreAvatar>
    </CoreListItemAvatar>
    <CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
  </CoreListItem>
  <CoreDivider variant="inset" component="li" />
  <CoreListItem>
    <CoreListItemAvatar>
      <CoreAvatar>
        <CoreIcon icon="work" />
      </CoreAvatar>
    </CoreListItemAvatar>
    <CoreListItemText primary="Work" secondary="Jan 7, 2014" />
  </CoreListItem>
  <CoreDivider variant="inset" component="li" />
  <CoreListItem>
    <CoreListItemAvatar>
      <CoreAvatar>
        <BeachAccessIcon />
      </CoreAvatar>
    </CoreListItemAvatar>
    <CoreListItemText primary="Vacation" secondary="July 20, 2014" />
  </CoreListItem>
</CoreList>
        `}
        renderElement={
          <CoreList>
            <CoreListItem>
              <CoreListItemAvatar>
                <CoreAvatar>
                  <CoreIcon icon="image" />
                </CoreAvatar>
              </CoreListItemAvatar>

              <CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
            </CoreListItem>

            <CoreDivider variant="inset" component="li" />

            <CoreListItem>
              <CoreListItemAvatar>
                <CoreAvatar>
                  <CoreIcon icon="work" />
                </CoreAvatar>
              </CoreListItemAvatar>

              <CoreListItemText primary="Work" secondary="Jan 7, 2014" />
            </CoreListItem>

            <CoreDivider variant="inset" component="li" />

            <CoreListItem>
              <CoreListItemAvatar>
                <CoreAvatar>
                  <CoreIcon icon="beach_access" />
                </CoreAvatar>
              </CoreListItemAvatar>

              <CoreListItemText primary="Vacation" secondary="July 20, 2014" />
            </CoreListItem>
          </CoreList>
        }
      />

      <CodeSample 
        title="Subheader dividers"
        description=""
        code={`<CoreList>
  <CoreListItem>
    <CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
  </CoreListItem>
  <CoreDivider component="li" />
  <CoreListItem>
    <CoreTypographyBody1
      color="text.secondary"
      display="block"
      variant="caption"
    >
      Divider
    </CoreTypographyBody1>
  </CoreListItem>
  <CoreListItem>
    <CoreListItemText primary="Work" secondary="Jan 7, 2014" />
  </CoreListItem>
  <CoreDivider component="li" variant="inset" />
  <CoreListItem>
    <CoreTypographyBody1
      styleClasses={[CoreClasses.MARGIN.ML2]}
      color="text.secondary"
      display="block"
      variant="caption"
    >
      Leisure
    </CoreTypographyBody1>
  </CoreListItem>
  <CoreListItem>
    <CoreListItemAvatar>
      <CoreAvatar>
        <CoreIcon icon="beach_access" />
      </CoreAvatar>
    </CoreListItemAvatar>
    <CoreListItemText primary="Vacation" secondary="July 20, 2014" />
  </CoreListItem>
</CoreList>`}
        renderElement={
          <CoreList>
            <CoreListItem>
              <CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
            </CoreListItem>

            <CoreDivider component="li" />

            <CoreListItem>
              <CoreTypographyBody1
                color="text.secondary"
                display="block"
                variant="caption"
              >
      Divider
              </CoreTypographyBody1>
            </CoreListItem>

            <CoreListItem>
              <CoreListItemText primary="Work" secondary="Jan 7, 2014" />
            </CoreListItem>

            <CoreDivider component="li" variant="inset" />

            <CoreListItem>
              <CoreTypographyBody1
                styleClasses={[CoreClasses.MARGIN.ML2]}
                color="text.secondary"
                display="block"
                variant="caption"
              >
      Leisure
              </CoreTypographyBody1>
            </CoreListItem>

            <CoreListItem>
              <CoreListItemAvatar>
                <CoreAvatar>
                  <CoreIcon icon="beach_access" />
                </CoreAvatar>
              </CoreListItemAvatar>

              <CoreListItemText primary="Vacation" secondary="July 20, 2014" />
            </CoreListItem>
          </CoreList>
        }
      />

      <CodeSample 
        title="Middle divider"
        code={`<CoreBox>
  <CoreBox>
    <CoreGrid container alignItems="center">
      <CoreGrid item xs>
        <CoreH4 gutterBottom component="div">
          Toothbrush
        </CoreH4>
      </CoreGrid>

      <CoreGrid item>
        <CoreH6 gutterBottom component="div">
          $4.50
        </CoreH6>
      </CoreGrid>
    </CoreGrid>

    <CoreTypographyBody2 color="text.secondary">
      Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
      just down the hall.
    </CoreTypographyBody2>
  </CoreBox>

  <CoreDivider variant="middle" />

  <CoreBox>
    <CoreTypographyBody1 gutterBottom>
      Select type
    </CoreTypographyBody1>

    <CoreStack direction="row" spacing={1}>
      <CoreChip label="Extra Soft" />

      <CoreChip color="primary" label="Soft" />

      <CoreChip label="Medium" />

      <CoreChip label="Hard" />
    </CoreStack>
  </CoreBox>

  <CoreBox>
    <CoreButton>Add to cart</CoreButton>
  </CoreBox>
</CoreBox>`}
        renderElement={
          <CoreBox>
            <CoreBox>
              <CoreGrid container alignItems="center">
                <CoreGrid item xs>
                  <CoreH4 gutterBottom component="div">
                    Toothbrush
                  </CoreH4>
                </CoreGrid>

                <CoreGrid item>
                  <CoreH6 gutterBottom component="div">
                    $4.50
                  </CoreH6>
                </CoreGrid>
              </CoreGrid>

              <CoreTypographyBody2 color="text.secondary">
                Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                just down the hall.
              </CoreTypographyBody2>
            </CoreBox>

            <CoreDivider variant="middle" />

            <CoreBox>
              <CoreTypographyBody1 gutterBottom>
                Select type
              </CoreTypographyBody1>

              <CoreStack direction="row" spacing={1}>
                <CoreChip label="Extra Soft" />

                <CoreChip color="primary" label="Soft" />

                <CoreChip label="Medium" />

                <CoreChip label="Hard" />
              </CoreStack>
            </CoreBox>

            <CoreBox>
              <CoreButton>Add to cart</CoreButton>
            </CoreBox>
          </CoreBox>
        }
      />

      <CodeSample 
        title="Dividers with text"
        description="You can also render a divider with content."
        code={`
<CoreBox>
  <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>
  <CoreDivider>CENTER</CoreDivider>
  <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>
  <CoreDivider textAlign="left">LEFT</CoreDivider>
  <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>
  <CoreDivider textAlign="right">RIGHT</CoreDivider>
  <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>
  <CoreDivider>
    <CoreChip label="CHIP" />
  </CoreDivider>
  <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>
</CoreBox>
        `}
        renderElement={<CoreBox>
          <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>

          <CoreDivider>CENTER</CoreDivider>

          <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>

          <CoreDivider textAlign="left">LEFT</CoreDivider>

          <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>

          <CoreDivider textAlign="right">RIGHT</CoreDivider>

          <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>

          <CoreDivider>
            <CoreChip label="CHIP" />
          </CoreDivider>

          <CoreTypographyBody1>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus id dignissim justo.
   Nulla ut facilisis ligula. Interdum et malesuada fames ac ante ipsum primis in faucibus.
   Sed malesuada lobortis pretium.</CoreTypographyBody1>
        </CoreBox>
        }
      />

      <CodeSample 
        title="Vertical divider"
        description="You can also render a divider vertically using the orientation prop."
        code={`
<CoreStack direction="row" spacing={2}>
  <CoreIcon icon="mail" />
  <CoreIcon icon="mail" />
  <CoreIcon icon="mail" />
  <CoreDivider orientation="vertical" flexItem />
  <CoreIcon icon="mail" />
  <CoreIcon icon="mail" />
</CoreStack>
        `}
        renderElement={
          <CoreStack direction="row" spacing={2}>
            <CoreIcon icon="mail" />

            <CoreIcon icon="mail" />

            <CoreIcon icon="mail" />

            <CoreDivider orientation="vertical" flexItem />

            <CoreIcon icon="mail" />

            <CoreIcon icon="mail" />
          </CoreStack>
        }
      />

      <ComponentProps component={CoreDivider} />
  
    </>
  );
}
  