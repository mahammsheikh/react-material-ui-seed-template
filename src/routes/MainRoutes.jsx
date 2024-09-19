import { lazy } from "react";

// project imports
import AuthGuard from "utils/route-guard/AuthGuard";
import MainLayout from "layout/MainLayout";
import Loadable from "ui-component/Loadable";

// sample page routing
const SamplePage = Loadable(lazy(() => import("views/sample-page")));

// map routing
const AppMap = Loadable(lazy(() => import('views/application/map')));

// form component routing
const FrmComponentsTextfield = Loadable(lazy(() => import('views/forms/components/TextField')));
const FrmComponentsButton = Loadable(lazy(() => import('views/forms/components/Button')));
const FrmComponentsCheckbox = Loadable(lazy(() => import('views/forms/components/Checkbox')));
const FrmComponentsRadio = Loadable(lazy(() => import('views/forms/components/Radio')));
const FrmComponentsSwitch = Loadable(lazy(() => import('views/forms/components/Switch')));
const FrmComponentsAutoComplete = Loadable(lazy(() => import('views/forms/components/AutoComplete')));
const FrmComponentsSlider = Loadable(lazy(() => import('views/forms/components/Slider')));
const FrmComponentsDateTime = Loadable(lazy(() => import('views/forms/components/DateTime')));

// forms plugins layout
const FrmLayoutLayout = Loadable(lazy(() => import('views/forms/layouts/Layouts')));
const FrmLayoutMultiColumnForms = Loadable(lazy(() => import('views/forms/layouts/MultiColumnForms')));
const FrmLayoutActionBar = Loadable(lazy(() => import('views/forms/layouts/ActionBar')));
const FrmLayoutStickyActionBar = Loadable(lazy(() => import('views/forms/layouts/StickyActionBar')));

// forms plugins routing
const FrmAutocomplete = Loadable(lazy(() => import('views/forms/plugins/AutoComplete')));
const FrmMask = Loadable(lazy(() => import('views/forms/plugins/Mask')));
const FrmClipboard = Loadable(lazy(() => import('views/forms/plugins/Clipboard')));
const FrmRecaptcha = Loadable(lazy(() => import('views/forms/plugins/Recaptcha')));
const FrmWysiwugEditor = Loadable(lazy(() => import('views/forms/plugins/WysiwugEditor')));
const FrmModal = Loadable(lazy(() => import('views/forms/plugins/Modal')));
const FrmTooltip = Loadable(lazy(() => import('views/forms/plugins/Tooltip')));
const FrmDropzone = Loadable(lazy(() => import('views/forms/plugins/Dropzone')));

// table routing
const TableBasic = Loadable(lazy(() => import('views/forms/tables/TableBasic')));
const TableDense = Loadable(lazy(() => import('views/forms/tables/TableDense')));
const TableEnhanced = Loadable(lazy(() => import('views/forms/tables/TableEnhanced')));
const TableData = Loadable(lazy(() => import('views/forms/tables/TableData')));
const TableCustomized = Loadable(lazy(() => import('views/forms/tables/TablesCustomized')));
const TableStickyHead = Loadable(lazy(() => import('views/forms/tables/TableStickyHead')));
const TableCollapsible = Loadable(lazy(() => import('views/forms/tables/TableCollapsible')));

// data-grid routing
const DataGridBasic = Loadable(lazy(() => import('views/forms/data-grid/DataGridBasic')));
const DataGridInlineEditing = Loadable(lazy(() => import('views/forms/data-grid/InLineEditing')));
const DataGridColumnGrouping = Loadable(lazy(() => import('views/forms/data-grid/ColumnGroups')));
const DataGridSaveRestoreState = Loadable(lazy(() => import('views/forms/data-grid/SaveRestoreState')));
const DataGridQuickFilter = Loadable(lazy(() => import('views/forms/data-grid/QuickFilter')));
const DataGridColumnVisibility = Loadable(lazy(() => import('views/forms/data-grid/ColumnVisibility')));
const DataGridColumnVirtualization = Loadable(lazy(() => import('views/forms/data-grid/ColumnVirtualization')));
const DataGridColumnMenu = Loadable(lazy(() => import('views/forms/data-grid/ColumnMenu')));

// forms validation
const FrmFormsValidation = Loadable(lazy(() => import('views/forms/forms-validation')));
const FrmFormsWizard = Loadable(lazy(() => import('views/forms/forms-wizard')));

// chart routing
const ChartApexchart = Loadable(lazy(() => import('views/forms/chart/Apexchart')));
const OrgChartPage = Loadable(lazy(() => import('views/forms/chart/OrgChart')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
  path: "/",
  element: (
    <AuthGuard>
      <MainLayout />
    </AuthGuard>
  ),
  children: [
    {
      path: "/",
      element: <SamplePage />,
    },
    {
        path: "/sample-page",
        element: <SamplePage />,
      },
    {
      path: "/components/text-field",
      element: <FrmComponentsTextfield />,
    },
    {
      path: "/components/button",
      element: <FrmComponentsButton />,
    },
    {
      path: "/components/checkbox",
      element: <FrmComponentsCheckbox />,
    },
    {
      path: "/components/radio",
      element: <FrmComponentsRadio />,
    },
    {
      path: "/components/autocomplete",
      element: <FrmComponentsAutoComplete />,
    },
    {
      path: "/components/slider",
      element: <FrmComponentsSlider />,
    },
    {
      path: "/components/switch",
      element: <FrmComponentsSwitch />,
    },
    {
      path: "/components/date-time",
      element: <FrmComponentsDateTime />,
    },
    {
      path: "/forms/frm-autocomplete",
      element: <FrmAutocomplete />,
    },
    {
      path: "/forms/frm-mask",
      element: <FrmMask />,
    },
    {
      path: "/forms/frm-clipboard",
      element: <FrmClipboard />,
    },
    {
      path: "/forms/frm-recaptcha",
      element: <FrmRecaptcha />,
    },
    {
      path: "/forms/frm-wysiwug",
      element: <FrmWysiwugEditor />,
    },
    {
        path: '/forms/frm-modal',
        element: <FrmModal />
    },
    {
        path: '/forms/frm-tooltip',
        element: <FrmTooltip />
    },
    {
        path: '/forms/frm-dropzone',
        element: <FrmDropzone />
    },
    {
        path: '/forms/layouts/layouts',
        element: <FrmLayoutLayout />
    },
    {
        path: '/forms/layouts/multi-column-forms',
        element: <FrmLayoutMultiColumnForms />
    },
    {
        path: '/forms/layouts/action-bar',
        element: <FrmLayoutActionBar />
    },
    {
        path: '/forms/layouts/sticky-action-bar',
        element: <FrmLayoutStickyActionBar />
    },
    {
        path: '/tables/tbl-basic',
        element: <TableBasic />
    },
    {
        path: '/tables/tbl-dense',
        element: <TableDense />
    },
    {
        path: '/tables/tbl-enhanced',
        element: <TableEnhanced />
    },
    {
        path: '/tables/tbl-data',
        element: <TableData />
    },
    {
        path: '/tables/tbl-customized',
        element: <TableCustomized />
    },
    {
        path: '/tables/tbl-sticky-header',
        element: <TableStickyHead />
    },
    {
        path: '/tables/tbl-collapse',
        element: <TableCollapsible />
    },
    {
        path: '/data-grid/data-grid-basic',
        element: <DataGridBasic />
    },
    {
        path: '/data-grid/data-grid-inline-editing',
        element: <DataGridInlineEditing />
    },
    {
        path: '/data-grid/data-grid-column-groups',
        element: <DataGridColumnGrouping />
    },
    {
        path: '/data-grid/data-grid-save-restore',
        element: <DataGridSaveRestoreState />
    },
    {
        path: '/data-grid/data-grid-quick-filter',
        element: <DataGridQuickFilter />
    },
    {
        path: '/data-grid/data-grid-column-visibility',
        element: <DataGridColumnVisibility />
    },
    {
        path: '/data-grid/data-grid-column-virtualization',
        element: <DataGridColumnVirtualization />
    },
    {
        path: '/data-grid/data-grid-column-menu',
        element: <DataGridColumnMenu />
    },
    {
        path: 'forms/charts/apexchart',
        element: <ChartApexchart />
    },
    {
        path: '/forms/charts/orgchart',
        element: <OrgChartPage />
    },
    {
        path: '/forms/forms-validation',
        element: <FrmFormsValidation />
    },
    {
        path: '/forms/forms-wizard',
        element: <FrmFormsWizard />
    },
    {
        path: '/forms/map',
        element: <AppMap />
    },






  ],
};

export default MainRoutes;
