import Lottie from "lottie-react";
import fireworksAnimation from "../assets/images/fireworks.json";

export default function Fireworks() {
  return (
    <div style={{ width: "300px", height: "250px", margin: "0 auto" }}>
      <Lottie animationData={fireworksAnimation} loop={true} />
    </div>
  );
}
