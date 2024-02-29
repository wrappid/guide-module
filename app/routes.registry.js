import {
  BlankLayout, CenteredBlankLayout, ComplexLayout, HCenteredBlankLayout, VCenteredBlankLayout, FixedFooterLayout, FixedHeaderFooterLayout, FixedHeaderLayout, FooterLayout, HeaderFooterLayout, HeaderLayout, ThreeColumnLayout, TwoColumnLayout, LeftDrawerLayout, LeftRightDrawerLayout, RightDrawerLayout
} from "@wrappid/core";

import Components from "./components/component-docs/Components";
import StyleUtilities from "./components/styles-docs/StyleUtilities";
import BlankLayoutPage from "./layout/page/BlankLayoutPage";
import CenteredBlankLayoutPage from "./layout/page/CenteredBlankLayoutPage";
import ComplexLayoutPage from "./layout/page/ComplexLayoutPage";
import FixedFooterLayoutPage from "./layout/page/FixedFooterLayoutPage";
import FixedHeaderFooterLayoutPage from "./layout/page/FixedHeaderFooterLayoutPage";
import FixedHeaderLayoutPage from "./layout/page/FixedHeaderLayoutPage";
import FooterLayoutPage from "./layout/page/FooterLayoutPage";
import HCenteredBlankLayoutPage from "./layout/page/HCenteredBlankLayoutPage";
import HeaderFooterLayoutPage from "./layout/page/HeaderFooterLayoutPage";
import HeaderLayoutPage from "./layout/page/HeaderLayoutPage";
import LeftDrawerLayoutPage from "./layout/page/LeftDrawerLayoutPage";
import LeftRightDrawerLayoutPage from "./layout/page/LeftRightDrawerPage";
import RightDrawerLayoutPage from "./layout/page/RightDrawerLayoutPage";
import ThreeColumnLayoutPage from "./layout/page/ThreeColumnLayoutPage";
import TwoColumnLayoutPage from "./layout/page/TwoColumnLayoutPage";
import VCenteredBlankLayoutPage from "./layout/page/VCenteredBlankLayoutPage";

export const RoutesRegistry = {
  BlankLayoutPage: {
    Page        : { appComponent: BlankLayoutPage.name, layout: BlankLayout.name },
    authRequired: false,
    entityRef   : "blankLayout",
    url         : "layout/blank"
  },
  CenteredBlankLayoutPage: {
    Page        : { appComponent: CenteredBlankLayoutPage.name, layout: CenteredBlankLayout.name },
    authRequired: false,
    entityRef   : "centerdBlank",
    url         : "layout/centerdBlank"
  },
  ComplexLayoutPage: {
    Page        : { appComponent: ComplexLayoutPage.name, layout: ComplexLayout.name },
    authRequired: false,
    entityRef   : "customLayout",
    url         : "layout/custom"
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
    url         : "layout/fixedFooter"
  },
  FixedHeaderFooterLayoutPage: {
    Page        : { appComponent: FixedHeaderFooterLayoutPage.name, layout: FixedHeaderFooterLayout.name },
    authRequired: false,
    entityRef   : "fixedHeaderFooterLayout",
    url         : "layout/fixedHeaderFooter"
  },
  FixedHeaderLayoutPage: {
    Page        : { appComponent: FixedHeaderLayoutPage.name, layout: FixedHeaderLayout.name },
    authRequired: false,
    entityRef   : "fixedheader",
    url         : "layout/fixedHeader"
  },
  FooterLayoutPage: {
    Page        : { appComponent: FooterLayoutPage.name, layout: FooterLayout.name },
    authRequired: false,
    entityRef   : "footerLayout",
    url         : "layout/footer"
  },
  HCenteredBlankLayoutPage: {
    Page        : { appComponent: HCenteredBlankLayoutPage.name, layout: HCenteredBlankLayout.name },
    authRequired: false,
    entityRef   : "HcenterdBlank",
    url         : "layout/horizontal-centerdBlank"
  },
  HeaderFooterLayoutPage: {
    Page        : { appComponent: HeaderFooterLayoutPage.name, layout: HeaderFooterLayout.name },
    authRequired: false,
    entityRef   : "headerFooterLayout",
    url         : "layout/header-footer"
  },
  HeaderLayoutPage: {
    Page        : { appComponent: HeaderLayoutPage.name, layout: HeaderLayout.name },
    authRequired: false,
    entityRef   : "headerLayout",
    url         : "layout/header"
  },
  LeftDrawerLayoutPage: {
    Page        : { appComponent: LeftDrawerLayoutPage.name, layout: LeftDrawerLayout.name },
    authRequired: false,
    entityRef   : "leftDrawer",
    url         : "layout/leftDrawer"
  },
  LeftRightDrawerLayoutPage: {
    Page        : { appComponent: LeftRightDrawerLayoutPage.name, layout: LeftRightDrawerLayout.name },
    authRequired: false,
    entityRef   : "left-rightDrawer",
    url         : "layout/left-rightDrawer"
  },
  RightDrawerLayoutPage: {
    Page        : { appComponent: RightDrawerLayoutPage.name, layout: RightDrawerLayout.name },
    authRequired: false,
    entityRef   : "rightDrawer",
    url         : "layout/rightDrawer"
  },
  StyleUtilities: {
    Page        : { appComponent: StyleUtilities.name },
    authRequired: false,
    entityRef   : "styles",
    url         : "guide/styles"
  },
  ThreeColumnLayoutPage: {
    Page        : { appComponent: ThreeColumnLayoutPage.name, layout: ThreeColumnLayout.name },
    authRequired: false,
    entityRef   : "threeColumnLayout",
    url         : "layout/threeColumn"
  },
  TwoColumnLayoutPage: {
    Page        : { appComponent: TwoColumnLayoutPage.name, layout: TwoColumnLayout.name },
    authRequired: false,
    entityRef   : "twoColumnLayout",
    url         : "layout/twoColumn"
  },
  VCenteredBlankLayoutPage: {
    Page        : { appComponent: VCenteredBlankLayoutPage.name, layout: VCenteredBlankLayout.name },
    authRequired: false,
    entityRef   : "VcenterdBlank",
    url         : "layout/vertical-centerdBlank"
  }

};