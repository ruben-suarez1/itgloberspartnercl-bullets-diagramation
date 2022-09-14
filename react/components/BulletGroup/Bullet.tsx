import React from "react";
//import { Link } from "vtex.render-rutime"
import { LinkProps } from "./BulletTypes";
//import { useCssHandles } from "vtex.css-handles"

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({src, titleBullet, link}: Props) => {
  console.log("datos de bullet", src, titleBullet, link)
  return <div>Mi propio bullet</div>
}

export default Bullet
