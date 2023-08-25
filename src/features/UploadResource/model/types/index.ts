export type UploadResourceType = {
   id: number | undefined;
   dataUpload: FormData;
};

export type UploadResourceSchema = {
   isSuccess: boolean,
   isLoading: boolean,
   error?: string;
};
