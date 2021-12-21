import React from 'react'

import two from '../../assets/art/2.jpg'
import three from '../../assets/art/3.jpg'
import a from '../../assets/art/a.jpg'
import b from '../../assets/art/b.jpg'
import c from '../../assets/art/c.jpg'
import d from '../../assets/art/d.jpg'
import dfg from '../../assets/art/dfg.jpg'
import e from '../../assets/art/e.jpg'
import f from '../../assets/art/f.jpg'
import g from '../../assets/art/g.jpg'
import h from '../../assets/art/h.jpg'
import i from '../../assets/art/i.jpg'
import j from '../../assets/art/j.jpg'
import k from '../../assets/art/k.jpg'
import l from '../../assets/art/l.jpg'
import m from '../../assets/art/m.jpg'
import n from '../../assets/art/n.jpg'
import n13 from '../../assets/art/n13.jpg'
import n12 from '../../assets/art/n12.jpg'
import n8 from '../../assets/art/n8.jpg'
import n7 from '../../assets/art/n7.jpg'
import n5 from '../../assets/art/n5.jpg'
import n3 from '../../assets/art/n3.jpg'
import n2a from '../../assets/art/n2a.jpg'
import n2 from '../../assets/art/n2.jpg'
import n1 from '../../assets/art/n1.jpg'
import no from '../../assets/art/no.jpg'
import np from '../../assets/art/np.jpg'
import nw from '../../assets/art/nw.jpg'
import q from '../../assets/art/q.jpg'
import s from '../../assets/art/s.jpg'
import t from '../../assets/art/t.jpg'
import u from '../../assets/art/u.jpg'
import v from '../../assets/art/v.jpg'
import x from '../../assets/art/x.jpg'
import xv from '../../assets/art/xv.jpg'
import y from '../../assets/art/y.jpg'
import z from '../../assets/art/z.jpg'
import zb from '../../assets/art/zb.jpg'
import zc from '../../assets/art/zc.jpg'
import zm from '../../assets/art/zm.jpg'
import zn from '../../assets/art/zn.jpg'
import zv from '../../assets/art/zv.jpg'
import zx from '../../assets/art/zx.jpg'

import { Text, Image } from '@chakra-ui/react'
import './Art.css'

function Art() {
  const artPoolFin = [
    { src: n1 },
    { src: n3 },
    { src: n2a },
    { src: nw },
    { src: n5 },
    { src: e },
    { src: n13 },
    { src: n12 },
    { src: n8 },
    { src: n7 },
    { src: a },
    { src: no },
    { src: np },
    { src: zn },
  ]

  const artPoolUnfin = [
    { src: d },
    { src: dfg },
    { src: n },
    { src: two },
    { src: n2 },
    { src: three },
    { src: b },
    { src: c },
    { src: f },
    { src: g },
    { src: h },
    { src: i },
    { src: j },
    { src: k },
    { src: l },
    { src: m },
    { src: q },
    { src: s },
    { src: t },
    { src: u },
    { src: v },
    { src: x },
    { src: xv },
    { src: y },
    { src: z },
    { src: zb },
    { src: zc },
    { src: zm },
    { src: zv },
    { src: zx },
  ]

  return (
    <>
      <div>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="black"
          marginBottom="1rem"
          align="center"
        >
          {' '}
          Some almost finished artwork
        </Text>
      </div>
      <div className="grid">
        {artPoolFin.map((imgSrc, index) => (
          <Image
            boxShadow="dark-lg"
            boxSize="450px"
            p="1"
            rounded="md"
            bg="black"
            src={imgSrc.src}
            alt="Some more rudimentary sketches art"
            index={index}
          />
        ))}
      </div>
      <div>
        <Text
          fontSize="2xl"
          fontWeight="bold"
          color="black"
          marginBottom="1rem"
          align="center"
        >
          {' '}
          Some sketches/practice work
        </Text>
      </div>
      <div className="grid">
        {artPoolUnfin.map((imgSrc, index) => (
          <Image
            boxShadow="dark-lg"
            boxSize="450px"
            p="1"
            rounded="md"
            bg="black"
            src={imgSrc.src}
            alt="Some more rudimentary sketches art"
            index={index}
          />
        ))}
      </div>
    </>
  )
}

export default Art
