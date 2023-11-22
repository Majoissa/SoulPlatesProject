//import Description from "../Description";
import Logo from "./LogoMiddle";

function OurHistory() {
  return (
    <>
      <Logo
        imagen="https://i.postimg.cc/VNFG1xZD/Soul-Plates-Logo-Cropped-Black-PNG.png"
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
            <h1
              style={{ fontFamily: "Montserrat", fontSize: "3rem" }}
              className="soulplates-title-sr"
            >
              Soul Plates
            </h1>
            <p style={{ fontFamily: "Montserrat" }}>
              <br />
              SoulPlates started with a simple yet powerful idea: no individual
              should go hungry or feel abandoned. Our founders, Nurcan, Maria
              Jose, Samuel, Rucci and Amine, driven by personal experiences and
              a shared vision of a more caring world, began by preparing and
              distributing meals in Barcelona. What began as a modest effort
              soon resonated with the community, drawing volunteers and
              supporters from all walks of life.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurHistory;