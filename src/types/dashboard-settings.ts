// File: src/types/dashboard-settings.ts
import{IDashboardList}  from './dashboard-list'
import{IWidgetsPanel} from './widgets-panel'
import{IDatasourceConfig} from './datasource-config'
import{IViewDataSettings} from './view-data-settings'
import{IThemeSettings} from './theme-settings'
import{IFilterOverviewSettings} from './filter-overview-settings'

export interface IDashboardSettings {
  dashboardName?: string | IDashboardList[];
  fontFamily?: string;
  showHeader?: boolean;
  showExport?: boolean;
  showRefresh?: boolean;
  showMoreOption?: boolean;
  enableTheme?: boolean;
  enableFilterOverview?: boolean;
  enableFullScreen?: boolean;
  showDashboardParameter?: boolean;
  enableComment?: boolean;
  showPreviewAs?: boolean;
  showMetrics?: boolean;
  widgetsPanel?: IWidgetsPanel;
  dataSourceConfig?: IDatasourceConfig;
  viewDataSettings?: IViewDataSettings;
  themeSettings?: IThemeSettings;
  filterOverviewSettings?: IFilterOverviewSettings;
  onFavoriteIconClick?: (_event: Event) => void;
  beforeIconRender?: (_event: Event) => void;
  onIconClick?: (_event: Event) => void;
  onInteraction?: (_event: Event) => void;
  beforePublishAs?: (_event: Event) => void;
  beforeDesignerToolbarButtons?: (_event: Event) => void;
  beforeDesignerToolbarIconsRendered?: (_event: Event) => void;
  beforeDatasourceToolbarButtonsRendered?: (_event: Event) => void;
  beforeDatasourceToolbarIconsRendered?: (_event: Event) => void;
  toolbarClick?: (_event: Event) => void;
  saveFilterClick?: (_event: Event) => void;
  saveAsFilterClick?: (_event: Event) => void;
  viewSavedFiltersClick?: (_event: Event) => void;
  beforeSaveViewDialogOpen?: (_event: Event) => void;
  beforeSaveAsViewDialogOpen?: (_event: Event) => void;
  onViewSavedFiltersClick?: (_event: Event) => void;
  }
  