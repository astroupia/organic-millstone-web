"use client";
import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import emailjs from "@emailjs/browser";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      console.log("Sending email with:", {
        serviceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        templateId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        publicKey:
          process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY?.slice(0, 5) + "...",
        formData: { name, email, message },
      });

      const result = await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      );

      console.log("EmailJS result:", result);
      alert("Message sent successfully!");
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.error("Error sending email:", error);
      let errorMessage = "Unknown error";
      if (error instanceof Error) {
        errorMessage = error.message;
      } else if (typeof error === "string") {
        errorMessage = error;
      } else if (error && typeof error === "object") {
        errorMessage = JSON.stringify(error);
      }
      alert(`Failed to send message. Error: ${errorMessage}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 pt-18 py-12 md:py-24 px-5">
      <div className="flex items-center justify-center">
        <Image
          src="/assets/images/contact-image.jpeg"
          alt="Contact Image"
          width={500}
          height={500}
          className="w-full h-full object-cover rounded-xl brightness-75"
          style={{ aspectRatio: "500/500", objectFit: "cover" }}
        />
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold">Get in Touch</h2>
          <p className="text-muted-foreground">
            Fill out the form below and we'll get back to you as soon as
            possible.
          </p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="message">Message</Label>
            <Textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Enter your message"
              className="min-h-[130px]"
              required
            />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Submit"}
          </Button>
        </form>
      </div>
    </div>
  );
}
