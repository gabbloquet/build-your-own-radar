export const buttonBuilder = (div, content, url) => {
  div.append('div:a')
    .attr('class', 'vtmn-btn vtmn-btn_variant--primary')
    .attr('id', content.toLowerCase())
    .attr('href', url)
    .html(content)

  // const button = document.getElementById(content.toLowerCase())
  // button.addEventListener('click', action)
}
