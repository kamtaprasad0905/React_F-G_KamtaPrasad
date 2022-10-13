export interface CustomerReviewParams {
  map(arg0: (review: CustomerReviewParams) => JSX.Element): import("react").ReactNode;
  customer_name: string;
  email: string;
  phone: string;
  quality_of_beverage: string;
  quality_of_service: string;
  over_all_dining_experience: string;
  restaurant_clean: string;
  length: any;
}
