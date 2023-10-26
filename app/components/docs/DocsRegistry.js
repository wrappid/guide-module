import OverviewDocs from "./Overview.docs";
import DataDisplayDocs from "./dataDisplay/DataDisplay.docs";
import CoreAvatarDocs from "./dataDisplay/CoreAvatar.docs";
import CoreBadgeDocs from "./dataDisplay/CoreBadge.docs";
import CoreChipDocs from "./dataDisplay/CoreChip.docs";
import CoreDividerDocs from "./dataDisplay/CoreDivider.docs";
import CoreIconsDocs from "./dataDisplay/CoreIcons.docs";
import CoreListDocs from "./dataDisplay/list/CoreList.docs";
import CoreListItemDocs from "./dataDisplay/list/CoreListItem.docs";
import CoreListItemAvatarDocs from "./dataDisplay/list/CoreListItemAvatar.docs";
import CoreListItemButtonDocs from "./dataDisplay/list/CoreListItemButton.docs";
import CoreListItemIconDocs from "./dataDisplay/list/CoreListItemIcon.docs";
import CoreListItemSecondaryActionDocs from "./dataDisplay/list/CoreListItemSecondaryAction.docs";
import CoreTableDocs from "./dataDisplay/CoreTable.docs";
import CoreTooltipDocs from "./dataDisplay/CoreTooltip.docs";
import CoreTypographyDocs from "./dataDisplay/CoreTypography.docs";
import CoreH1Docs from "./dataDisplay/heading/CoreH1.docs";
import CoreH2Docs from "./dataDisplay/heading/CoreH2.docs";
import CoreH3Docs from "./dataDisplay/heading/CoreH3.docs";
import CoreH4Docs from "./dataDisplay/heading/CoreH4.docs";
import CoreH5Docs from "./dataDisplay/heading/CoreH5.docs";
import CoreH6Docs from "./dataDisplay/heading/CoreH6.docs";
import HeadingDocs from "./dataDisplay/heading/Heading.docs";
import CoreAvatarGroupDocs from "./dataDisplay/CoreAvatarGroup.docs";
import CoreTypographyBody1Docs from "./dataDisplay/CoreTypographyBody1.docs";
import CoreTypographyBody2Docs from "./dataDisplay/CoreTypographyBody2.docs";
import CoreTypographyButtonDocs from "./dataDisplay/CoreTypographyButton.docs";
import CoreTypographyCaptionDocs from "./dataDisplay/CoreTypographyCaption.docs";
import CoreTypographyOverlineDocs from "./dataDisplay/CoreTypographyOverline.docs";
import CoreTypographySubtitle1Docs from "./dataDisplay/CoreTypographySubtitle1.docs";
import CoreTypographySubtitle2Docs from "./dataDisplay/CoreTypographySubtitle2.docs";
import CoreAlertDocs from "./feedback/CoreAlert.docs";
import CoreBackdropDocs from "./feedback/CoreBackdrop.docs";
import CoreDialogDocs from "./feedback/CoreDialog.docs";
import CoreSkeletonDocs from "./feedback/CoreSkeleton.docs";
import CoreSnackbarDocs from "./feedback/CoreSnackbar.docs";
import FeedbackDocs from "./feedback/Feedback.docs";
import CoreCircularProgressDocs from "./feedback/progress/CoreCircularProgress.docs";
import CoreLinearProgressDocs from "./feedback/progress/CoreLinearProgress.docs.js";
import CoreProgressDocs from "./feedback/progress/CoreProgress.docs";
import CoreAlertTitleDocs from "./feedback/CoreAlertTitle.docs";
import CoreDialogActionsDocs from "./feedback/CoreDialogActions.docs";
import CoreDialogContentDocs from "./feedback/CoreDialogContent.docs";
import CoreDialogContentTextDocs from "./feedback/CoreDialogContentText.docs";
import CoreDialogTitleDocs from "./feedback/CoreDialogTitle.docs";
import InputsDocs from "./inputs/Inputs.docs";
import CoreAutocompleteDocs from "./inputs/CoreAutocomplete.docs";
import CoreButtonDocs from "./inputs/button/CoreButton.docs";
import CoreButtonBaseDocs from "./inputs/button/CoreButtonBase.docs";
import CoreIconButtonDocs from "./inputs/button/CoreIconButton.docs";
import CoreLoadingButtonDocs from "./inputs/button/CoreLoadingButton.docs";
import CoreButtonGroupDocs from "./inputs/CoreButtonGroup.docs";
import CoreCheckboxDocs from "./inputs/CoreCheckbox.docs";
import CoreFabDocs from "./inputs/CoreFab.docs";
import CoreRadioGroupDocs from "./inputs/CoreRadioGroup.docs";
import CoreRatingDocs from "./inputs/CoreRating.docs";
import CoreSelectDocs from "./inputs/CoreSelect.docs";
import CoreSliderDocs from "./inputs/CoreSlider.docs";
import CoreSwitchDocs from "./inputs/CoreSwitch.docs";
import CoreTextFieldDocs from "./inputs/CoreTextField.docs";
import CoreTransferListDocs from "./inputs/CoreTransferList.docs";
import CoreAsyncSelectDocs from "./inputs/CoreAsyncSelect.docs";
import CoreToggleButtonDocs from "./inputs/CoreToggleButton.docs";

export default {
  Inputs: {
    children: {
      CoreAutocomplete: { main: CoreAutocompleteDocs },
      CoreButton: {
        main: CoreButtonDocs,
        children: {
          CoreButtonBase: { main: CoreButtonBaseDocs },
          CoreIconButton: { main: CoreIconButtonDocs },
          CoreLoadingButton: { main: CoreLoadingButtonDocs },
        },
      },
      CoreButtonGroup: { main: CoreButtonGroupDocs },
      CoreCheckbox: { main: CoreCheckboxDocs },
      CoreFab: { main: CoreFabDocs },
      CoreRadioGroup: { main: CoreRadioGroupDocs },
      CoreRating: { main: CoreRatingDocs },
      CoreSelect: { main: CoreSelectDocs },
      CoreSlider: { main: CoreSliderDocs },
      CoreSwitch: { main: CoreSwitchDocs },
      CoreTextField: { main: CoreTextFieldDocs },
      CoreTransferList: { main: CoreTransferListDocs },
      CoreAsyncSelect: { main: CoreAsyncSelectDocs },
      CoreToggleButton: { main: CoreToggleButtonDocs },
    },
    main: InputsDocs,
    order: 0,
  },
  DataDisplay: {
    children: {
      CoreAvatar: {
        main: CoreAvatarDocs,
        children: {
          CoreAvatarGroup: { main: CoreAvatarGroupDocs },
        },
      },
      CoreBadge: { main: CoreBadgeDocs },
      CoreChip: { main: CoreChipDocs },
      CoreDivider: { main: CoreDividerDocs },
      CoreIcons: { main: CoreIconsDocs },
      CoreList: {
        main: CoreListDocs,
        children: {
          CoreListItem: { main: CoreListItemDocs },
          CoreListItemAvatar: { main: CoreListItemAvatarDocs },
          CoreListItemButton: { main: CoreListItemButtonDocs },
          CoreListItemIcon: { main: CoreListItemIconDocs },
          CoreListItemSecondaryAction: {
            main: CoreListItemSecondaryActionDocs,
          },
        },
      },
      CoreTable: { main: CoreTableDocs },
      CoreTooltip: { main: CoreTooltipDocs },
      CoreTypography: {
        main: CoreTypographyDocs,
        children: {
          CoreTypographyBody1: { main: CoreTypographyBody1Docs, order: 0 },
          CoreTypographyBody2: { main: CoreTypographyBody2Docs, order: 1 },
          CoreTypographyButton: { main: CoreTypographyButtonDocs, order: 2 },
          CoreTypographyCaption: {
            main: CoreTypographyCaptionDocs,
            order: 3,
          },
          CoreTypographyOverline: {
            main: CoreTypographyOverlineDocs,
            order: 4,
          },
          CoreTypographySubtitle1: {
            main: CoreTypographySubtitle1Docs,
            order: 5,
          },
          CoreTypographySubtitle2: {
            main: CoreTypographySubtitle2Docs,
            order: 6,
          },
        },
      },
      Headings: {
        children: {
          CoreH1: {
            main: CoreH1Docs,
            order: 0,
          },
          CoreH2: {
            main: CoreH2Docs,
            order: 1,
          },
          CoreH3: {
            main: CoreH3Docs,
            order: 2,
          },
          CoreH4: {
            main: CoreH4Docs,
            order: 3,
          },
          CoreH5: {
            main: CoreH5Docs,
            order: 4,
          },
          CoreH6: {
            main: CoreH6Docs,
            order: 5,
          },
        },
        main: HeadingDocs,
        order: 0,
      },
    },
    main: DataDisplayDocs,
    order: 1,
  },
  Feedback: {
    children: {
      CoreAlert: {
        children: {
          CoreAlert: { main: CoreAlertDocs },
          CoreAlertTitle: { main: CoreAlertTitleDocs },
        },
      },
      CoreBackdrop: { main: CoreBackdropDocs },
      CoreDialog: {
        children: {
          CoreDialog: { main: CoreDialogDocs },
          CoreDialogActions: { main: CoreDialogActionsDocs },
          CoreDialogContent: { main: CoreDialogContentDocs },
          CoreDialogContentText: { main: CoreDialogContentTextDocs },
          CoreDialogTitle: { main: CoreDialogTitleDocs },
        },
      },
      CoreProgress: {
        children: {
          CoreCircularProgress: { main: CoreCircularProgressDocs },
          CoreLinearProgress: { main: CoreLinearProgressDocs },
        },
        main: CoreProgressDocs,
      },
      CoreSkeleton: { main: CoreSkeletonDocs },
      CoreSnackbar: { main: CoreSnackbarDocs },
    },
    main: FeedbackDocs,
    order: 2,
  },
  Overview: {
    children: {},
    main: OverviewDocs,
    order: 0,
  },
};
