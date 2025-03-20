import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setScrollDepth } from "../redux/behaviorSlice";

function useScrollTracker() {
  const dispatch = useDispatch();

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? scrollTop / docHeight : 0;

      dispatch(setScrollDepth(parseFloat(scrollPercent.toFixed(2))));
    };

    // listen to scroll
    window.addEventListener("scroll", handleScroll);

    // initial trigger
    handleScroll();

    // cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [dispatch]);
}

export default useScrollTracker;
