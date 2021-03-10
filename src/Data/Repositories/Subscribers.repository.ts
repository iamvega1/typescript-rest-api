import SubscribersModel, {
  ISubscribersModel,
} from 'Data/Models/Subscribers.model'
import { ISubscribersRepository } from 'Core/Ports/ISubscribers.repository'

export class SubscribersRepository implements ISubscribersRepository {
  private _model = SubscribersModel

  public async getAllSubscribers() {
    return this._model.find({})
  }

  public async findOneSubscriber(id: string) {
    return SubscribersModel.findById(id)
  }

  public async save(data: Omit<ISubscribersModel, '_id'>) {
    const subscriber = new this._model(data)
    return subscriber.save()
  }

  public async delete(id: string) {
    const { deletedCount } = await this._model.deleteOne({ _id: id })
    return deletedCount ? deletedCount >= 1 : false
  }
}
