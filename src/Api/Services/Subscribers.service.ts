import { ServiceRepository } from '../Repositories/Service.repository'
import { ISubscribersModel } from '../Models/Subscribers.model'

export class SubscribersService {
  private _repository = new ServiceRepository()

  public async getAllSubscribers() {
    return this._repository.getAllSubscribers()
  }

  public async getOneSubscriber(id: string) {
    return this._repository.findOneSubscriber(id)
  }

  public async createSubscriber(data: Omit<ISubscribersModel, '_id'>) {
    return this._repository.save(data)
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
    return this._repository.delete(id)
  }
}
