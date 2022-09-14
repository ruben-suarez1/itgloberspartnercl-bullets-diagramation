import React from "react";
import { Link } from "vtex.render-runtime"
import { LinkProps } from "./BulletTypes";
//import { useCssHandles } from "vxtex.css-handles"

type Props = {
  src: string
  titleBullet: string
  link: LinkProps
}

const Bullet = ({src, titleBullet, link}: Props) => {
  console.log("datos de bullet", src, titleBullet, link)
  return (
  <div>
    <Link
      to = {link.url}
    >
      <p>Mi imágen</p>
      <p>{titleBullet}</p>
    </Link>
  </div>
  )
}

Bullet.schema = {
  title: "Bullet",
  type: "object",
  properties: {
    src: {
      title: "Imagen de Bullet",
      type: "string",
      widget: {
        "ui.widget": "image-uploader"
      }
    }
  }
}

export default Bullet
