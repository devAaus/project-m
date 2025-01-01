"use server";

import path from "path";
import fs from "fs";

export const getFileContent = async (filePath: string) => {
   const joinedPath = path.relative(process.cwd(), filePath);
   const content = fs.readFileSync(joinedPath, "utf8");

   return content;
};