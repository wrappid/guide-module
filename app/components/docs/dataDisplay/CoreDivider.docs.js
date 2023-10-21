import {
  CoreClasses,
  CoreH4,
  CoreTypography,
  CoreTypographyBody1,
  CoreBadge,
  CoreList,
  CoreListItem,
  CoreListItemAvatar,
  CoreListItemText,
  CoreDivider,
  CoreAvatar,
  CoreIcon,
  CoreBox,
  CoreGrid,
  CoreButton
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
        code={`
const style = {
  width: '100%',
  maxWidth: 360,
  bgcolor: 'background.paper',
};
<CoreList sx={style} component="nav" aria-label="mailbox folders">
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
<CoreList
  sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  }}
>
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
          <CoreList
            sx={{
              bgcolor : "background.paper",
              maxWidth: 360,
              width   : "100%",
            }}
          >
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
        code={`
<CoreList
  sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper',
  }}
>
  <CoreListItem>
    <CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
  </CoreListItem>
  <CoreDivider component="li" />
  <CoreListItem>
    <CoreTypographyBody1
      sx={{ mt: 0.5, ml: 2 }}
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
      sx={{ mt: 0.5, ml: 9 }}
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
        `}
        renderElement={
          <CoreList
            sx={{
              bgcolor : "background.paper",
              maxWidth: 360,
              width   : "100%",
            }}
          >
            <CoreListItem>
              <CoreListItemText primary="Photos" secondary="Jan 9, 2014" />
            </CoreListItem>

            <CoreDivider component="li" />

            <CoreListItem>
              <CoreTypographyBody1
                sx={{ ml: 2, mt: 0.5 }}
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
                sx={{ ml: 9, mt: 0.5 }}
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
        code={`
<CoreBox sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
  <CoreBox sx={{ my: 3, mx: 2 }}>
    <CoreGrid container alignItems="center">
      <CoreGrid item xs>
        <CoreTypography gutterBottom variant="h4" component="div">
          Toothbrush
        </CoreTypography>
      </CoreGrid>
      <CoreGrid item>
        <CoreTypography gutterBottom variant="h6" component="div">
          $4.50
        </CoreTypography>
      </CoreGrid>
    </CoreGrid>
    <CoreTypography color="text.secondary" variant="body2">
      Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
      just down the hall.
    </CoreTypography>
  </CoreBox>
  <CoreDivider variant="middle" />
  <CoreBox sx={{ m: 2 }}>
    <CoreTypography gutterBottom variant="body1">
      Select type
    </CoreTypography>
    <CoreStack direction="row" spacing={1}>
      <CoreChip label="Extra Soft" />
      <CoreChip color="primary" label="Soft" />
      <CoreChip label="Medium" />
      <CoreChip label="Hard" />
    </CoreStack>
  </CoreBox>
  <CoreBox sx={{ mt: 3, ml: 1, mb: 1 }}>
    <CoreButton>Add to cart</CoreButton>
  </CoreBox>
</CoreBox>
        `}
        renderElement={
          <CoreBox sx={{ bgcolor: "background.paper", maxWidth: 360, width: "100%" }}>
            <CoreBox sx={{ mx: 2, my: 3 }}>
              <CoreGrid container alignItems="center">
                <CoreGrid item xs>
                  <CoreTypography gutterBottom variant="h4" component="div">
                    Toothbrush
                  </CoreTypography>
                </CoreGrid>

                <CoreGrid item>
                  <CoreTypography gutterBottom variant="h6" component="div">
                    $4.50
                  </CoreTypography>
                </CoreGrid>
              </CoreGrid>

              <CoreTypography color="text.secondary" variant="body2">
                Pinstriped cornflower blue cotton blouse takes you on a walk to the park or
                just down the hall.
              </CoreTypography>
            </CoreBox>

            <CoreDivider variant="middle" />

            <CoreBox sx={{ m: 2 }}>
              <CoreTypography gutterBottom variant="body1">
                Select type
              </CoreTypography>

              <CoreStack direction="row" spacing={1}>
                <CoreChip label="Extra Soft" />

                <CoreChip color="primary" label="Soft" />

                <CoreChip label="Medium" />

                <CoreChip label="Hard" />
              </CoreStack>
            </CoreBox>

            <CoreBox sx={{ mb: 1, ml: 1, mt: 3 }}>
              <CoreButton>Add to cart</CoreButton>
            </CoreBox>
          </CoreBox>
        }
      />

      <CodeSample />

      <ComponentProps component={CoreBadge} />
  
    </>
  );
}
  