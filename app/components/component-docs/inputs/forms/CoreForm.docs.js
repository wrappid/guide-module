import {
  CoreForm,
  CoreH4,
  CoreTypographyBody1,
  CoreTypographyBody2,
  FORM_EDIT_MODE
} from "@wrappid/core";

import CodeSample from "../../../CodeSample";
import ComponentProps from "../../../ComponentProps";

// eslint-disable-next-line etc/no-commented-out-code
// const steps = [{ point: "Import CoreForm import { CoreForm } from @wrappid/core" }, { point: "Create a FormSchema in the database or create a json object locally in the project" }, { point: "Pass formId props to CoreForm." }, { point: "Pass Json as a props to CoreForm formJson if there is no FormSchema available from the database." }];

const CoreFormSampleSchema = {
  "actionContainerStyle": "alignRight",
  "actions"             : [],
  "allowCancel"         : true,
  "cardElevation"       : false,
  "fields"              : [
    {
      "gridSize": 12,
      "id"      : "BasicInputField",
      "label"   : "Basic input field",
      "name"    : "BasicInputField",
      "required": true,
      "type"    : "text"
    },
  ],
  "submitButtonLabel": "Submit",
  "validation"       : "coreFormSampleSchema"
};

const multipleFieldsSampleForm = {
  "actionContainerStyle": "alignRight",
  "actions"             : [],
  "allowCancel"         : true,
  "cardElevation"       : false,
  "fields"              : [
    {
      "gridSize": 12,
      "id"      : "firstField",
      "label"   : "First input field",
      "name"    : "firstField",
      "required": true,
      "type"    : "text"
    },
    {
      "gridSize": 12,
      "id"      : "secondField",
      "label"   : "Second input field",
      "name"    : "secondField",
      "required": true,
      "type"    : "text"
    },
  ],
  "submitButtonLabel": "Submit",
  "validation"       : "coreFormSampleSchema"
};

export default function CoreFormDocs() {

  return (
    <>
      <CoreH4>CoreForm</CoreH4>
  
      <CoreTypographyBody1>
      CoreForm component is a wrapper component that manages the data fetching, form editing/adding/deletion, submission logic, validations and error handling and form state management by Redux.

      </CoreTypographyBody1>

      <CoreTypographyBody2>Steps to use CoreForm</CoreTypographyBody2>

      <CoreTypographyBody1>{"1. Import CoreForm import { CoreForm } from @wrappid/core" }</CoreTypographyBody1>

      <CoreTypographyBody1>{"2. Create a FormSchema in the database or create a json object locally in the project" }</CoreTypographyBody1>

      <CoreTypographyBody1>{"3. Pass formId props to CoreForm" }</CoreTypographyBody1>

      <CoreTypographyBody1>{"4. Pass Json as a props to CoreForm formJson if there is no FormSchema available from the database." }</CoreTypographyBody1>

      {/* eslint-disable-next-line etc/no-commented-out-code */}
      {/* {steps.map((item, index) => {
        <CoreTypographyBody1 key={index}>{`${index + 1}${item.point}`}</CoreTypographyBody1>;
      })} */}
  
      <CodeSample
        title={"A simple form component with it's json"}
        description={"A basic form with some basic fields in it's json"}
        code={`
        SampleSchema = {
          "actionContainerStyle": "alignRight",
          "actions"             : [],
          "allowCancel"         : true,
          "cardElevation"       : false,
          "fields"              : [
            {
              "gridSize": 12,
              "id"      : "BasicInputField",
              "label"   : "Basic input field",
              "name"    : "BasicInputField",
              "required": true,
              "type"    : "text"
            },
          ],
          "submitButtonLabel": "Submit",
          "validation"       : "SampleSchema"
        };

        <CoreForm
        formId="SampleForm"
        formJson= {{ SampleForm: SampleSchema }} 
        authenticated={false}
      />`}
        renderElement={<>
        
          <CoreForm
            formId="coreFormSampleSchema"
            formJson= {{ coreFormSampleSchema: CoreFormSampleSchema }} 
            authenticated={false}
            addForm={true}
            initData={{ data: "Hello" }}
            mode={FORM_EDIT_MODE}
          />
        </>}
      />

      <CodeSample
        title={"Multiple fields"}
        description={"A multiple input field form and it's json"}
        code={`
        const multipleFieldsSampleForm = {
          "actionContainerStyle": "alignRight",
          "actions"             : [],
          "allowCancel"         : true,
          "cardElevation"       : false,
          "fields"              : [
            {
              "gridSize": 12,
              "id"      : "firstField",
              "label"   : "First input field",
              "name"    : "firstField",
              "required": true,
              "type"    : "text"
            },
            {
              "gridSize": 12,
              "id"      : "secondField",
              "label"   : "Second input field",
              "name"    : "secondField",
              "required": true,
              "type"    : "text"
            },
          ],
          "submitButtonLabel": "Submit",
          "validation"       : "coreFormSampleSchema"
        };        
        `}
        renderElement={<>
        
          <CoreForm
            formId="multipleFieldsSampleForm"
            formJson= {{ multipleFieldsSampleForm: multipleFieldsSampleForm }} 
            authenticated={false}
          />
        </>}
      />

      <ComponentProps component={CoreForm} />
      
    </>
  );
}