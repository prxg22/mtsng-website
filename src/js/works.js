import * as worksFile from '../assets/data/works.json'
import images from '../assets/images/projects/*.jpg'

export const init = (container = document.body) => {
  debugger
  console.log(images)
  const works = Object.values(worksFile)

  works.map(({ src }) => {
      const img = Object.keys(images).find(i => src === i)
      const el = document.createElement('img')
      el.src = images[img]

      container.appendChild(el)
  })
}
