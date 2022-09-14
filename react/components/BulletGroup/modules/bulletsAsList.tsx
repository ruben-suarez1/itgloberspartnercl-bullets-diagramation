import React from "react"
import { BulletsSchema } from "../BulletTypes"
import Bullet from "../Bullet"

export const getBulletsAsTSXList = (
  bullets: BulletsSchema
) => (
  bullets.map((bullet:any, index) => {
    console.log("Mi bullets es", bullet)
    return <Bullet
      key={index}
      src={bullet.src}
      titleBullet={bullet.titleBullet}
      link= {
        bullet.link
        ?
        bullet.link
        :
        {
          url: "",
          attributeNofollow: false,
          atributeTitle: "",
          openNewTab: false,
          newTab: false
        }
      }
    />
  })
)
