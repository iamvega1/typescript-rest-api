import { ISubscribersModel } from 'Data/Models/Subscribers.model'

export interface ISubscribersService {
  getAllSubscribers(): Promise<ISubscribersModel[]>
  getOneSubscriber(
    id: ISubscribersModel['_id']
  ): Promise<ISubscribersModel | null>
  createSubscriber(
    data: Omit<ISubscribersModel, '_id'>
  ): Promise<ISubscribersModel>
  changeSubscriber(
    id: string,
    data: Omit<ISubscribersModel, '_id'>
  ): Promise<ISubscribersModel>
  deleteSubscriber(id: string): Promise<boolean>
}
