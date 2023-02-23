import Compressor from "compressorjs";

export class FileUtil {

  static async compressFile(target: any){
   return new Promise((resolve, reject) => {
      let compress = new Compressor(target, {
        quality: 0.4,
        success(result){
          resolve(result)
        },
        error(err){
          reject(err)
        }
      })
    })
  }

  static convertFileToBase64(file: any){
    let toBase64 = (file: Blob) => new Promise((resolve,reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = error => reject(error);
    }).then(data => {
      return data;
    })
    return toBase64(file);
  }
}
