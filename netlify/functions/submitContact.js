const fetch = require("node-fetch");

exports.handler = async (event) => {
  try {
    // Parse the incoming form data
    const formData = JSON.parse(event.body);

    // Send it to FormBold (secure)
    const response = await fetch("add your api from any contact form provider", {
      method: "POST",
      body: JSON.stringify(formData),
      headers: {
        "Content-Type": "application/json"
      }
    });

    if (!response.ok) {
      return {
        statusCode: response.status,
        body: JSON.stringify({ message: "Form submission failed" })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success" })
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Server error" })
    };
  }
};
