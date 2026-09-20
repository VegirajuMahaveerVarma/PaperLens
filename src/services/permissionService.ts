import {NativeModules, Platform} from 'react-native';
type StorageBridge={requestStorageAccess?:()=>Promise<boolean>;hasStorageAccess?:()=>Promise<boolean>};
const bridge=(NativeModules.PaperLensStorage??{}) as StorageBridge;
export async function hasStorageAccess(){if(Platform.OS!=='android'||!bridge.hasStorageAccess)return true;return bridge.hasStorageAccess();}
export async function requestStorageAccess(){if(Platform.OS!=='android'||!bridge.requestStorageAccess)return true;return bridge.requestStorageAccess();}