export class ResponseModel {
     data?: any;
     message?: string;
     status: boolean;

     constructor(res: any) {
          if (res) {
               this.data = typeof res.data != 'undefined' ? res.data : res;
               this.message = typeof res.message != 'undefined' ? res.message : res.Message;
               if (res.status == 'success') {
                    this.status = true;
               } else {
                    this.status = false;
               }
          } else {
               this.data = null;
               this.message = null;
               this.status = null;
          }
     }
}
