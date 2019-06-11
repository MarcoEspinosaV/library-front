export interface IConfirmRemoveStructureLanguage {
  CANCEL: string;
  DELETE: string;
  DELETE_SECTION: string;
  DELETE_SECTION_DESCRIPTION: string;
}

const confirmRemoveStructure: IConfirmRemoveStructureLanguage = {
  CANCEL: 'Cancelar',
  DELETE: 'Eliminar',
  DELETE_SECTION: 'Eliminar sección',
  DELETE_SECTION_DESCRIPTION:
    'Estas a punto de eliminar permanentemente la sección, se eliminarán los niveles contenidos dentro de la misma. ¿Deseas continuar?'
};

export default confirmRemoveStructure;
