import { burgersService } from "../services/BurgersService.js"
import BaseController from "../utils/BaseController.js"



export class BurgersController extends BaseController {

    constructor() {
        super('api/burgers')
        console.log('Getting burgers now')
        this.router.get('/test', this.getTest)
        this.router.get('', this.getBurgers)

    }

    async getTest(request, response, next) {
        try {

            response.send('Test success! 🍔') //Remember this part!


        }
        catch (error) {
            next(error)


        }
    }

    async getBurgers(request, response, next) {

        try {
            console.log('getting the burgers 🍔')
            const burgersList = await burgersService.getBurgers()
            response.send(burgersList)


        }

        catch (error) {
            next(error)


        }

    }

}