import Header from "@/components/Header";
import PlannerForm from "@/components/PlannerForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-900 p-6">
      <div className="mx-auto max-w-xl">
        <Header />
        <PlannerForm />
      </div>
    </main>
  );
}