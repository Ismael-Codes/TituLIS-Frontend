
export const localizedTextsMap = {

  // Density selector toolbar button text
  toolbarDensity: 'Densidad',
  toolbarDensityLabel: 'Densidad',
  toolbarDensityCompact: 'Compacto',
  toolbarDensityStandard: 'Estándar',
  toolbarDensityComfortable: 'Amplio',

  // Columns selector toolbar button text
  toolbarColumns: 'Columnas',
  toolbarColumnsLabel: 'Seleccionar Columnas',

  // Filters toolbar button text
  toolbarFilters: 'Filtros',
  toolbarFiltersLabel: 'Mostrar filtros',
  toolbarFiltersTooltipHide: 'Ocultar filtros',
  toolbarFiltersTooltipShow: 'Mostrar filtros',
  toolbarFiltersTooltipActive: (count) =>
    count !== 1 ? `${count} active filters` : `${count} active filter`,

  // Quick filter toolbar field
  toolbarQuickFilterPlaceholder: 'Buscar…',
  toolbarQuickFilterLabel: 'Buscar',
  toolbarQuickFilterDeleteIconLabel: 'Limpiar',

  // Export selector toolbar button text
  toolbarExport: 'Exportar',
  toolbarExportLabel: 'Exportar',
  toolbarExportCSV: 'Descargar como CSV',
  toolbarExportPrint: 'Imprimir',

  // Columns panel text
  columnsPanelTextFieldLabel: 'Buscar columna',
  columnsPanelTextFieldPlaceholder: 'Columna..',
  columnsPanelDragIconLabel: 'Reordenar columna',
  columnsPanelShowAllButton: 'Mostrar todo',
  columnsPanelHideAllButton: 'Ocultar todo',

  // Filter operators text
  filterOperatorContains: 'contenga',
  filterOperatorEquals: 'igual',
  filterOperatorStartsWith: 'empezar con',
  filterOperatorEndsWith: 'terminar con',
  filterOperatorIs: 'es',
  filterOperatorNot: 'no es',
  filterOperatorIsEmpty: 'está vació',
  filterOperatorIsNotEmpty: 'no está vació',
  filterOperatorIsAnyOf: 'es cualquiera de', 

};