import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const GenSkeleton = ({ genres }) => {
  return Array(genres)
    .fill(0)
    .map((_, i) => (
      <div key={i} className="flex">
        <Skeleton
          width={80}
          height={45}
          borderRadius={10}
          baseColor="rgb(17 24 39 / var(--tw-text-opacity, 1))"
          className="mr-2"
        />
      </div>
    ));
};

export default GenSkeleton;
