import { CardsSkeleton } from "@/components/skeletons";

export default function loading() {
  return (
    <div className="mt-6 grid gap-6 sm:grid-cols-2">
      <CardsSkeleton />
    </div>
  );
}
