import { RatingIcon } from "./rating-icon";

interface RatingProps {
    rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
    const completeStars = Math.floor(rating);
    const empyStar = rating % 1;
    const stars = new Array(5).fill(0).map((_, i) => i);
    return (
        <div className="flex flex-nowrap gap-2">
            {stars.map((index) => (
                <>
                    {index < completeStars && (
                        <RatingIcon key={index} percentage={"100%"} className="text-amber-400" />
                    )}
                    {index === completeStars && empyStar > 0 && (
                        <RatingIcon
                            key={index}
                            percentage={`${empyStar * 100}%`}
                            className="text-amber-400"
                        />
                    )}
                    {index > completeStars && <RatingIcon key={index} percentage={"0%"} />}
                </>
            ))}
        </div>
    );
};
