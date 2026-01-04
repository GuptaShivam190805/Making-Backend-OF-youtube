class ApiResponse {
    constructor(statusCode, data, message = "Success"){
        this.statusCode = statusCode
        this.message = message
        this.data = data
        thi.success = statusCode < 400
    }
}

export {ApiResponse}