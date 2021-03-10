import { ISubscribersModel } from 'Data/Models/Subscribers.model'
import { ISubscribersService } from 'Core/Ports/ISubscribers.service'
import { ISubscribersRepository } from 'Core/Ports/ISubscribers.repository'

export interface ISubscribersServiceOptions {
  subscribersRepository: ISubscribersRepository
}
export class SubscribersService implements ISubscribersService {
  private readonly _subRepo: ISubscribersRepository

  constructor({ subscribersRepository }: ISubscribersServiceOptions) {
    this._subRepo = subscribersRepository
  }

  public async getAllSubscribers() {
    return this._subRepo.getAllSubscribers()
  }

  public async getOneSubscriber(id: string) {
    return this._subRepo.findOneSubscriber(id)
  }

  public async createSubscriber(data: Omit<ISubscribersModel, '_id'>) {
    return this._subRepo.save(data)
  }

  public async changeSubscriber(
    id: string,
    { name, subscribedToChannel }: Omit<ISubscribersModel, '_id'>
  ) {
    const subscriber = await this.getOneSubscriber(id)

    if (!subscriber) {
      throw new Error('Could not change subscriber because it does not exist')
    }

    subscriber.name = name
    subscriber.subscribedToChannel = subscribedToChannel
    subscriber.save()

    return subscriber
  }

  public async deleteSubscriber(id: string) {
    return this._subRepo.delete(id)
  }
}
