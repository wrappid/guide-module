import CoreAvatarDocs from "./dataDisplay/CoreAvatar.docs";
import DataDisplayDocs from "./dataDisplay/DataDisplay.docs";
import CoreH1Docs from "./dataDisplay/heading/CoreH1.docs";
import CoreH2Docs from "./dataDisplay/heading/CoreH2.docs";
import CoreH3Docs from "./dataDisplay/heading/CoreH3.docs";
import CoreH4Docs from "./dataDisplay/heading/CoreH4.docs";
import CoreH5Docs from "./dataDisplay/heading/CoreH5.docs";
import CoreH6Docs from "./dataDisplay/heading/CoreH6.docs";
import HeadingDocs from "./dataDisplay/heading/Heading.docs";
import CoreAlertDocs from "./feedback/CoreAlert.docs";
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
          },
          CoreH2: {
            main : CoreH2Docs,
            order: 1
          },
          CoreH3: {
            main : CoreH3Docs,
            order: 2
          },
          CoreH4: {
            main : CoreH4Docs,
            order: 3
          },
          CoreH5: {
            main : CoreH5Docs,
            order: 4
          },
          CoreH6: {
            main : CoreH6Docs,
            order: 5
          }
        },
        main : HeadingDocs,
        order: 0
      }
    },
    main : DataDisplayDocs,
    order: 1 
  },
  Feedback: {
    children: {
      CoreAlertDocs: {main: CoreAlertDocs },
    }
  },
  Overview: {
    children: {},
    main    : OverviewDocs,
    order   : 0
  }
};
