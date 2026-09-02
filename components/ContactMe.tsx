import React, { useState, useRef } from "react";
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";
import emailjs from '@emailjs/browser';

type Props = {};

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit, reset } = useForm<Inputs>();
  const [isLoading, setIsLoading] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");
  const formRef = useRef<HTMLFormElement>(null);

  // Handle input focus to scroll into view on mobile
  const handleInputFocus = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    // Small delay to allow keyboard to appear
    setTimeout(() => {
      e.target.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
      });
    }, 300);
  };

  const onSubmit: SubmitHandler<Inputs> = async (formData) => {
    setIsLoading(true);
    setStatusMessage("");

    try {
      // EmailJS configuration
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: 'amraouikhireddine@gmail.com'
      };

      // Replace these with your EmailJS credentials
      const result = await emailjs.send(
        'service_wdxwm4c',      // Replace with your EmailJS service ID
        'template_3a60r98',     // Replace with your EmailJS template ID
        templateParams,
        'esZNXXn4pTm8H-QyM'       // Replace with your EmailJS public key
      );

      console.log('Email sent successfully:', result);
      setStatusMessage("Message sent successfully! I'll get back to you soon.");
      reset(); // Clear the form
      
      // Clear success message after 3 seconds
      setTimeout(() => {
        setStatusMessage("");
      }, 3000);
    } catch (error) {
      console.error('Failed to send email:', error);
      setStatusMessage("Failed to send message. Please try again or contact me directly.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-6 md:px-10 justify-evenly mx-auto items-center py-20">
      <h3 className="absolute top-16 left-1/2 transform -translate-x-1/2 uppercase tracking-[20px] text-professionalDark text-xl md:text-2xl font-semibold">
        Contact
      </h3>
      <div className="flex flex-col space-y-4 md:space-y-5 lg:space-y-6 xl:space-y-6 2xl:space-y-8 mt-16 w-full max-w-2xl">
        {/* <h4 className="text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-center text-professionalDark">
          I have got just what you need.{" "}
          <span className="decoration-professionalBlue/50 underline">Lets talk.</span>
        </h4> */}

        <div className="space-y-1 md:space-y-3 lg:space-y-3 xl:space-y-3 2xl:space-y-5">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-darkGreen h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">+213541700084</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-darkGreen h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              amraouikhireddine@gmail.com
            </p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-darkGreen h-7 w-7 animate-pulse" />
            <p className="text-lg md:text-2xl lg:text-2xl">
              Boumerdes, Algeria
            </p>
          </div>
        </div>

        <form
          ref={formRef}
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-3 w-full max-w-lg mx-auto"
        >
          <div className="flex flex-col md:flex-row md:space-x-2 space-y-3 md:space-y-0">
            <input
              {...register("name", { required: "Name is required" })}
              placeholder="Name"
              className="contactInput flex-1"
              type="text"
              required
              onFocus={handleInputFocus}
            />
            <input
              {...register("email", { required: "Email is required" })}
              placeholder="Email"
              className="contactInput flex-1"
              type="email"
              required
              onFocus={handleInputFocus}
            />
          </div>
          <input
            {...register("subject", { required: "Subject is required" })}
            placeholder="Subject"
            className="contactInput"
            type="text"
            required
            onFocus={handleInputFocus}
          />
          <textarea
            {...register("message", { required: "Message is required" })}
            placeholder="Message"
            className="contactInput resize-none"
            rows={4}
            required
            onFocus={handleInputFocus}
          />
          
          {/* Status Message */}
          {statusMessage && (
            <div className={`text-center p-3 rounded-lg transition-all duration-300 ${
              statusMessage.includes('successfully') 
                ? 'bg-green-100 text-green-800' 
                : 'bg-red-100 text-red-800'
            }`}>
              {statusMessage}
            </div>
          )}
          
          <button 
            type="submit"
            disabled={isLoading}
            className={`py-4 px-8 rounded-lg text-white font-bold text-lg transition-all duration-300 ${
              isLoading 
                ? 'bg-gray-400 cursor-not-allowed' 
                : 'bg-lightGreen hover:bg-green-600 active:scale-95'
            }`}
          >
            {isLoading ? 'Sending...' : 'Submit'}
          </button>
        </form>
      </div>
    </div>
  );
}
