import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setClicks } from "../redux/behaviorSlice";

function useClicksTracker() {
  const dispatch = useDispatch();

  useEffect(() => {
    let clickCount = 0;

    // click handler to count all clicks
    const handleClick = () => {
      clickCount++;
      dispatch(setClicks(clickCount));
    };

    // attach listener to the whole document
    document.addEventListener("click", handleClick);

    // cleanup
    return () => {
      document.removeEventListener("click", handleClick);
    };
  }, [dispatch]);
}

export default useClicksTracker;
