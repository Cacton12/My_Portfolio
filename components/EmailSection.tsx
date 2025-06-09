import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  // Include both user_name/user_email and name/email in state
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    // Keep name & user_name, email & user_email in sync for EmailJS
    if (name === "user_name") {
      setFormData((prev) => ({
        ...prev,
        user_name: value,
        name: value,
      }));
    } else if (name === "user_email") {
      setFormData((prev) => ({
        ...prev,
        user_email: value,
        email: value,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !formData.user_name ||
      !formData.user_email ||
      !formData.message
    ) {
      setStatus("Please fill in all fields.");
      return;
    }

    setLoading(true);
    setStatus(null);

    // Send all needed parameters for the EmailJS template
    emailjs
      .send(
        "service_v36rwvt",
        "template_idwyxq9",
        {
          user_name: formData.user_name,
          user_email: formData.user_email,
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "0P9UjGILVZwFA62iQ"
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({
          user_name: "",
          user_email: "",
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        setStatus("Failed to send message. Please try again.");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-gray-900 p-8 rounded-lg shadow-lg space-y-6 text-gray-300"
      noValidate
    >
      <h2 className="text-2xl font-semibold text-center text-white">
        Send Me A Message
      </h2>

      <label className="block">
        <span className="text-gray-400 font-medium mb-1 block">Full Name</span>
        <input
          type="text"
          name="user_name"
          value={formData.user_name}
          onChange={handleChange}
          className="w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="your Full Name"
          required
        />
      </label>

      <label className="block">
        <span className="text-gray-400 font-medium mb-1 block">Email</span>
        <input
          type="email"
          name="user_email"
          value={formData.user_email}
          onChange={handleChange}
          className="w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="you@example.com"
          required
        />
      </label>

      <label className="block">
        <span className="text-gray-400 font-medium mb-1 block">Message</span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={6}
          className="w-full rounded border border-gray-700 bg-gray-800 px-4 py-3 text-gray-200 placeholder-gray-500 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          placeholder="Write your message here..."
          required
        />
      </label>

      <button
        type="submit"
        disabled={loading}
        className={`w-full bg-blue-600 text-white font-semibold py-3 rounded hover:bg-blue-700 focus:outline-none focus:ring-4 focus:ring-blue-400 transition ${
          loading ? "opacity-70 cursor-not-allowed" : ""
        }`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>

      {status && (
        <p
          className={`text-center mt-2 ${
            status.startsWith("✅") ? "text-green-400" : "text-red-400"
          }`}
          role="alert"
        >
          {status}
        </p>
      )}
    </form>
  );
}
