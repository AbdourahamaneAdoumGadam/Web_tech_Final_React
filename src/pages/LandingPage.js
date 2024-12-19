import React from "react";
import { Link } from "react-router-dom";

function LandingPage() {
    const styles = {
        container: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
            height: "100vh",
            margin: "0",
            padding: "0",
            background: "linear-gradient(to bottom, #bea1bd, #d5c0d1)",
            fontFamily: "'Arial', sans-serif",
        },
        header: {
            padding: "20px",
            width: "100%",
            textAlign: "center",
            backgroundColor: "#92638f",
            color: "#fff",
            fontSize: "1.5rem",
            fontWeight: "bold",
        },
        mainContent: {
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            background: "#f7f0f5",
            padding: "40px 20px",
            borderRadius: "20px",
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)",
            maxWidth: "600px",
            width: "90%",
            marginTop: "80px",
        },
        title: {
            fontSize: "2rem",
            fontWeight: "bold",
            color: "#4c3d4e",
            marginBottom: "20px",
        },
        description: {
            fontSize: "1.2rem",
            color: "#6d5c6e",
            marginBottom: "30px",
            lineHeight: "1.6",
        },
        buttonContainer: {
            display: "flex",
            justifyContent: "center",
            gap: "20px",
        },
        button: {
            padding: "10px 25px",
            fontSize: "1rem",
            fontWeight: "bold",
            borderRadius: "30px",
            border: "none",
            cursor: "pointer",
            textDecoration: "none",
            transition: "all 0.3s ease", // Smooth animation for hover
        },
        buttonHover: {
            transform: "scale(1.1)", // Slightly increase the size
            boxShadow: "0 8px 15px rgba(0, 0, 0, 0.2)", // Add shadow effect
        },
        loginButton: {
            backgroundColor: "#92638f",
            color: "#fff",
        },
        signUpButton: {
            backgroundColor: "#a583a4",
            color: "#fff",
        },
        features: {
            display: "flex",
            justifyContent: "space-evenly",
            width: "100%",
            padding: "40px 20px",
            backgroundColor: "#f2ebf3",
            marginTop: "100px", // Space between the container and features section
        },
        featureCard: {
            flex: "1",
            margin: "0 10px",
            textAlign: "center",
            padding: "20px",
            backgroundColor: "#fff",
            borderRadius: "10px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        },
        featureIcon: {
            fontSize: "2.5rem",
            marginBottom: "10px",
            color: "#92638f",
        },
        featureHeading: {
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#4c3d4e",
            marginBottom: "10px",
        },
        featureText: {
            fontSize: "1rem",
            color: "#6d5c6e",
            lineHeight: "1.6",
        },
        footer: {
            padding: "10px",
            textAlign: "center",
            backgroundColor: "#92638f",
            color: "#fff",
            width: "100%",
        },
    };

    return (
        <div style={styles.container}>
            {/* Header */}
            <div style={styles.header}>Task Management System</div>

            {/* Main Content */}
            <div style={styles.mainContent}>
                <h1 style={styles.title}>Welcome to the Task Management System</h1>
                <p style={styles.description}>
                    Manage your tasks, collaborate with your team, and boost your productivity—all from one platform. Get started today!
                </p>
                <div style={styles.buttonContainer}>
                    <Link
                        to="/login"
                        style={{
                            ...styles.button,
                            ...styles.loginButton,
                        }}
                        onMouseOver={(e) =>
                            Object.assign(e.target.style, styles.buttonHover)
                        }
                        onMouseOut={(e) =>
                            Object.assign(e.target.style, {
                                transform: "scale(1)",
                                boxShadow: "none",
                            })
                        }
                    >
                        Login
                    </Link>
                    <Link
                        to="/signup"
                        style={{
                            ...styles.button,
                            ...styles.signUpButton,
                        }}
                        onMouseOver={(e) =>
                            Object.assign(e.target.style, styles.buttonHover)
                        }
                        onMouseOut={(e) =>
                            Object.assign(e.target.style, {
                                transform: "scale(1)",
                                boxShadow: "none",
                            })
                        }
                    >
                        Sign Up
                    </Link>
                </div>
            </div>

            {/* Features Section */}
            <section style={styles.features}>
                <div style={styles.featureCard}>
                    <div style={styles.featureIcon}>🔒</div>
                    <h2 style={styles.featureHeading}>Secure</h2>
                    <p style={styles.featureText}>
                        We prioritize your security, ensuring all data is encrypted and safe.
                    </p>
                </div>
                <div style={styles.featureCard}>
                    <div style={styles.featureIcon}>⚡</div>
                    <h2 style={styles.featureHeading}>Fast</h2>
                    <p style={styles.featureText}>
                        Experience blazing-fast performance for all your tasks.
                    </p>
                </div>
                <div style={styles.featureCard}>
                    <div style={styles.featureIcon}>💼</div>
                    <h2 style={styles.featureHeading}>Efficient</h2>
                    <p style={styles.featureText}>
                        Manage everything seamlessly with our efficient tools.
                    </p>
                </div>
            </section>

            {/* Footer */}
            <div style={styles.footer}>
              By GAdam © 2024 Task Management System. All rights reserved.
            </div>
        </div>
    );
}

export default LandingPage;
