"use client";

import React, { FormEvent, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "./ui/textarea";
import {
  databases,
  PROJECT_ID,
  DATABASE_ID,
  VISITOR_COLLECTION_ID,
} from "@/lib/appwrite.config";
import { ID } from "node-appwrite";
import { createVisitor } from "@/lib/actions/visitor.actions";

import { VisitorFormValidation } from "@/lib/validation";
import { z } from "zod";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

export const ContactForm = () => {
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const form = useForm<z.infer<typeof VisitorFormValidation>>({
    resolver: zodResolver(VisitorFormValidation),
    defaultValues: {
      fName: "",
      lName: "",
      email: "",
      message: "",
    },
  });
  const handleSubmit = async (
    values: z.infer<typeof VisitorFormValidation>
  ) => {
    // e.preventDefault();

    try {
      const visitor = { values };
      const newVisitor = await createVisitor(visitor.values);

      console.log("Document created successfully:", newVisitor);
      // alert(newVisitor);
    } catch (error) {
      console.error("Error creating document:", error);
      alert("Failed");
    }
  };

  return (
    <div>
      <div className="max-w-md w-full mx-auto rounded-none md:rounded-2xl p-4 md:p-8 shadow-input bg-white dark:bg-black">
        <h1 className="font-bold text-3xl text-neutral-800 dark:text-neutral-200">
          Formulaire de contact
        </h1>
        <p className=" text-neutral-600 text-sm max-w-sm mt-2 dark:text-neutral-300">
          Dites nous comment vous vous appelez et votre email et nos équipes
          vous repondront dans les 48 heures (c est pas long 😉)
        </p>

        <form className="my-8" onSubmit={form.handleSubmit(handleSubmit)}>
          <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2 mb-4">
            <LabelInputContainer>
              <Label htmlFor="firstname">Prénom</Label>
              <Input
                id="fName"
                name="fName"
                placeholder="Osman"
                type="text"
                // value={fName}
                onChange={(e) => setFName(e.target.value)}
              />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label htmlFor="lastname">Nom</Label>
              <Input
                id="lName"
                name="lName"
                placeholder="Abdi"
                type="text"
                // value={lName}
                onChange={(e) => setLName(e.target.value)}
              />
            </LabelInputContainer>
          </div>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="email">Adresse Email</Label>

            <Input
              id="email"
              placeholder="osman.abdi@gmail.com"
              type="email"
              name="email"
              // value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </LabelInputContainer>
          <LabelInputContainer className="mb-4">
            <Label htmlFor="password">Message</Label>
            <Textarea
              id="textMessage"
              placeholder="Saisissez votre message !"
              rows={5}
              name="message"
              // value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </LabelInputContainer>

          <button
            className="bg-gradient-to-br relative group/btn from-black dark:from-zinc-900 dark:to-zinc-900 to-neutral-600 block dark:bg-zinc-800 w-full text-white rounded-md h-10 font-medium shadow-[0px_1px_0px_0px_#ffffff40_inset,0px_-1px_0px_0px_#ffffff40_inset] dark:shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
            type="submit"
          >
            Envoyer
            <BottomGradient />
          </button>
        </form>
      </div>
    </div>
  );
};

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex flex-col space-y-2 w-full", className)}>
      {children}
    </div>
  );
};
