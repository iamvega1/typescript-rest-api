import Path from 'path'
import { Router as ExpressRouter } from 'express'
import { Browter } from '@donnyroufs/browter'
import { ExpressToBrowterAdapter } from '@donnyroufs/express-to-browter-adapter'

const expressAdapter = new ExpressToBrowterAdapter(ExpressRouter)
const browter = new Browter<ExpressRouter>(expressAdapter, {
  controllersDir: Path.resolve('./src/Web/Api/Controllers'),
})

browter.group(`/api/v1`, (browter) => {
  browter.group('/subscribers', (browter) => {
    browter.get('/', 'SubscribersController.index')
    browter.get('/:id', 'SubscribersController.show')
    browter.post('/', 'SubscribersController.store')
    browter.patch('/:id', 'SubscribersController.update')
    browter.delete('/:id', 'SubscribersController.destroy')
  })
})

export default browter.build()
