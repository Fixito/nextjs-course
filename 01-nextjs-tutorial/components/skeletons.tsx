export function CardSkeleton() {
  return (
    <div className="grid gap-4">
      <div className="skeleton h-48 w-full"></div>
      <div className="skeleton h-6 w-28"></div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}
