"use client";

import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { FaCloudUploadAlt, FaCheckCircle } from "react-icons/fa";
import Navbar from "../component/Navbar";

export default function Register() {
  const [step, setStep] = useState(1);
  const [success, setSuccess] = useState<boolean>(false);

  const handleNext = () => {
    const form = document.querySelector("form");
  
    // Ensure the form exists before calling checkValidity
    if (form && !form.checkValidity()) {
      form.reportValidity();
    } else {
      setStep((prev) => (prev < 4 ? prev + 1 : prev));
    }
  };
  

  const handlePrev = () => setStep((prev) => (prev > 1 ? prev - 1 : prev));

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent form submission
    setSuccess(true);
    alert("Registration Successful!"); // Pop-up message on successful registration
  };
  

  return (
    <main>
      <Navbar />
      <div className="container my-5">
        {/* Title */}
        <h2 className="py-30 px-6 bg-white text-center">Alumni Registration</h2>

        {/* Step Progress Tracker */}
        <div className="d-flex justify-content-between align-items-center position-relative mb-5">
          {["Basic Info", "Academic Details", "Professional Info", "Documents"].map((label, index) => (
            <div key={index} className="text-center position-relative flex-grow-1">
              {/* Progress Line */}
              {index !== 0 && (
                <div className={`position-absolute top-50 start-0 w-100 ${step > index ? "bg-primary" : "bg-secondary"}`} style={{ height: "4px", transform: "translateY(-50%)" }}></div>
              )}

              {/* Step Icon */}
              <div className={`rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 ${step > index ? "bg-primary text-white" : "bg-light border"}`} style={{ width: "40px", height: "40px", zIndex: 1 }}>
                {step > index + 1 ? <FaCheckCircle className="text-white" /> : index + 1}
              </div>
              <p className="small">{label}</p>
            </div>
          ))}
        </div>

        {/* Registration Form */}
        <form className="needs-validation" noValidate onSubmit={handleSubmit}>
          {/* Step 1: Basic Information */}
          {step === 1 && (
            <div className="form-section active">
              <h4 className="mb-4">Basic Information</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">First Name*</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Last Name*</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Email Address*</label>
                  <input type="email" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Phone Number*</label>
                  <input type="tel" className="form-control" required />
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <div></div>
                <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
              </div>
            </div>
          )}

          {/* Step 2: Academic Details */}
          {step === 2 && (
            <div className="form-section active">
              <h4 className="mb-4">Secondary School</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Graduation Year*</label>
                  <select className="form-select" required>
                    {[...Array(50)].map((_, i) => (
                      <option key={i}>{new Date().getFullYear() - i}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Department*</label>
                  <select className="form-select" required>
                    <option value="">Select Department</option>
                    <option value="art">Art</option>
                    <option value="commercial">Commercial</option>
                    <option value="science">Science</option>
                  </select>
                </div>
                <h4>Tertiary Details</h4>
                <div className="col-md-12">
                <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">School Attended*</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Course of Study*</label>
                  <input type="text" className="form-control" required />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Graduation Year*</label>
                  <select className="form-select" required>
                    {[...Array(50)].map((_, i) => (
                      <option key={i}>{new Date().getFullYear() - i}</option>
                    ))}
                  </select>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Faculty*</label>
                  <input type="text" className="form-control" required />
                </div>
              </div>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>Previous</button>
                <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
              </div>
            </div>
          )}

          {/* Step 3: Professional Info */}
          {step === 3 && (
            <div className="form-section active">
              <h4 className="mb-4">Professional Information</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">Current Company</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="col-md-6">
                  <label className="form-label">Job Title</label>
                  <input type="text" className="form-control" />
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>Previous</button>
                <button type="button" className="btn btn-primary" onClick={handleNext}>Next</button>
              </div>
            </div>
          )}

          {/* Step 4: Document Upload */}
          {step === 4 && (
            <div className="form-section active">
              <h4 className="mb-4">Document Upload</h4>
              <div className="row g-3">
                <div className="col-md-6">
                  <label className="form-label">ID Proof*</label>
                  <div className="file-upload border p-3 text-center" onClick={() => document.getElementById("idProof")?.click()}>
                    <FaCloudUploadAlt className="text-grey-600 text-5xl mb-3 mx-auto" />
                    <p>Click or drag to upload ID proof</p>
                    <input type="file" id="idProof" className="d-none" accept="image/*,.pdf" required />
                  </div>
                </div>
                <div className="col-md-6">
                  <label className="form-label">Degree Certificate*</label>
                  <div className="file-upload border p-3 text-center" onClick={() => document.getElementById("degreeCertificate")?.click()}>
                    <FaCloudUploadAlt className="text-grey-600 text-5xl mb-3 mx-auto" />
                    <p>Click or drag to upload degree certificate</p>
                    <input type="file" id="degreeCertificate" className="d-none" accept="image/*,.pdf" required />
                  </div>
                </div>
              </div>
              <div className="mt-4 d-flex justify-content-between">
                <button type="button" className="btn btn-secondary" onClick={handlePrev}>Previous</button>
                <button type="submit" className="btn btn-success">Submit Registration</button>
              </div>
            </div>
          )}
        </form>
      </div>
    </main>
  );
}
