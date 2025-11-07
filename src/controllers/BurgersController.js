import { burgersService } from "../services/BurgersService.js"
import BaseController from "../utils/BaseController.js"



export class BurgersController extends BaseController {

    constructor() {
        super('api/burgers')
        console.log('Getting burgers now')

        this.router.get('/test', this.getTest)
        this.router.get('', this.getBurgers)
        this.router.post('', this.createBurger)
        this.router.delete('/:burgerId', this.deleteBurger) //Don't forget the : here!

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

    async createBurger(request, response, next) {

        try {
            const burgerData = request.body
            console.log('burgerData', burgerData)
            const burger = await burgersService.createBurger(burgerData)

            response.send(burger)

        }
        catch (error) {
            next(error)


        }
    }


    async deleteBurger(request, response, next) {

        try {
            const burgerId = request.params.burgerId
            const burgerToDelete = await burgersService.deleteBurger(burgerId)
            console.log('burgerId', burgerId)


            response.send(burgerToDelete)





        }

        catch (error) {
            next(error)
        }



    }

}