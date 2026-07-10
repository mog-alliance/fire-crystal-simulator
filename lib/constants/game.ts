/**
 * Fire Crystal Refinement constants.
 */

/**
 * Super Refinement definition.
 */
export interface SuperRefinementStep {
  /** Step number */
  step: number;

  /** Fire Crystal cost */
  cost: number;

  /** Success rate (0.0 - 1.0) */
  successRate: number;

  /** Refined Fire Crystals gained on success */
  reward: number;
}

/**
 * Super Refinement table.
 *
 * TODO:
 * Fill with actual game data.
 */
export const SUPER_REFINEMENT: SuperRefinementStep[] = [];