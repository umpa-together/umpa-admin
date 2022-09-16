#!/usr/bin/env node
import shell from 'shelljs'

const exportData = () => {
    shell.cd('~')
    shell.exec('./mongoExport.sh')
}

export default exportData