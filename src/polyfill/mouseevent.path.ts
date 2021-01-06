declare global {
  interface Event {
    path: Array<Element|Window|Document>;
  }
}

if (!('path' in Event.prototype)) {
  Object.defineProperty(Event.prototype, 'path', {
    get: function () {
      const path = []
      let currentElem = (this as Event).target as Element|null
      while (currentElem) {
        path.push(currentElem)
        currentElem = currentElem.parentElement
      }
      path.push(document)
      path.push(window)
      return path
    }
  })
}

export default {}
