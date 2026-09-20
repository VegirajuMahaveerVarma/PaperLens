export type ScannerCapture={uri:string;width:number;height:number};
export async function captureDocument():Promise<ScannerCapture>{throw new Error('Connect react-native-vision-camera native capture here.');}
export async function processDocument(capture:ScannerCapture){void capture;throw new Error('Connect OpenCV document processing here.');}