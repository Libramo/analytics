"use client";

import React, { FormEvent, useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { cn, parseStringify } from "@/lib/utils";
import { Textarea } from "./ui/textarea";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { z } from "zod";
import { Button } from "./ui/button";
import { CustomFormField } from "./CustomFormField";
import { VisitorFormValidation } from "@/lib/validation";
import SubmitButton from "./SubmitButton";
import { createVisitor } from "@/lib/actions/visitor.actions";

export enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  CHECKBOX = "checkbox",
}

export const ContactForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof VisitorFormValidation>>({
    resolver: zodResolver(VisitorFormValidation),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit({
    name,
    email,
    message,
  }: z.infer<typeof VisitorFormValidation>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.

    try {
      const visitorData = { name, email, message };
      const visitor = await createVisitor(visitorData);
      console.log("visitor", visitor);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section>
          <h1 className="header">Contact</h1>
          <p className="text-black">
            Merci de remplir ce formulaire. Nous vous contacterons dès que
            possible
          </p>
        </section>

        {/* NAME INPUT */}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="name"
          label="Nom"
          placeholder="name"
        />
        {/* EMAIL INPUT */}
        <CustomFormField
          fieldType={FormFieldType.INPUT}
          control={form.control}
          name="email"
          label="Email"
          placeholder="email@gmail.com"
        />
        {/* MESSAGE INPUT AREA */}
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="message"
          label="Message"
          placeholder="Ecrivez votre message ici"
        />

        <SubmitButton />
      </form>
    </Form>
  );
};
