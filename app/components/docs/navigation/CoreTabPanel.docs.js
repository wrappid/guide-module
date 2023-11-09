import * as React from "react";

import {
  CoreH4,
  CoreTypographyBody1
} from "@wrappid/core";
  
import CodeSample from "../../CodeSample";

export default function CoreTabPanelDocs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <CoreH4>CoreTabPanel</CoreH4>
  
      <CoreTypographyBody1>
          COMPONENT_DESCRIPTION
      </CoreTypographyBody1>
  
      <CodeSample
        title={"CoreTabPanel (NOT_WORKING)"}
        description={"DESCRIPTION_OF_THE_SAMPLE"}
        code={"PRE-FORMATTED_CODE_GOES_HERE"}
        renderElement={<>
          {/* <CoreBox sx={{ width: "100%" }}>
            <CoreBox sx={{ borderBottom: 1, borderColor: "divider" }}>
              <CoreTabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <CoreTab label="Item One" {...a11yProps(0)} />

                <CoreTab label="Item Two" {...a11yProps(1)} />

                <CoreTab label="Item Three" {...a11yProps(2)} />
              </CoreTabs>
            </CoreBox>

            <CustomTabPanel value={value} index={0}>
        Item One
            </CustomTabPanel>

            <CustomTabPanel value={value} index={1}>
        Item Two
            </CustomTabPanel>

            <CustomTabPanel value={value} index={2}>
        Item Three
            </CustomTabPanel>
          </CoreBox> */}
        </>}
      />
        
      {/* <ComponentProps component={CoreTabPanel} /> */}
      
    </>
  );
}

// function CustomTabPanel(props) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <CoreBox sx={{ p: 3 }}>
//           <CoreTypographyBody1>{children}</CoreTypographyBody1>
//         </CoreBox>
//       )}
//     </div>
//   );
// }

// CustomTabPanel.propTypes = {
//   children: PropTypes.node,
//   index   : PropTypes.number.isRequired,
//   value   : PropTypes.number.isRequired,
// };

// function a11yProps(index) {
//   return {
//     "aria-controls": `simple-tabpanel-${index}`,
//     id             : `simple-tab-${index}`,
//   };
// }