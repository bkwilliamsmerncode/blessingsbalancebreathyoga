import React from "react";
import "./YogaWaiverFormContent.css";

const YogaWaiverFormContent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for submitting the form!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Yoga Waiver 2024</h2>
      <h3>Blessings Balance Breath Yoga (Dr. Donna Jagielski)</h3>
      <h4>Yoga Release And Waiver Of Liability</h4>
      <p>
        Please read carefully and complete the form below. By signing this
        waiver, you acknowledge and agree to the following:
      </p>

      {/* Waiver Content */}
      <div className="waiver-content">
        <p>
          <strong>1.</strong> I am participating in yoga classes, health
          programs, workshops, and/or other wellness, bodywork, therapy,
          exercise, and healing arts activities (collectively, the “Activities”)
          offered by __________ (the “Teacher”). The Activities may be offered
          in the physical location of the studio, or some other location
          designated by the teacher or offered online via videos, television,
          podcast, apps, or other digital media or platforms. All such
          offerings are part of the definition of Activities.
        </p>
        <p>
          <strong>2.</strong> I recognize that I must be in adequate physical
          and mental health to participate in the Activities. I understand that
          the Activities may require intense physical exertion, and I represent
          and warrant that I am physically fit enough to participate and that I
          have no medical condition which would prevent my full participation
          in the Activities. If I have consulted with a physician, I have taken
          their advice into account. I understand that the Teacher reserves the
          right to refuse my participation in any Activity on medical, fitness,
          or any other grounds.
        </p>
        <p>
          <strong>3.</strong> I am aware that my participation in the Activities
          could result in high blood pressure, fainting, heartbeat disorders,
          physical injury, heart attack, or stroke and may aggravate
          pre-existing injuries. I understand my physical limitations, and I am
          sufficiently self-aware to stop or modify my participation in any
          Activity before I become injured or aggravate a pre-existing injury.
        </p>
        <p>
          <strong>4.</strong> In consideration of being permitted to
          participate, I agree to assume full responsibility for any risks,
          injuries, or damages that I might incur, including those which may
          result from the negligence of the Teacher.
        </p>
        <p>
          <strong>5.</strong> I knowingly, voluntarily, and expressly waive any
          “Claim” I may have against the Teacher or their employees. “Claim”
          includes but is not limited to any liabilities, claims, expenses,
          legal actions, and rights of actions for damages, personal injury,
          mental suffering, distress, or death.
        </p>
        <p>
          <strong>6.</strong> I forever release and covenant not to sue any
          Released Party for any Claim caused by negligence or other acts of
          any Released Party.
        </p>
        <p>
          <strong>7.</strong> I understand that the Teacher may photograph or
          record Activities and use these on their website or social media. I
          consent to the use of my image in such materials.
        </p>
      </div>

      {/* Input Fields */}
      <label htmlFor="name">Name</label>
      <input type="text" id="name" name="name" placeholder="Full Name" required />

      <label htmlFor="address">Street Address</label>
      <input
        type="text"
        id="address"
        name="address"
        placeholder="Street Address"
        required
      />

      <label htmlFor="cityStateZip">City, State & Zip Code</label>
      <input
        type="text"
        id="cityStateZip"
        name="cityStateZip"
        placeholder="City, State & Zip Code"
        required
      />

      <label htmlFor="phone">Phone Number</label>
      <input
        type="tel"
        id="phone"
        name="phone"
        placeholder="Phone Number"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        placeholder="Email Address"
        required
      />

      {/* Agreement Checkbox */}
      <div className="checkbox-group">
        <input type="checkbox" id="agree" name="agree" required />
        <label htmlFor="agree">
          I acknowledge that I have carefully read this agreement and fully
          understand its contents. I voluntarily and knowingly agree to the
          terms and conditions stated herein.
        </label>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default YogaWaiverFormContent;