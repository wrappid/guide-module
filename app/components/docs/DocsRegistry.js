import DataDisplayDocs from "./dataDisplay/DataDisplay.docs";
import HeadingDocs from "./dataDisplay/heading/Heading.docs";
import OverviewDocs from "./Overview.docs";

export default {
  DataDisplay: {
    childrens: { childrens: {}, main: HeadingDocs, order: 1 },
    main     : DataDisplayDocs,
    order    : 1 
  },
  Overview: { main: OverviewDocs, order: 0 }
};
