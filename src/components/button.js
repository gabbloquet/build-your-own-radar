export const buttonBuilder = (div, content, url) => {
  div.append('div:a')
    .attr('class', 'vtmn-btn vtmn-btn_variant--primary')
    .attr('href', url)
    .html(content)
}
