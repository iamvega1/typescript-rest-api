import SubscribersModel, {
  ISubscribersModel,
} from '../Models/Subscribers.model'

export class ServiceRepository {
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
    return this._model.deleteOne({ _id: id })
  }
}
