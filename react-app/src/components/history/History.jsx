//import Description from "../Description";
import Logo from "./LogoMiddle";

function OurHistory() {
  return (
    <>
      <Logo
        imagen="https://i.postimg.cc/h49L83XP/Soul-Plates-Logo-Cropped-3-Centered.png"
        text=""
        descripImg="Soul Plates"
      />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "top",
          /// height: "100vh", this code can be deleted im just figuring out how frontend works :)
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            padding: "5px",
            textAlign: "center",
            fontFamily: "Montserrat, sans-serif",
            fontWeight: "bold",
          }}
        >
          <div>
            <p>
              <h3>Lorem Ipsum:</h3> 2015
              <br />
              <strong>PlaceHolder Text:</strong> To empower and assist migrants
              throughout Barcelona by providing essential support services,
              fostering community integration and mutual understanding. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
              tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
          <p>
            <h3>Lorem Ipsum:</h3> 2015
            <br />
            <strong>Place Holder Text:</strong> To empower and assist migrants
            throughout Barcelona by providing essential support services,
            fostering community integration and mutual understanding. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
          <h2>Founding Story</h2>
          <p>
            Soul Plates was founded in 2015 by a group of passionate individuals
            in Barcelona, including social workers, lawyers, and community
            leaders... Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </>
  );
}

export default OurHistory;
