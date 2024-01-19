function downloadPdf() {
  const elements = document.getElementById('content-print')
  const options = {
    margin: 10,
    filename: 'daniel-goycochea-cv.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    jsPDF: { unit: 'mm', format: 'letter', orientation: 'portrait' },
  }

  html2pdf(elements, options)
}
