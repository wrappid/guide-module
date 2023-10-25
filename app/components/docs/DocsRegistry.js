import CoreAvatarDocs from "./dataDisplay/CoreAvatar.docs";
import CoreBadgeDocs from "./dataDisplay/CoreBadge.docs";
import CoreChipDocs from "./dataDisplay/CoreChip.docs";
import CoreDividerDocs from "./dataDisplay/CoreDivider.docs";
import CoreIconsDocs from "./dataDisplay/CoreIcons.docs";
import CoreListDocs from "./dataDisplay/list/CoreList.docs";
import CoreTableDocs from "./dataDisplay/CoreTable.docs";
import CoreTooltipDocs from "./dataDisplay/CoreTooltip.docs";
import CoreTypographyDocs from "./dataDisplay/CoreTypography.docs";
import DataDisplayDocs from "./dataDisplay/DataDisplay.docs";
import CoreH1Docs from "./dataDisplay/heading/CoreH1.docs";
import CoreH2Docs from "./dataDisplay/heading/CoreH2.docs";
import CoreH3Docs from "./dataDisplay/heading/CoreH3.docs";
import CoreH4Docs from "./dataDisplay/heading/CoreH4.docs";
import CoreH5Docs from "./dataDisplay/heading/CoreH5.docs";
import CoreH6Docs from "./dataDisplay/heading/CoreH6.docs";
import HeadingDocs from "./dataDisplay/heading/Heading.docs";
import CoreAlertDocs from "./feedback/CoreAlert.docs";
import CoreBackdropDocs from "./feedback/CoreBackdrop.docs";
import CoreDialogDocs from "./feedback/CoreDialog.docs";
import CoreSkeletonDocs from "./feedback/CoreSkeleton.docs";
import CoreSnackbarDocs from "./feedback/CoreSnackbar.docs";
import FeedbackDocs from "./feedback/Feedback.docs";
import CoreCircularProgressDocs from "./feedback/progress/CoreCircularProgress.docs";
import CoreLinearProgressDocs from "./feedback/progress/CoreLinearProgress.docs.js";
import CoreProgressDocs from "./feedback/progress/CoreProgress.docs";
import OverviewDocs from "./Overview.docs";
import CoreAlertTitleDocs from "./feedback/CoreAlertTitle.docs";
import CoreDialogActionsDocs from "./feedback/CoreDialogActions.docs";
import CoreDialogContentDocs from "./feedback/CoreDialogContent.docs";
import CoreDialogContentTextDocs from "./feedback/CoreDialogContentText.docs";
import CoreDialogTitleDocs from "./feedback/CoreDialogTitle.docs";

export default {
  DataDisplay: {
    children: {
      CoreAvatar    : { main: CoreAvatarDocs },
      CoreBadge     : { main: CoreBadgeDocs },
      CoreChip      : { main: CoreChipDocs },
      CoreDivider   : { main: CoreDividerDocs },
      CoreIcons     : { main: CoreIconsDocs },
      CoreList      : { main: CoreListDocs },
      CoreTable     : { main: CoreTableDocs },
      CoreTooltip   : { main: CoreTooltipDocs },
      CoreTypography: { main: CoreTypographyDocs },
      Headings      : {
        children: {
          CoreH1: {
            main : CoreH1Docs,
            order: 0,
          },
          CoreH2: {
            main : CoreH2Docs,
            order: 1,
          },
          CoreH3: {
            main : CoreH3Docs,
            order: 2,
          },
          CoreH4: {
            main : CoreH4Docs,
            order: 3,
          },
          CoreH5: {
            main : CoreH5Docs,
            order: 4,
          },
          CoreH6: {
            main : CoreH6Docs,
            order: 5,
          },
        },
        main : HeadingDocs,
        order: 0,
      },
    },
    main : DataDisplayDocs,
    order: 1,
  },
  Feedback: {
    children: {
      CoreAlert   : {
        children: { 
        CoreAlertDocs: {main: CoreAlertDocs} ,
        CoreAlertTitleDocs: {main: CoreAlertTitleDocs}
      }
    },
      CoreBackdropDocs: { main: CoreBackdropDocs },
      CoreDialog  : {
        children: {
          CoreDialogDocs: { main: CoreDialogDocs },
          CoreDialogActionsDocs: {main: CoreDialogActionsDocs},
          CoreDialogContentDocs: {main: CoreDialogContentDocs},
          CoreDialogContentTextDocs: {main: CoreDialogContentTextDocs},
          CoreDialogTitleDocs: {main: CoreDialogTitleDocs}
        }
      },
      CoreProgress: {
        children: {
          CoreCircularProgress: { main: CoreCircularProgressDocs },
          CoreLinearProgress  : { main: CoreLinearProgressDocs }
        }, 
        main: CoreProgressDocs,
      },
      CoreSkeletonDocs: { main: CoreSkeletonDocs },
      CoreSnackbarDocs: { main: CoreSnackbarDocs },
    },
    main : FeedbackDocs,
    order: 2
  },
  Overview: {
    children: {},
    main    : OverviewDocs,
    order   : 0,
  },
};
