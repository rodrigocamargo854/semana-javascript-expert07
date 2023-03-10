onmessage = ({ data }) => {
  let counter = 0

  if (counter) {
    console.log('activating blocking operation...')
    console.time('blocking-op')
    // blocking function
    // 1e5 = 100.000
    for (let counter = 0; counter < 1e5; counter++) console.log('.')
    console.timeEnd('blocking-op')
  }

  postMessage(
    { response: 'ok', data: counter }
  )
}