// eslint-disable-next-line no-unused-vars, unused-imports/no-unused-imports
import React from "react";

import { CoreTypographyBody1, CenteredBlankLayout, CoreLayoutItem } from "@wrappid/core";

export default function CenteredBlankLayoutPage() {

  // eslint-disable-next-line etc/no-commented-out-code
  React.useEffect(() => {
    // eslint-disable-next-line no-console
    console.log("CenteredBlankLayoutPage::useEffect");
  });

  return (
    <>
      <CoreLayoutItem id={CenteredBlankLayout.PLACEHOLDER.CONTENT}>
        <CoreTypographyBody1>This is a content inside Centered Blank Layout</CoreTypographyBody1>
      </CoreLayoutItem>
    </>
  );
}
