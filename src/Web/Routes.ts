import Path from 'path'

import { Router as ExpressRouter } from 'express'
import { Browter } from '@donnyroufs/browter'
import { ExpressToBrowterAdapter } from '@donnyroufs/express-to-browter-adapter'
import { createValidator } from 'express-joi-validation'
import { SubscribersValidation } from './Api/Validators/Subscribers.validator'

const expressAdapter = new ExpressToBrowterAdapter(ExpressRouter)
const browter = new Browter<ExpressRouter>(expressAdapter, {
  controllersDir: Path.resolve('./src/Web/Api/Controllers'),
})

const validator = createValidator()

browter.group(`/api/v1`, (browter) => {
  browter.group('/subscribers', (browter) => {
    browter.get('/', 'SubscribersController.index')
    browter.get('/:id', 'SubscribersController.show')
    browter.post('/', 'SubscribersController.store', [
      validator.body(SubscribersValidation.store()),
    ])
    browter.patch('/:id', 'SubscribersController.update', [
      validator.body(SubscribersValidation.update()),
    ])
    browter.delete('/:id', 'SubscribersController.destroy')
  })
})

export default browter.build()
