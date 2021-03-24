import 'module-alias/register'
import { MongoHelper } from '@/infra/db/mongodb/helpers/mongo-helper'
import env from '@/main/config/env'

MongoHelper.connect(env.mongoUrl)
  .then(async () => {
    const port: string|number = env.port
    const app = (await import('./config/app')).default
    app.listen(port, () => console.log(`Server running at http://localhost:${port}`))
  })
  .catch(console.error)
