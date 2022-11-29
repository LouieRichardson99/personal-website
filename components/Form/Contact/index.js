import { useState } from "react"
import { Input } from "../Input"
import styles from "./styles.module.scss"
import { ChevronRightIcon } from "@heroicons/react/24/solid"
import { usePlausible } from "next-plausible"

export const ContactForm = () => {
  const [formResponse, setFormResponse] = useState(null)
  const plausible = usePlausible()

  const handleSubmit = (event) => {
    event.preventDefault()

    const data = new FormData(event.target)

    fetch("https://formspree.io/f/mnqwkakr", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        if (response.ok) {
          setFormResponse("ok")
          plausible("Contact form submitted")
          event.target.reset()
        } else {
          setFormResponse("err")
        }
      })
      .catch(() => setFormResponse("err"))
  }

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <Input
        name="full_name"
        label="Full Name"
        type="text"
        autoComplete="name"
        required
      />
      <Input name="phone" label="Phone" type="tel" />
      <Input
        name="email"
        label="Email"
        type="email"
        autoComplete="email"
        required
      />
      <Input name="message" label="Message" type="textarea" required />
      {formResponse === "ok" && (
        <p className={styles.responseMessage}>
          Thank you for getting in touch. I will get back to you within 48
          hours!
        </p>
      )}

      {formResponse === "err" && (
        <p className={styles.responseMessage}>
          There seems to have been an error.. Please try again.
        </p>
      )}

      {formResponse !== "ok" && (
        <button className={`button primary ${styles.formButton}`}>
          Submit
          <ChevronRightIcon />
        </button>
      )}
    </form>
  )
}
