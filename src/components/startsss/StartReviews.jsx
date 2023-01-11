import { Starss } from "./styleStartReviews";

const StartReviews = ({ number }) => {
  const stars = Array(5).fill(0);
  let flagStart = number;
  return (
    <>
      {stars.map((_, z) => {
        if (flagStart === 0) {
          return <Starss flag={"false"} key={z} />;
        } else {
          --flagStart;
          return <Starss flag={"true"} key={z} />;
        }
      })}
    </>
  );
};

export default StartReviews;
