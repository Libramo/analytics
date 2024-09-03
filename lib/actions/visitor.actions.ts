"use server";

import { ID, Query } from "node-appwrite";

import {
  DATABASE_ID,
  ENDPOINT,
  VISITOR_COLLECTION_ID,
  PROJECT_ID,
  databases,
} from "../appwrite.config";

import { parseStringify } from "../utils";

// CREATE APPWRITE VISITOR data
export const createVisitor = async (visitor: CreateVisitorParams) => {
  try {
    const newVisitor = databases.createDocument(
      DATABASE_ID!,
      VISITOR_COLLECTION_ID!,
      ID.unique(),
      { visitor }
    );
    console.log(newVisitor);

    return newVisitor;
  } catch (error: any) {
    // Check existing user
    if (error && error?.code === 409) {
      const existingUser = await databases.listDocuments(
        DATABASE_ID!,
        VISITOR_COLLECTION_ID!,
        [Query.equal("email", [visitor.email])]
      );

      //   return existingUser.[0];
    }
    console.error("An error occurred while creating a new user:", error);
  }
};
