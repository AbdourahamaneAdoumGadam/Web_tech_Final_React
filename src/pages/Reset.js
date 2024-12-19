import React, { useState } from "react";

function Reset() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("stevetogui271@gmail.com");
  const [receiverEmail, setReceiverEmail] = useState("");
  const [message, setMessage] = useState("");
  const [emailError, setEmailError] = useState("");

  // Regular expression for validating email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate receiver's email before submission
    if (!validateEmail(receiverEmail)) {
      setEmailError("Invalid email address. Please provide a valid email.");
      return;
    }

    setEmailError("");

    // Craft the password reset message
    const resetMessage = `
      Dear ${name},\n\n
      We received a request to reset your password associated with ${email}.\n
      Please click the link below to reset your password.\n\n
      [Password Reset Link] \n\n
      If you didn't request a password reset, please ignore this message.
    `;

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("to", receiverEmail);
    formData.append("message", resetMessage);

    // Send the email via a service or API
    fetch("https://formsubmit.co/yeshuahamachiah931@gmail.com", {
      method: "POST",
      body: formData,
    })
        .then((response) => {
          if (response.ok) {
            alert("Password reset instructions have been sent!");
            setName("");
            setEmail("");
            setReceiverEmail("");
            setMessage("");
          } else {
            alert("There was an issue sending the reset instructions.");
          }
        })
        .catch((error) => {
          console.error("Error:", error);
          alert("There was an error with the form submission.");
        });
  };

  // Inline styles for the component
  const styles = {
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",
      background: "linear-gradient(45deg, #f8f9fa, #e3e6ea)",
      padding: "20px",
    },
    formCard: {
      width: "100%",
      maxWidth: "500px",
      backgroundColor: "white",
      padding: "30px",
      borderRadius: "8px",
      boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
    },
    heading: {
      textAlign: "center",
      marginBottom: "20px",
      color: "#333",
    },
    label: {
      fontWeight: "bold",
      marginBottom: "5px",
      display: "block",
    },
    input: {
      width: "100%",
      padding: "12px",
      marginBottom: "15px",
      border: "1px solid #ccc",
      borderRadius: "4px",
    },
    textarea: {
      width: "100%",
      padding: "12px",
      border: "1px solid #ccc",
      borderRadius: "4px",
      resize: "none",
    },
    button: {
      width: "100%",
      padding: "12px",
      backgroundColor: "#dc3545",
      color: "white",
      border: "none",
      borderRadius: "4px",
      fontSize: "16px",
      fontWeight: "bold",
      cursor: "pointer",
      transition: "background-color 0.3s ease",
    },
    buttonHover: {
      backgroundColor: "#a71d2a",
    },
    errorMessage: {
      color: "#dc3545",
      fontSize: "14px",
      marginTop: "-10px",
      marginBottom: "15px",
    },
  };

  return (
      <div style={styles.container}>
        <div style={styles.formCard}>
          <h2 style={styles.heading}>RESET MANAGER</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" style={styles.label}>
                Company's Name:
              </label>
              <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={styles.input}
              />
            </div>
            <div>
              <label htmlFor="email" style={styles.label}>
                Your Email:
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={styles.input}
              />
            </div>
            <div>
              <label htmlFor="receiverEmail" style={styles.label}>
                Receiver's Email:
              </label>
              <input
                  type="email"
                  id="receiverEmail"
                  name="receiverEmail"
                  required
                  value={receiverEmail}
                  onChange={(e) => setReceiverEmail(e.target.value)}
                  style={{
                    ...styles.input,
                    borderColor: emailError ? "#dc3545" : "#ccc",
                  }}
              />
              {emailError && <p style={styles.errorMessage}>{emailError}</p>}
            </div>
            <div>
              <label htmlFor="message" style={styles.label}>
                Message:
              </label>
              <textarea
                  id="message"
                  name="message"
                  required
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={styles.textarea}
                  rows="4"
              ></textarea>
            </div>
            <button
                type="submit"
                style={styles.button}
                onMouseOver={(e) =>
                    (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)
                }
                onMouseOut={(e) =>
                    (e.target.style.backgroundColor = styles.button.backgroundColor)
                }
            >
              Reset
            </button>
          </form>
        </div>
      </div>
  );
}

export default Reset;
