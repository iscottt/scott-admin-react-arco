import React from 'react';
import { Carousel } from '@arco-design/web-react';
import styles from './style/index.module.less';

export default function LoginBanner() {
  const data = [
    {
      slogan: '开箱即用的高质量模板',
      subSlogan: '丰富的的页面模板，覆盖大多数典型业务场景',
      image:
        'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
    },
    {
      slogan: '开箱即用的高质量模板',
      subSlogan: '丰富的的页面模板，覆盖大多数典型业务场景',
      image:
        'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
    },
    {
      slogan: '开箱即用的高质量模板',
      subSlogan: '丰富的的页面模板，覆盖大多数典型业务场景',
      image:
        'http://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6c85f43aed61e320ebec194e6a78d6d3.png~tplv-uwbnlip3yd-png.png',
    },
  ];
  return (
    <Carousel className={styles.carousel} animation="fade">
      {data.map((item, index) => (
        <div key={`${index}`}>
          <div className={styles['carousel-item']}>
            <div className={styles['carousel-title']}>{item.slogan}</div>
            <div className={styles['carousel-sub-title']}>{item.subSlogan}</div>
            <img
              alt="banner-image"
              className={styles['carousel-image']}
              src={item.image}
            />
          </div>
        </div>
      ))}
    </Carousel>
  );
}
