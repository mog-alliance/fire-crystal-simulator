import { RefinementPlan } from "@/types/refinement";

interface Props {
  plan: RefinementPlan;
}

export default function ResultCard({ plan }: Props) {
  return (
    <div className="mt-6 rounded-xl bg-gray-100 p-4 text-gray-900">
      <h3 className="mb-3 text-lg font-semibold">
        計算結果
      </h3>

      <p>
        目標精錬火晶数：
        <strong>{plan.targetFireCrystal}</strong>
      </p>

      <p>
        必要火晶数（仮）：
        <strong>{plan.requiredFireCrystal}</strong>
      </p>

      <div className="mt-4">
        <h4 className="font-semibold">
          推奨スケジュール
        </h4>

        {plan.schedule.map((item, index) => (
          <div key={index} className="mt-2">
            {item.date}：
            {item.action}
          </div>
        ))}
      </div>
    </div>
  );
}