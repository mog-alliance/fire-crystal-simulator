"use client";

import { useState } from "react";
import { createRefinementPlan } from "@/lib/planner/refinementPlanner";
import { RefinementPlan } from "@/types/refinement";
import ResultCard from "./ResultCard";

export default function PlannerForm() {
  const [target, setTarget] = useState("");
  const [plan, setPlan] = useState<RefinementPlan | null>(null);

  const handleCalculate = () => {
    const value = Number(target);

    if (!value || value <= 0) {
      return;
    }

    const result = createRefinementPlan(value);
    setPlan(result);
  };

  return (
    <section className="rounded-xl border border-gray-700 bg-gray-800 p-6">
      <h2 className="mb-4 text-xl font-semibold">
        精錬プラン作成
      </h2>

      <label className="block mb-2">
        目標精錬火晶数
      </label>

      <input
        type="number"
        value={target}
        onChange={(e) => setTarget(e.target.value)}
        className="mb-4 w-full rounded border p-2"
        placeholder="例：100"
      />

      <button
        onClick={handleCalculate}
        className="rounded bg-black px-4 py-2 text-white"
      >
        計算する
      </button>

      {plan && <ResultCard plan={plan} />}
    </section>
  );
}