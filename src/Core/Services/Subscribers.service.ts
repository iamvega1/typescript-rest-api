import { ISubscribersModel } from 'Data/Models/Subscribers.model'
import { ISubscribersService } from 'Core/Ports/ISubscribers.service'
import { ISubscribersRepository } from 'Core/Ports/ISubscribers.repository'
import { CreateSubscribersRequestDto } from 'Core/Dtos/Subscribers/CreateSubscribers.dto'
import { UpdateSubscriberDto } from 'Core/Dtos/Subscribers/UpdateSubscriberDto'

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

  public async createSubscriber(data: CreateSubscribersRequestDto) {
    return this._subRepo.save(data)
  }

  public async updateSubscriber(data: UpdateSubscriberDto) {
    return this._subRepo.updateSubscriber(data)
  }

  public async deleteSubscriber(id: string) {
    return this._subRepo.delete(id)
  }
}
