import { Router } from "express";
import { readdirSync } from 'fs';

const PATH_ROUTER = `${__dirname}`;
const router = Router();

/**
 * index.ts item
 * @returns 
 */
const cleanFileName = (fileName: string) => {
    const file = fileName.split(".ts").shift();
    console.log(file);
    return file;   
}

readdirSync(PATH_ROUTER).filter((fileName) => {
  const cleanName = cleanFileName(fileName);
  const routeName = cleanName?.split(".routes").shift();
        
  if (cleanName !== "index") {
    import(`./${cleanName}`).then((moduleRouter) => {
        router.use(`/api/${routeName}`, moduleRouter.router)
    });
  }
});

export { router };
