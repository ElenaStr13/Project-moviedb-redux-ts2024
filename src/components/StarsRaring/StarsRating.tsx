import React, {FC, PropsWithChildren} from 'react';
import {Rating} from "react-custom-rating-component";

interface IProps extends PropsWithChildren {
    voteAverage:number
}

const StarsRating: FC<IProps> = ({voteAverage}) => {
    let rating: number = 0;
    if (voteAverage<2) {
        rating=1
    }  else if (voteAverage===2 || voteAverage<2.4) {
        rating=1.5
    } else if (voteAverage<4) {
        rating=2
    } else if (voteAverage===4 || voteAverage<4.4) {
        rating = 2.5
    } else if (voteAverage<6) {
        rating=3
    } else if (voteAverage===6 || voteAverage<6.4) {
        rating = 3.5
    } else if (voteAverage<8) {
        rating=4
    } else if (voteAverage===8 || voteAverage<8.4) {
        rating = 4.5
    }else if (voteAverage<=10) {
        rating=5
    }

    return (
        <div>
            <Rating
                defaultValue={rating}
                readOnly
            />
        </div>
    );
};


export {StarsRating};