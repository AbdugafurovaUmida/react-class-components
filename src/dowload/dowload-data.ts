import People from '../types/people'
function DownloadData(data: People[]) {
  const csvRows: string[] = []

  csvRows.push('name,gender,height,mass,homeworld,films')

  for (const person of data) {
    const { name, gender, height, mass, homeworld, films } = person
    const filmsString = films.join('; ')
    csvRows.push(`${name},${gender},${height},${mass},${homeworld},${filmsString}`)
  }

  const csvData = csvRows.join('\n')
  const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' })
  if (data.length) {
    downloadFile(blob, `${data.length}-characters.csv`)
  }
}

function downloadFile(blob: Blob, fileName: string) {
  const url = URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.setAttribute('href', url)
  link.setAttribute('download', fileName)
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()
  document.body.removeChild(link)
  URL.revokeObjectURL(url)
}

export default DownloadData
