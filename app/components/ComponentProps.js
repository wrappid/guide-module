/* eslint-disable etc/no-commented-out-code */
import React from "react";

import {
  defaultValidProps, defaultInvalidProps, CoreBox, CoreClasses, CoreH5, CoreDivider, CoreSelect
} from "@wrappid/core";

import ComponentPropTypes from "./ComponentPropTypes";

const VIEWPROPSDATA = ["Table", "List"];

export default function ComponentProps(props) {
  const [viewPropsData, setViewPropsData] = React.useState(VIEWPROPSDATA[0]);
  const { component } = props;

  const validProps = [...(component?.validProps || []), ...defaultValidProps];
  const invalidProps = [...(component?.invalidProps || []), ...defaultInvalidProps];

  const handleSelectChange = (event) => {
    setViewPropsData(event.target.value);
  };

  const PropsHeading = ({ title }) => {
    return (
      <CoreBox styleClasses={[CoreClasses.BG.BG_GREY_100, CoreClasses.PADDING.P2, CoreClasses.BORDER.BORDER_ROUNDED_1, CoreClasses.MARGIN.MY2]}>
        <CoreH5>{title}</CoreH5>

        {title === "Valid Props" && <CoreSelect
          gridProps={{ gridSize: { md: 12 } }}
          label="View props"
          id="viewPropsData"
          value={viewPropsData}
          handleChange={(event) => handleSelectChange(event)}
          options={Object.keys(VIEWPROPSDATA).map((key) => ({
            id   : VIEWPROPSDATA[key],
            label: VIEWPROPSDATA[key],
            value: VIEWPROPSDATA[key],
          }))}
        />}
      </CoreBox>
    );
  };

  return (
    <>
      <PropsHeading title={"Valid Props"} />

      {validProps && validProps?.map((eachProp, index) => {
        return <ComponentPropTypes key={index} propTypes={eachProp} viewType={viewPropsData} />;
      })}

      <PropsHeading title={"Invalid Props"} />

      {invalidProps && invalidProps?.map((eachProp) => {
        return (
          <CoreBox key={`${eachProp}`}>
            <CoreH5>{eachProp}</CoreH5>

            <CoreDivider />
          </CoreBox>
        );
      })}
    </>
  );
}