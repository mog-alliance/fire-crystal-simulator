import { RefinementPlan } from "@/types/refinement";

/**
 * Fire Crystal refinement planner.
 *
 * TODO:
 * Replace temporary calculation with actual Whiteout Survival rules.
 */
export function createRefinementPlan(
  targetFireCrystal: number,
): RefinementPlan {
  // Temporary calculation
  const requiredFireCrystal = targetFireCrystal * 100;

  return {
    targetFireCrystal,
    requiredFireCrystal,
    schedule: [
      {
        date: "This week",
        action: "Perform Super Refinement",
      },
    ],
  };
}