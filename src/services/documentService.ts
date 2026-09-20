export type OcrResult={text:string;language?:string;confidence?:number};
export async function runOcr(uri:string):Promise<OcrResult>{void uri;throw new Error('Connect Tesseract OCR native bridge here.');}
export async function createPdfFromImages(uris:string[]):Promise<string>{void uris;throw new Error('Connect pdf-lib export pipeline here.');}