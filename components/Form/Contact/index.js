import { useForm } from "@formspree/react"
import { Input } from "../Input"
import styles from "./styles.module.scss"
import { ChevronRightIcon } from "@heroicons/react/solid"

export const ContactForm = () => {
  const [state, handleSubmit] = useForm("mnqwkakr")

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
      {state.succeeded ? (
        <p className={styles.success}>
          Thank you for getting in touch. I will get back to you within 48
          hours!
        </p>
      ) : (
        <button
          className={`button primary ${styles.formButton}`}
          disabled={state.submitting}
        >
          Submit
          <ChevronRightIcon />
        </button>
      )}
    </form>
  )
}
