export interface RefinementPlan {
  targetFireCrystal: number;
  requiredFireCrystal: number;
  schedule: RefinementSchedule[];
}

export interface RefinementSchedule {
  date: string;
  action: string;
}