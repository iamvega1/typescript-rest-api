import { Request, Response } from 'express'
import SubscribersModel from '../Models/Subscribers.model'

export class SubscribersController {
  async index(_: any, res: Response) {
    const subscribers = await SubscribersModel.find({})
    res.status(200).json(subscribers)
  }

  async show(req: Request, res: Response) {
    const subscriber = await SubscribersModel.findById(req.params.id)
    res.status(200).json(subscriber)
  }

  async store(req: Request, res: Response) {
    const subscriber = new SubscribersModel(req.body)
    await subscriber.save()

    res.status(201).json(subscriber)
  }

  async update(req: Request, res: Response) {
    const subscriber = await SubscribersModel.findById(req.params.id)

    if (subscriber) {
      subscriber.name = req.body?.name
      subscriber.subscribedToChannel = req.body?.subscribedToChannel
      subscriber.save()
      return res.sendStatus(204)
    }

    res.sendStatus(404)
  }

  async destroy(req: Request, res: Response) {
    const subscriber = await SubscribersModel.findById(req.params.id)

    if (subscriber) {
      subscriber.remove()
    }

    res.sendStatus(204)
  }
}
