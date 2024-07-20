export interface resource {
  resourceTitle: string;
  resourceDescription: string;
  resourceType: string;
  resourceTags: string[];
  resourcePaid: boolean;
  referenceMailId:string;
  resourceLink?: string;
  resourceFile?: File | null;
}