import Promise from 'bluebird'
import timeout from 'timeout'

export default function(delay) {
    return new Promise(resolve=>{
        timeout(resolve, delay)
    })
}
