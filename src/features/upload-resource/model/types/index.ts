export type UploadResourceType = {
  resource_file: File | null;
  resource_type: 'presentation ' | 'video' | 'lecture' | any;
};
