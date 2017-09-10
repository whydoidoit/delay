import Promise from 'bluebird'
import timeout from 'playcanvas-timeout'

export default function(delay) {
    return new Promise(resolve=>{
        timeout(resolve, delay)
    })
}
