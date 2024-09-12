/* eslint-disable etc/no-commented-out-code */
import React from "react";

import {
  CoreTypographyBody1,
  CoreSelect,
  CoreBox,
  CoreStack,
  CoreClasses
} from "@wrappid/core";

import CodeSample from "../../CodeSample";
import ComponentDocs from "../ComponentDocs";

export default function CoreSelectDocs() {
  // eslint-disable-next-line etc/no-commented-out-code
  const [age, setAge] = React.useState("");
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const [value, setValue] = React.useState("");
  
  const handleChange1 = (event) => {
    setValue(event.target.value);
  };

  const [data, setData] = React.useState("");
  
  const handleChange2 = (event) => {
    setData(event.target.value);
  };

  return (
    <>
      <ComponentDocs
        basicSample={false}
        component={CoreSelect}
        description={ <CoreTypographyBody1>
          Select components are used for collecting user provided information from a list of options.
        </CoreTypographyBody1>}
        samples={
          <>
            <CodeSample
              title={"Basic CoreSelect"}
              description={"Menus are positioned under their emitting elements, unless they are close to the bottom of the viewport."}
              code={`<CoreSelect
  label={"Age"}
  selectID="demo-simple-select-label"
  options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
/>`}
              expandedCode={`import { CoreSelect, CoreBox } from "@wrappid/core";
  
export default function BasicSelect() {
  return (
    <CoreBox width={120}>
      <CoreSelect
        label={"Age"}
        selectID="demo-simple-select-label"
        options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
      />
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox width={120}>
                  <CoreSelect
                    label={"Age"}
                    selectID="demo-simple-select-label"
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  />
                </CoreBox>
              </>}
            />

            <CodeSample
              title={"Filled and standard variants"}
              description={" "}
              expandedCode={`import React from "react";
import { CoreSelect, CoreStack, CoreClasses } from "@wrappid/core";
            
export default function SelectVariants(){
   const [age, setAge] = React.useState("");
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return(
    <CoreStack direction="row" spacing={3} styleClasses={[CoreClasses.WIDTH.W_50]}>
      <CoreSelect
        value={age}
        handleChange={handleChange}
        label={"Age"}
        options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
      />
      <CoreSelect
        value={age}
        handleChange={handleChange}
        label={"Age"}
        variant="filled"
        options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
      />
    </CoreStack>
  );
}`}
              code={`<CoreSelect
  value={age}
  handleChange={handleChange}
  label={"Age"}
  options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
/>
<CoreSelect
  value={age}
  handleChange={handleChange}
  label={"Age"}
  variant="filled"
  options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
/>`}
              renderElement={<>
                <CoreStack direction="row" spacing={3} styleClasses={[CoreClasses.WIDTH.W_50]}>
                  <CoreSelect
                    value={age}
                    handleChange={handleChange}
                    label={"Age"}
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  />

                  <CoreSelect
                    value={age}
                    handleChange={handleChange}
                    label={"Age"}
                    variant="filled"
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  />
                </CoreStack>
              </>
              }
            />

            <CodeSample
              title={"Labels and helper text"}
              description={" "}
              code={`<CoreSelect
  value={age}
  handleChange={handleChange}
  label={"Age"}
  helperText="With label + helpertext"
  options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
/>
<CoreSelect
  value={age}
  handleChange={handleChange}
  helperText="without label"
  variant="filled"
  options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
/>`}
              expandedCode={`import React from "react";
import { CoreSelect, CoreStack, CoreClasses } from "@wrappid/core";

export default function SelectLabels(){
  const [age, setAge] = React.useState("");
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
     <CoreStack direction="row" spacing={3} styleClasses={[CoreClasses.WIDTH.W_50]}>
        <CoreSelect
          value={age}
          handleChange={handleChange}
          label={"Age"}
          helperText="With label + helpertext"
          options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
        />
        <CoreSelect
          value={age}
          handleChange={handleChange}
          helperText="without label"
          variant="filled"
          options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
        />
      </CoreStack>
  );
}`}
              renderElement={<>
                <CoreStack direction="row" spacing={3} styleClasses={[CoreClasses.WIDTH.W_50]}>
                  <CoreSelect
                    value={value}
                    handleChange={handleChange1}
                    label={"Age"}
                    helperText="With label + helpertext"
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  />

                  <CoreSelect
                    value={value}
                    handleChange={handleChange1}
                    helperText="without label"
                    variant="filled"
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  />
                </CoreStack>
              </>
              }
            />

            <CodeSample
              title={"Auto width"}
              description={" "}
              code={`<CoreSelect
  label={"Age"}
  selectID="demo-simple-select-autowidth-label"
  id="demo-simple-select-autowidth"
  options={[{ id: "", label: "None" }, { id: "20", label: "Twenty" }, { id: "21", label: "Twenty one" }, { id: "22", label: "Twenty one and half" }]}
/>`}
              expandedCode={`import { CoreSelect, CoreBox } from "@wrappid/core";
  
export default function AutoWidthSelect(){
  return (
    <CoreBox>
      <CoreSelect
        label={"Age"}
        selectID="demo-simple-select-autowidth-label"
        id="demo-simple-select-autowidth"
        options={[{ id: "", label: "None" }, { id: "20", label: "Twenty" }, { id: "21", label: "Twenty one" }, { id: "22", label: "Twenty one and half" }]}
      /> 
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox>
                  <CoreSelect
                    label={"Age"}
                    selectID="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    options={[{ id: "", label: "None" }, { id: "20", label: "Twenty" }, { id: "21", label: "Twenty one" }, { id: "22", label: "Twenty one and half" }]}
                  /> 
                </CoreBox>
              </>
              }
            />

            <CodeSample
              title={"Small Size"}
              description={" "}
              code={`<CoreSelect
  label={"Age"}
  selectID="demo-select-small-label"
  id="demo-select-small"
  options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
/> `}
              expandedCode={`import { CoreSelect, CoreBox, CoreClasses } from "@wrappid/core";
  
export default function SelectSmall(){
  return (
    <CoreBox styleClasses={[CoreClasses.WIDTH.MIN_W_25]}>
      <CoreSelect
        label={"Age"}
        selectID="demo-select-small-label"
        id="demo-select-small"
        options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
      /> 
    </CoreBox>
  );
}`}
              renderElement={<>
                <CoreBox styleClasses={[CoreClasses.WIDTH.MIN_W_25]}>
                  <CoreSelect
                    label={"Age"}
                    selectID="demo-select-small-label"
                    id="demo-select-small"
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  /> 
                </CoreBox>
              </>
              }
            /> 

            <CodeSample
              title={"Other Props"}
              description={" "}
              code={" "}
              expandedCode={`import React from "react";
import { CoreStack, CoreClasses, CoreSelect } from "@wrappid/core";

export default function SelectOtherProps() {
 const [age, setAge] = React.useState("");
  
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <CoreStack direction="row" spacing={3} styleClasses={[CoreClasses.WIDTH.W_75]}>
      <CoreSelect
        selectID="demo-simple-select-disabled-label"
        id="demo-simple-select-disabled"
        label={"Age"}
        disabled={true}
        helperText="Disabled"
        options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
      />
      <CoreSelect
        selectID="demo-simple-select-error-label"
        id="demo-simple-select-error"
        value={age}
        label="Age"
        onChange={handleChange}
        helperText="error"
        renderValue={(value) => ` + "`⚠️ - ${value}` " + `}
        options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
      />
      <CoreSelect
        selectID="demo-simple-select-readonly-label"
        id="demo-simple-select-readonly"
        value={age}
        label="Age"
        onChange={handleChange}
        helperText="readonly"
        inputProps={{ readOnly: true }}
        options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
      />
      <CoreSelect
        selectID="demo-simple-select-required-label"
        id="demo-simple-select-required"
        value={age}
        label="Age *"
        helperText="required"
        onChange={handleChange}
        options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
      />
    </CoreStack>
  );
}`}
              renderElement={<>
                <CoreStack direction="row" spacing={3} styleClasses={[CoreClasses.WIDTH.W_75]}>
                  <CoreSelect
                    selectID="demo-simple-select-disabled-label"
                    id="demo-simple-select-disabled"
                    label={"Age"}
                    disabled={true}
                    helperText="Disabled"
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  />

                  <CoreSelect
                    selectID="demo-simple-select-error-label"
                    id="demo-simple-select-error"
                    value={data}
                    label="Age"
                    onChange={handleChange2}
                    helperText="error"
                    renderValue={(value) => `⚠️  - ${value}`}
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  />

                  <CoreSelect
                    selectID="demo-simple-select-readonly-label"
                    id="demo-simple-select-readonly"
                    value={data}
                    label="Age"
                    onChange={handleChange2}
                    helperText="readonly"
                    inputProps={{ readOnly: true }}
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  />

                  <CoreSelect
                    selectID="demo-simple-select-required-label"
                    id="demo-simple-select-required"
                    value={data}
                    label="Age *"
                    helperText="required"
                    onChange={handleChange2}
                    options={[{ id: "", label: "None" }, { id: "10", label: "Ten" }, { id: "20", label: "Twenty" }, { id: "30", label: "Thirty" }]}
                  />
                </CoreStack>
              </>
              }
            />
          </>
        }
      />

    </>
  );
}
