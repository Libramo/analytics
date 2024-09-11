"use server";

import { ID, Query } from "node-appwrite";

import {
  DATABASE_ID,
  VISITOR_COLLECTION_ID,
  databases,
} from "../appwrite.config";

import { parseStringify } from "../utils";
import { z } from "zod";
import { VisitorFormValidation } from "../validation";

// CREATE APPWRITE VISITOR data

export const createVisitor = async ({
  name,
  email,
  message,
}: CreateVisitorParams) => {
  try {
    const newVisitor = await databases.createDocument(
      DATABASE_ID!,
      VISITOR_COLLECTION_ID!,
      ID.unique(),
      { name, email, message }
    );
    console.log("Inside Create Function", newVisitor);

    return newVisitor;
  } catch (error) {
    console.error(error);
  }
};
