import { scheduleJob } from 'node-schedule'
import exportData from '../controllers/save.js'

const exportJob = scheduleJob('0 0 0 * * *', () => {
    exportData()
})

export { exportJob }
