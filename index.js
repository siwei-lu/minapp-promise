// @flow
declare var wx: Object

export const _promisify = (wx: any, prop: string, option: any) =>
  new Promise<*>((resolve, reject) => {
    const target = wx[prop]

    if (!target) {
      reject('No such method in wx!')
      return
    }

    target({...option,
      success: resolve,
      fail: reject,
    })
  })

const _pro = new Proxy(wx, {
  get(target, prop) {
    return (option: any) => _promisify(target, prop, option)
  }
})

export default _pro