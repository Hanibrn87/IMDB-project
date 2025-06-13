import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const CardSkeleton = ({ cards }) => {
  return Array(cards)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="w-[310px] h-[498px] bg-gray-950 bg-opacity-35 rounded-3xl px-3 mb-5 flex flex-col gap-3 hover:shadow-[4px_4px_50px_1px_rgba(0,0,0,0.2)] pt-2">
        <Skeleton
          width={60}
          height={30}
          borderRadius={8}
          baseColor="rgb(3 7 18 / var(--tw-bg-opacity, 1))"
          className="relative top-3 left-3 z-10"
        />
        <Skeleton
          width={285}
          height={406}
          borderRadius={20}
          className="relative bottom-12"
        />
        <div className="relative bottom-10">
          <Skeleton width={285} height={15} borderRadius={20} />
          <Skeleton width={150} height={15} borderRadius={20} />
        </div>
      </div>
    ));
};

export default CardSkeleton;
