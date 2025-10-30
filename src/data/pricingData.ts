export interface PricingPlan {
  id: number;
  title: string;
  price: number; // monthly base price in USD
  features: string[];
}

export const pricingPlans: PricingPlan[] = [
  {
    id: 1,
    title: "Basic",
    price: 19,
    features: [
      "Essential features",
      "Email support",
      "Single user",
    ],
  },
  {
    id: 2,
    title: "Pro",
    price: 49,
    features: [
      "Everything in Basic",
      "Priority support",
      "Up to 5 users",
    ],
  },
  {
    id: 3,
    title: "Business",
    price: 99,
    features: [
      "Everything in Pro",
      "Dedicated manager",
      "Unlimited users",
    ],
  },
];


