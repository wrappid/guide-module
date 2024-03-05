import Components from "./components/component-docs/Components";
import SampleLayouts from "./components/component-docs/layouts/SampleLayouts";
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
import LeftRightDrawerPage from "./layout/page/LeftRightDrawerPage";
import RightDrawerLayoutPage from "./layout/page/RightDrawerLayoutPage";
import ThreeColumnLayoutPage from "./layout/page/ThreeColumnLayoutPage";
import TwoColumnLayoutPage from "./layout/page/TwoColumnLayoutPage";
import VCenteredBlankLayoutPage from "./layout/page/VCenteredBlankLayoutPage";

export const ComponentsRegistry = {
  BlankLayoutPage            : { comp: BlankLayoutPage },
  CenteredBlankLayoutPage    : { comp: CenteredBlankLayoutPage },
  ComplexLayoutPage          : { comp: ComplexLayoutPage },
  Components                 : { comp: Components },
  FixedFooterLayoutPage      : { comp: FixedFooterLayoutPage },
  FixedHeaderFooterLayoutPage: { comp: FixedHeaderFooterLayoutPage },
  FixedHeaderLayoutPage      : { comp: FixedHeaderLayoutPage },
  FooterLayoutPage           : { comp: FooterLayoutPage },
  HCenteredBlankLayoutPage   : { comp: HCenteredBlankLayoutPage },
  HeaderFooterLayoutPage     : { comp: HeaderFooterLayoutPage },
  HeaderLayoutPage           : { comp: HeaderLayoutPage },
  LeftDrawerLayoutPage       : { comp: LeftDrawerLayoutPage },
  LeftRightDrawerPage        : { comp: LeftRightDrawerPage },
  RightDrawerLayoutPage      : { comp: RightDrawerLayoutPage },
  SampleLayouts              : { comp: SampleLayouts },
  StyleUtilities             : { comp: StyleUtilities },
  ThreeColumnLayoutPage      : { comp: ThreeColumnLayoutPage },
  TwoColumnLayoutPage        : { comp: TwoColumnLayoutPage },
  VCenteredBlankLayoutPage   : { comp: VCenteredBlankLayoutPage },
};