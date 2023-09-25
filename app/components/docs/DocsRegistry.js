import CoreAvatarDocs from "./dataDisplay/CoreAvatar.docs";
import DataDisplayDocs from "./dataDisplay/DataDisplay.docs";
import CoreH1Docs from "./dataDisplay/heading/CoreH1.docs";
import HeadingDocs from "./dataDisplay/heading/Heading.docs";
import OverviewDocs from "./Overview.docs";

export default {
  DataDisplay: {
    children: {
      CoreAvatar: { main: CoreAvatarDocs },
      Headings  : {
        children: {
          CoreH1: {
            main : CoreH1Docs,
            order: 0
          }
        },
        main : HeadingDocs,
        order: 0
      }
    },
    main : DataDisplayDocs,
    order: 1 
  },
  Overview: {
    children: {},
    main    : OverviewDocs,
    order   : 0
  }
};
