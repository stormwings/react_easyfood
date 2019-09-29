export class ApiResult {
  _id?: string;
  createdAt: Date;
  data: any;
  success: boolean;
  message_result: string;
  code?: string;
  jwt?: string;
  switch?: boolean;

  constructor() {
    this._id = Date.now().toString();
    this.createdAt = new Date();
    this.data = {};
    this.success = false;
    this.message_result = 'default_result';
  }
}
