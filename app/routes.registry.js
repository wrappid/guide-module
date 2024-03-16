import {
  BlankLayout, CenteredBlankLayout, ComplexLayout,
  FixedFooterLayout, FixedHeaderFooterLayout, FixedHeaderLayout, FooterLayout,
  HCenteredBlankLayout,
  HeaderFooterLayout, HeaderLayout,
  LeftDrawerLayout, LeftRightDrawerLayout, RightDrawerLayout,
  ThreeColumnLayout, TwoColumnLayout,
  VCenteredBlankLayout
} from "@wrappid/core";

import Components from "./components/component-docs/Components";
import Layouts from "./components/layout-docs/Layouts";
import BlankLayoutPage from "./components/layout-docs/page/BlankLayoutPage";
import CenteredBlankLayoutPage from "./components/layout-docs/page/CenteredBlankLayoutPage";
import ComplexLayoutPage from "./components/layout-docs/page/ComplexLayoutPage";
import FixedFooterLayoutPage from "./components/layout-docs/page/FixedFooterLayoutPage";
import FixedHeaderFooterLayoutPage from "./components/layout-docs/page/FixedHeaderFooterLayoutPage";
import FixedHeaderLayoutPage from "./components/layout-docs/page/FixedHeaderLayoutPage";
import FooterLayoutPage from "./components/layout-docs/page/FooterLayoutPage";
import HCenteredBlankLayoutPage from "./components/layout-docs/page/HCenteredBlankLayoutPage";
import HeaderFooterLayoutPage from "./components/layout-docs/page/HeaderFooterLayoutPage";
import HeaderLayoutPage from "./components/layout-docs/page/HeaderLayoutPage";
import LeftDrawerLayoutPage from "./components/layout-docs/page/LeftDrawerLayoutPage";
import LeftRightDrawerLayoutPage from "./components/layout-docs/page/LeftRightDrawerPage";
import RightDrawerLayoutPage from "./components/layout-docs/page/RightDrawerLayoutPage";
import ThreeColumnLayoutPage from "./components/layout-docs/page/ThreeColumnLayoutPage";
import TwoColumnLayoutPage from "./components/layout-docs/page/TwoColumnLayoutPage";
import VCenteredBlankLayoutPage from "./components/layout-docs/page/VCenteredBlankLayoutPage";
import Styles from "./components/styles-docs/Styles";

export const RoutesRegistry = {
  BlankLayoutPage: {
    Page        : { appComponent: BlankLayoutPage.name, layout: BlankLayout.name },
    authRequired: false,
    entityRef   : "blankLayout",
    url         : "layout/BlankLayout"
  },
  CenteredBlankLayoutPage: {
    Page        : { appComponent: CenteredBlankLayoutPage.name, layout: CenteredBlankLayout.name },
    authRequired: false,
    entityRef   : "centerdBlank",
    url         : "layout/CenteredBlankLayout"
  },
  ComplexLayoutPage: {
    Page        : { appComponent: ComplexLayoutPage.name, layout: ComplexLayout.name },
    authRequired: false,
    entityRef   : "customLayout",
    url         : "layout/ComplexLayout"
  },
  Components: {
    Page        : { appComponent: Components.name },
    authRequired: false,
    entityRef   : "components",
    url         : "guide/components"
  },
  FixedFooterLayoutPage: {
    Page        : { appComponent: FixedFooterLayoutPage.name, layout: FixedFooterLayout.name },
    authRequired: false,
    entityRef   : "fixedFooterLayout",
    url         : "layout/FixedFooterLayout"
  },
  FixedHeaderFooterLayoutPage: {
    Page        : { appComponent: FixedHeaderFooterLayoutPage.name, layout: FixedHeaderFooterLayout.name },
    authRequired: false,
    entityRef   : "fixedHeaderFooterLayout",
    url         : "layout/FixedHeaderFooterLayout"
  },
  FixedHeaderLayoutPage: {
    Page        : { appComponent: FixedHeaderLayoutPage.name, layout: FixedHeaderLayout.name },
    authRequired: false,
    entityRef   : "fixedheader",
    url         : "layout/FixedHeaderLayout"
  },
  FooterLayoutPage: {
    Page        : { appComponent: FooterLayoutPage.name, layout: FooterLayout.name },
    authRequired: false,
    entityRef   : "footerLayout",
    url         : "layout/FooterLayout"
  },
  HCenteredBlankLayoutPage: {
    Page        : { appComponent: HCenteredBlankLayoutPage.name, layout: HCenteredBlankLayout.name },
    authRequired: false,
    entityRef   : "HcenterdBlank",
    url         : "layout/HCenteredBlankLayout"
  },
  HeaderFooterLayoutPage: {
    Page        : { appComponent: HeaderFooterLayoutPage.name, layout: HeaderFooterLayout.name },
    authRequired: false,
    entityRef   : "headerFooterLayout",
    url         : "layout/HeaderFooterLayout"
  },
  HeaderLayoutPage: {
    Page        : { appComponent: HeaderLayoutPage.name, layout: HeaderLayout.name },
    authRequired: false,
    entityRef   : "headerLayout",
    url         : "layout/HeaderLayout"
  },
  Layouts: {
    Page        : { appComponent: Layouts.name, layout: "BlankLayout" },
    authRequired: false,
    entityRef   : "Layouts",
    url         : "guide/layouts"
  },
  LeftDrawerLayoutPage: {
    Page        : { appComponent: LeftDrawerLayoutPage.name, layout: LeftDrawerLayout.name },
    authRequired: false,
    entityRef   : "leftDrawer",
    url         : "layout/LeftDrawerLayout"
  },
  LeftRightDrawerLayoutPage: {
    Page        : { appComponent: LeftRightDrawerLayoutPage.name, layout: LeftRightDrawerLayout.name },
    authRequired: false,
    entityRef   : "left-rightDrawer",
    url         : "layout/LeftRightDrawerLayout"
  },
  RightDrawerLayoutPage: {
    Page        : { appComponent: RightDrawerLayoutPage.name, layout: RightDrawerLayout.name },
    authRequired: false,
    entityRef   : "rightDrawer",
    url         : "layout/RightDrawerLayout"
  },
  Styles: {
    Page        : { appComponent: Styles.name, layout: "BlankLayout" },
    authRequired: false,
    entityRef   : "styles",
    url         : "guide/styles"
  },
  ThreeColumnLayoutPage: {
    Page        : { appComponent: ThreeColumnLayoutPage.name, layout: ThreeColumnLayout.name },
    authRequired: false,
    entityRef   : "threeColumnLayout",
    url         : "layout/ThreeColumnLayout"
  },
  TwoColumnLayoutPage: {
    Page        : { appComponent: TwoColumnLayoutPage.name, layout: TwoColumnLayout.name },
    authRequired: false,
    entityRef   : "twoColumnLayout",
    url         : "layout/TwoColumnLayout"
  },
  VCenteredBlankLayoutPage: {
    Page        : { appComponent: VCenteredBlankLayoutPage.name, layout: VCenteredBlankLayout.name },
    authRequired: false,
    entityRef   : "VcenterdBlank",
    url         : "layout/VCenteredBlankLayout"
  }

};