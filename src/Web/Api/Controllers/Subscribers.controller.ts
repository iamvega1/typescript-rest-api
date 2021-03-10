import { Request, Response } from 'express'
import { SubscribersService } from '../../../Core/Services/Subscribers.service'
import { BaseHttpController } from '../../Lib/BaseHttp.controller'

export class SubscribersController extends BaseHttpController {
  private _subscribersService = new SubscribersService()

  async index(_: any, res: Response) {
    const subscribers = await this._subscribersService.getAllSubscribers()
    res.status(200).json(subscribers)
  }

  async show(req: Request, res: Response) {
    const subscriber = await this._subscribersService.getOneSubscriber(
      req.params.id
    )

    res.status(200).json(subscriber)
  }

  async store(req: Request, res: Response) {
    const subscriber = await this._subscribersService.createSubscriber(req.body)

    res.status(201).json(subscriber)
  }

  async update(req: Request, res: Response) {
    await this._subscribersService.changeSubscriber(req.params.id, req.body)

    res.sendStatus(204)
  }

  async destroy(req: Request, res: Response) {
    await this._subscribersService.deleteSubscriber(req.params.id)

    res.sendStatus(204)
  }
}
