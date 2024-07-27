const shimmer =
  'before:absolute before:inset-0 before:-translate-x-full before:animate-[shimmer_2s_infinite] before:bg-gradient-to-r before:from-transparent before:via-white/60 before:to-transparent';

export function CardSkeleton() {
  return (
    <div className={`${shimmer} relative overflow-hidden rounded-xl bg-gray-100 p-2 shadow-sm`}>
      <div className="card-image">
        <div className="w-full h-80 rounded-md bg-gray-200" />
      </div>
      <div className="truncate rounded-xl bg-white px-4 py-2">
        <div className="h-5 w-200 m-1 rounded-md bg-gray-200" />
        <div className="h-5 w-200 m-1 rounded-md bg-gray-200" />
        <div className="h-5 w-200 m-1 rounded-md bg-gray-200" />
        <div className="h-5 w-200 m-1 rounded-md bg-gray-200" />
      </div>
    </div>
  );
}

export function CardsSkeleton() {
  return (
    <div className="grid grid-cols-4 gap-5">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
