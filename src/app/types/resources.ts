export interface resource {
  resourceTitle: string;
  resourceDescription: string;
  resourceType: string;
  resourceTags: string[];
  subscription: boolean;
  referenceMailId:string;
  resourceURL?: string;
  resourceFile?: File | null;
}