"use server"

export async function sendContactEmail(formData: FormData) {
  try {
    const name = formData.get("name") as string
    const email = formData.get("email") as string
    const company = formData.get("company") as string
    const projectType = formData.get("projectType") as string
    const message = formData.get("message") as string

    if (!name || !email || !message) {
      return { success: false, error: "Please fill in all required fields." }
    }

    // Log the form data (in a real implementation, this would send an email)
    console.log("Contact form submission:", {
      name,
      email,
      company,
      projectType,
      message,
      to: "info@vyllion.com",
    })

    // Simulate a delay to mimic sending an email
    await new Promise((resolve) => setTimeout(resolve, 500))

    // Return success response
    return { success: true, message: "Thank you! Your message has been sent successfully." }
  } catch (error) {
    console.error("Form submission error:", error)
    return { success: false, error: "Failed to send message. Please try again." }
  }
}
