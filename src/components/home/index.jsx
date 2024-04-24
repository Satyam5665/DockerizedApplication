import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/authContext";

const Home = () => {
  const { currentUser } = useAuth();
  const [showOtherSite, setShowOtherSite] = useState(false);

  const handleClick = () => {
    setShowOtherSite(true);
  };

  useEffect(() => {
    handleClick();
  }, []);

  return (
    <div className="text-2xl font-bold pt-14">
      Hello{" "}
      {currentUser.displayName ? currentUser.displayName : currentUser.email},
      you are now logged in.
      {showOtherSite && (
        <iframe
          title="other-site"
          src="https://hopechain.netlify.app/"
          style={{ width: "100%", height: "700px", border: "none" }}
        />
      )}
    </div>
  );
};

export default Home;
