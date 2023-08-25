export type CreateTopicType = {
   id: number | undefined;
   name: string;
   description: string;
};

export type CreateTopicSchema = {
   isSuccess: boolean;
   isLoading: boolean;
   error?: string;
};
