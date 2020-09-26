export const buttonBuilder = (div, content, action) => {
  div.append('button')
    .attr('class', 'vtmn-btn vtmn-btn_variant--primary')
    .attr('id', content.toLowerCase())
    .html(content)

  const button = document.getElementById(content.toLowerCase())
  button.addEventListener('click', action)
}
