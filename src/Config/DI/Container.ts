import * as Awilix from 'awilix'

import { SubscribersRepository } from 'Data/Repositories/Subscribers.repository'
import { SubscribersController } from 'Web/Api/Controllers/Subscribers.controller'
import { SubscribersService } from 'Core/Services/Subscribers.service'

export const container = Awilix.createContainer()

container.register({
  subscribersService: Awilix.asClass(SubscribersService).singleton(),
  subscribersController: Awilix.asClass(SubscribersController).singleton(),
  subscribersRepository: Awilix.asClass(SubscribersRepository).singleton(),
})
