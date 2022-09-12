import "../styles/globals.css";
import { useState } from "react";
import { Navbar, Footer } from "../components/index";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  const [guestName, setGuestName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [title, setTitle] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  return (
    <>
      <Head>
        <meta charset="UTF-8" />
        <meta name="keywords" content="titla, meta, nextjs" />
        <meta name="Felix Odenhall and Matilda Yngman" content="Syamlal CM" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>morfars stuga</title>
      </Head>
      <Navbar />
      <Component
        {...pageProps}
        setGuestName={setGuestName}
        setEmail={setEmail}
        setMessage={setMessage}
        setTitle={setTitle}
        setPhoneNumber={setPhoneNumber}
        guestName={guestName}
        email={email}
        message={message}
        title={title}
        phoneNumber={phoneNumber}
      />
      <Footer
        setGuestName={setGuestName}
        setEmail={setEmail}
        setMessage={setMessage}
        setTitle={setTitle}
        guestName={guestName}
        email={email}
        message={message}
        title={title}
      />
    </>
  );
}

export default MyApp;
