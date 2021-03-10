import { ISubscribersModel } from 'Data/Models/Subscribers.model'

export interface ISubscribersRepository {
  getAllSubscribers(): Promise<ISubscribersModel[]>
  findOneSubscriber(id: string): Promise<ISubscribersModel | null>
  save(data: Omit<ISubscribersModel, '_id'>): Promise<ISubscribersModel>
  delete(id: string): Promise<boolean>
}
