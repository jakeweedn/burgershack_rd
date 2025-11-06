import BaseController from "../utils/BaseController.js"



export class BurgersController extends BaseController {

    constructor() {
        super('api/burgers')
        console.log('Getting burgers now')
        this.router.get('/test', this.getTest)

    }

    async getTest(request, response, next) {
        try {

            response.send('Test success! 🍔') //Remember this part!


        }
        catch (error) {
            next(error)


        }
    }

}