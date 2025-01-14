const BANDCAMP_URL = (
  type: string,
  id: string,
  size: string = "large",
  bgColor: string = "ffffff",
  linkColor: string = "0687f5"
) => {
  return `https://bandcamp.com/EmbeddedPlayer/${type}=${id}/size=${size}/bgcol=${bgColor}/linkcol=${linkColor}/transparent=true/`
}

export { BANDCAMP_URL }
