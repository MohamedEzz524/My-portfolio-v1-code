import ConfirmationMsg from "../Confirmation/ConfirmationMsg";
import InputType from "../InputType/InputType";
import "./starsRate.css";
import { useState } from "react";

export default function Stars() {
  const starsArray = [1, 2, 3, 4, 5];
  const [activeStars, setActiveStars] = useState(0); // State to track active stars
  const [messageSent, setMessageSent] = useState(false);
  const [name, setName] = useState("");
  const [unique, setUnique] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const uniqueUser = { name: name, id: unique };
    const submission = {
      rating: activeStars,
      date: new Date().toLocaleString(),
    };
    // Check if the user already submitted
    const existingSubmission = localStorage.getItem(JSON.stringify(uniqueUser));
    console.log(existingSubmission);

    if (existingSubmission) {
      alert(`"${name}" has already submitted his feedback.`);
      setName("");
      setUnique("");
      setActiveStars(0);
      return;
    }

    localStorage.setItem(
      JSON.stringify(uniqueUser),
      JSON.stringify(submission)
    );
    setMessageSent(true);
    setTimeout(() => {
      setMessageSent(false);
      setName("");
      setUnique("");
      setActiveStars(0);
    }, 3000);
  };
  return (
    <>
      <form className="" onSubmit={(e) => handleSubmit(e)}>
        <InputType
          type="text"
          placeholder="Enter Your Name"
          name="name"
          value={name}
          setName={setName}
        />
        <InputType
          type="text"
          placeholder="Unique ID"
          name="unique"
          value={unique}
          setName={setUnique}
        />
        <ul className="stars-list">
          {starsArray.map((counter) => {
            return (
              <li
                key={counter}
                className={`star ${counter <= activeStars ? "active" : ""}`}
                onClick={() => setActiveStars(counter)}
              ></li>
            );
          })}
        </ul>
        <p id="rating-text">
          Selected Rating: {activeStars}/{starsArray.length}
        </p>
        <button id="submit-rating">Submit Rating</button>
      </form>
      {messageSent && <ConfirmationMsg message="Thanks for rating" />}
    </>
  );
}
