export const buttonBuilder = (div, content, action) => {
  div.append('button')
    .attr('class', 'vtmn-btn vtmn-btn_variant--primary')
    .attr('id', content.toLowerCase())
    .html(content)

  const frontButton = document.getElementById(content.toLowerCase())
  frontButton.addEventListener('click', action)
}
