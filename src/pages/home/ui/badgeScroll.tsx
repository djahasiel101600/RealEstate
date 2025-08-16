import badge1 from "@/assets/badges (1).webp";
import badge2 from "@/assets/badges (2).webp";
import badge3 from "@/assets/badges (3).webp";
import badge4 from "@/assets/badges (4).webp";

const badges = [
  badge1,
  badge2,
  badge3,
  badge4,
  badge1,
  badge2,
  badge3,
  badge4,
  badge1,
  badge2,
  badge3,
  badge4,
];

const BadgeScroll = () => {
  return (
    <div className="overflow-hidden py-10">
      <div className="infinite-scroll gap-[67px]">
        {[...badges, ...badges].map((badge, i) => (
          <img key={`a-${i}`} src={badge} className="h-20" alt={`badge-${i}`} />
        ))}
      </div>
    </div>
  );
};

export default BadgeScroll;
