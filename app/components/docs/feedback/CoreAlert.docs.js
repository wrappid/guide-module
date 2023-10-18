import {
    CoreH4,
    CoreTypographyBody1,
    CoreTypographyBody2,
    CoreDivider,
    CoreAlert,
    CoreStack
  } from "@wrappid/core";
import CodeSample from "../../CodeSample";
import ComponentProps from "../../ComponentProps";

  export default function CoreAlertDocs(){
    return (
        <>
        <CoreH4>CoreAlert</CoreH4>
        <CoreTypographyBody1>
            The CoreAlert feedback component follows the Material UI. 
            A CoreAlert displays a short, important message in a way that attracts the user's attention without interrupting the user's task.
        </CoreTypographyBody1>
        <CoreStack spacing={2} direction="column">
        
        <CoreTypographyBody2>
        The CoreAlert offers four severity levels that set a distinctive icon and color.

        </CoreTypographyBody2>
        <CoreTypographyBody2>
        1. Error
        </CoreTypographyBody2>
        <CoreTypographyBody2>
        2. Warning
        </CoreTypographyBody2>
        <CoreTypographyBody2>
        3. Info
        </CoreTypographyBody2>
        <CoreTypographyBody2>
        4. Success
        </CoreTypographyBody2>
        </CoreStack>
        <CoreDivider/>

        <CodeSample
        title={"CoreAlert Usage"}
        description={"CoreAlert usage with error severity level."}
        code={`
        <CoreAlert severity="error">This is an error alert</CoreAlert>
        `}
        renderElement={
            <CoreAlert severity="error">This is an error CoreAlert</CoreAlert>
        }
        />

        <CoreDivider/>

        <CodeSample
        title={"CoreAlert Warning"}
        description={"CoreAlert usage with warning severity level."}
        code={`
        <CoreAlert severity="warning">This is an warning alert</CoreAlert>
        `}
        renderElement={
            <CoreAlert severity="warning">This is a warning CoreAlert</CoreAlert>
        }
        />
        <CoreDivider/>

        <CodeSample
        title={"CoreAlert Info"}
        description={"CoreAlert usage with info severity level."}
        code={`
        <CoreAlert severity="error">This is an info alert</CoreAlert>
        `}
        renderElement={
            <CoreAlert severity="info">This is a info CoreAlert</CoreAlert>
        }
        />

        <CoreDivider/>

        <CodeSample
        title={"CoreAlert Success"}
        description={"CoreAlert usage with success severity level."}
        code={`
        <CoreAlert severity="success">This is an success alert</CoreAlert>
        `}
        renderElement={
            <CoreAlert severity="success">This is an success CoreAlert</CoreAlert>
        }
        />
      <ComponentProps component={CoreAlert} />
        </>
    )
  }
