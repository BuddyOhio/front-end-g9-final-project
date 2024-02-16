import React, { useState, useEffect } from "react";

function BmiCalculator({ weight, height }) {
  const [bmi, setBMI] = useState(null);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (weight && height) {
      const heightInMeters = height / 100; // Convert height from cm to meters
      const bmiValue = weight / (heightInMeters * heightInMeters);
      setBMI(bmiValue.toFixed(0)); // Round BMI value to 1 decimal place
      setStatus(getBMIStatus(bmiValue));
    }
  }, [weight, height]);

  const getBMIStatus = (bmiValue) => {
    if (bmiValue < 18.5) {
      return "Underweight";
    } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
      return "Healthy Weight";
    } else if (bmiValue >= 25 && bmiValue <= 29.9) {
      return "Overweight";
    } else {
      return "Obese";
    }
  };

  const getColor = (status) => {
    switch (status) {
      case "Underweight":
        return "#ff4500"; // Orange
      case "Healthy Weight":
        return "#0eb400"; // Green
      case "Overweight":
        return "#ff8c00"; // Dark Orange
      case "Obese":
        return "#ff0000"; // Red
      default:
        return "#000000"; // Black
    }
  };

  return (
    <div
      className={`bg-[${getColor(
        status
      )}] text-white text-sm px-2 py-1 rounded-lg`}
    >
      <h3>
        BMI: {bmi} | {status}
      </h3>
    </div>
  );
}

export default BmiCalculator;
