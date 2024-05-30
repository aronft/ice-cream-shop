import { getRandomUUID } from "@/lib/utils/randomuuid";
import { RatingIcon } from "./rating-icon";
import { Fragment } from "react";

interface RatingProps {
    rating: number;
}

export const Rating = ({ rating }: RatingProps) => {
    const completeStars = Math.floor(rating);
    const emptyStars = rating % 1;
    const stars = new Array(5).fill(0).map((_, i) => ({ index: i, id: getRandomUUID() }));
    return (
        <div className="flex flex-wrap gap-2">
            {stars.map(({ index, id }) => (
                <Fragment key={id}>
                    {index < completeStars && (
                        <RatingIcon key={id} percentage={"100%"} className="text-amber-400" />
                    )}
                    {index === completeStars && emptyStars > 0 && (
                        <RatingIcon
                            key={id}
                            percentage={`${emptyStars * 100}%`}
                            className="text-amber-400"
                        />
                    )}
                    {index === completeStars && emptyStars === 0 && (
                        <RatingIcon key={id} percentage={"0%"} />
                    )}
                    {index > completeStars && <RatingIcon key={id} percentage={"0%"} />}
                </Fragment>
            ))}
        </div>
    );
};
