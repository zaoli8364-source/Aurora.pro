export const SiteTweaks = () => {
  const Component = () => null

  // 把右侧边栏的「关系图谱」改为「能力导图」
  Component.afterDOMLoaded = `
    document.querySelectorAll(".graph h3").forEach((el) => {
      if (el.textContent.trim() === "关系图谱") {
        el.textContent = "能力导图"
      }
    })
  `

  return Component
}

export default SiteTweaks
