export type AddLinkType = {
   id: number | undefined;
   link: string;
   description: string;
};

export type AddLinkSchema = {
   isSuccess: boolean,
   isLoading: boolean,
   error?: string;
};
