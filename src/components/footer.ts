export function Footer() {
  const footer = document.createElement('footer')
  footer.id = 'footer'
  footer.innerText = 'Copyright ' + new Date().getFullYear() + ' Reactivity'
  return footer
}

